import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Tag } from '../../../model';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ContentService, TagService } from '../../../service';

@Component({
  selector: 'form-story',
  templateUrl: './form-story.component.html'
})
export class FormStoryComponent implements OnInit {
  name = 'ng2-ckeditor';
  ckeConfig: any;
  mycontent: string;
  log: string = '';
  fileToUpload: File = null;
  form: FormGroup;
  tags: Tag[];
  id: string;

  @ViewChild('myckeditor', { static: true }) ckeditor: any;

  constructor(private formBuilder: FormBuilder,
    private contentService: ContentService,
    private tagService: TagService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
    this.form = formBuilder.group({
      title: new FormControl(null),
      content: new FormControl(null),
      tag: new FormControl(null),
      gambar: new FormControl(null)
    });
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    if (this.id) {
      let taging = [];

      this.contentService.getDetail(this.id).subscribe((data) => {
        this.form.get('title').setValue(data.title);
        this.form.get('content').setValue(data.content);

        data.tag.forEach(e => {
          taging.push(e._id)
        })
        this.form.get('tag').setValue(taging);

      })
    }

    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true,
      height: 500
    };

    this.tagService.getTag().subscribe((tag) => {
      this.tags = tag;
    })
  }


  handleFile(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  onSubmit() {
    let tags = this.form.value.tag;
    const formData = new FormData();
    formData.append('title', this.form.value.title);
    formData.append('content', this.form.value.content);

    for (let i = 0; i < tags.length; i++) {
      formData.append('tag', tags[i]);
    }

    // formData.append('gambar', this.fileToUpload);

    if (this.id) {
      this.contentService.update(this.id, formData).subscribe((data) => {
        this.router.navigateByUrl('/my-story');
      });
    } else {
      this.contentService.add(formData).subscribe(() => {
        this.router.navigateByUrl('/my-story');
      });
    }
  }
}    