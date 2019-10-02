import { Component, OnInit } from "@angular/core";
import { BusinessService } from "../business.service";
import { async } from "q";

@Component({
  selector: "app-crud-get",
  templateUrl: "./crud-get.component.html",
  styleUrls: ["./crud-get.component.css"]
})
export class CrudGetComponent implements OnInit {
  constructor(private bs: BusinessService) {}

  public business: any;
  ngOnInit() {
    // this.business = this.getAllBusiness;
    this.bs.getBusiness().subscribe((data: any) => {
      this.business = data;
      console.log(this.business);
    });
    // this.business = this.bs.getBusiness();
    // console.log(this.business);
    
  }

  async getAllBusiness() {
    await this.bs.getBusiness();
  }
}
