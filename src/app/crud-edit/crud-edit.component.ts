import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription, Subscriber } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { BusinessService } from "../business.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-crud-edit",
  templateUrl: "./crud-edit.component.html",
  styleUrls: ["./crud-edit.component.css"]
})
export class CrudEditComponent implements OnInit {
  business: any = {};
  public bu: any;
  sub: Subscription;
  angForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bs: BusinessService,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.formBuilder.group({
      person_name: ["", Validators.required],
      business_name: ["", Validators.required],
      business_gst_number: ["", Validators.required]
    });
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.bu = params;
      console.log(this.bs);
    });
  }

  delete(_id) {
    this.bs.delete(_id).subscribe(data => {
      console.log(`Done`);
      this.router.navigate(["/business"]);
    });
  }

  upBusiness(person_name, business_name, business_gst_number, id) {
    this.bs.updateBusiness(person_name, business_name, business_gst_number, id);
  }
}
