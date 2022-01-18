import { Component, OnInit } from '@angular/core';
import { LicenseOutput } from 'src/app/dto/license-output';
import { LicenseService } from 'src/app/services/license.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-list-license',
  templateUrl: './list-license.component.html',
  styleUrls: ['./list-license.component.css']
})
export class ListLicenseComponent implements OnInit {

  licenses: Observable<LicenseOutput[]>;
  constructor(private licenseService: LicenseService) { }

  ngOnInit(): void {
    this.licenses = this.licenseService.getAllLicenses();
  }
}
