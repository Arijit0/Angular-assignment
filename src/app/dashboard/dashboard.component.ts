import { Component, OnInit } from '@angular/core';
import { JsonApiService } from '../json-api.service';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private JsonApiService: JsonApiService, private toastr: ToastrService) { }

  showToaster(city) {
    this.toastr.show(city.target.value);
  }

  popup(event) {
    // console.log(this.modalService.open(event.target.value));
    // var popup = document.getElementById("myPopup");
    // popup.classList.toggle("show");
    
    alert(event.target.value);
  }

  list;

  ngOnInit(): void {
    this.JsonApiService.getUserInfo().subscribe(res => {
      this.list = res;
      // console.log(this.list);
    })
  }

  alert() {
    confirm("sdfjh");
  }



}
