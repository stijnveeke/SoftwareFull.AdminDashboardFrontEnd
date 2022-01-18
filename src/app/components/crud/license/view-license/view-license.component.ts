import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LicenseOutput } from 'src/app/dto/license-output';
import { LicenseService } from 'src/app/services/license.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-view-license',
  templateUrl: './view-license.component.html',
  styleUrls: ['./view-license.component.css']
})
export class ViewLicenseComponent implements OnInit {

  constructor(private licenseService: LicenseService,  private route: ActivatedRoute) { }


  license: Observable<LicenseOutput>;

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const licenseIdFromRoute = String(routeParams.get('licenseId'));

    this.license = this.licenseService.getLicense(licenseIdFromRoute);
    console.log(this.license);
  }

}
