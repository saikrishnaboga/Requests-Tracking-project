import { Component, Input, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ApiService } from "src/app/apis.service";
import { Router } from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: "app-request-form",
  templateUrl: "./request-form.component.html",
  styleUrls: ["./request-form.component.css"],
})
export class RequestFormComponent implements OnInit {
  date: any;
  minDate: any;
  maxDate: any;
  public RegisterFormData: any;

  constructor(private service: ApiService, private router: Router) {}

  typeOfReq = ["DB", "Code", "Deployment"];
  typeOfEnvironment = ["Dev", "QA", "Demo (On Prem)", "Demo Cloud", "Prod"];

  artifact = [
    "Asimov-UI ",
    "Cloud-UI",
    "Multi-tenancy",
    "Aiotal-Core",
    "Aiotal-Platform ",
    "IDM Service",
    "Authorization Service ",
    "Alerts and Notifications",
    "Subscription ",
    "Platform-common-service",
    "Process-Intelligence ",
    "GRP-Business Process Studio ",
    "Workflow-Automation ",
    "Workflow-Automation-Agent",
    "Workflow-Automation-Agent-Web",
    "Workflow-Scheduler-Service ",
    "Process-intelligence-Node-API ",
    "Node-Security ",
    "Node-jobs ",
    "Asimov-BPMN-Platform ",
    "Asimov-BPMN-web app",
  ];

  requestedUser = [
    "Anitha Gada",

    "Bhavya Krishna Kavuri",

    "Edukondalu Chokkapu",

    "Karthik Peddinti",

    "Krishnavardhana Sandilya Jandhyala",

    "Poornima Jasti",

    "Praveen Bokkala",

    "Radha kolla",

    "Rajkumar Kancharla",

    "Ranjith Singiri",

    "Sai Gopal Krishna Nookala",

    "Salma Shaik",

    "Sampadha V Bharadwaj",

    "Siva Simhadri",
    "Sushma Mounika Guraja",
    "Venkata Durga Kiran Mudili",
    "Vishala Thallapally",
    "Other",
  ];

  //  pipe = new DatePipe('en-US');

  // minDate = new Date();
  // minDateOut = pipe.transform(minDate, 'yyyy-MM-dd');

  // maxDate = new Date(minDate.getTime() + (1000 * 60 * 60 * 24 * 3));
  // maxDateOut = pipe.transform(maxDate, 'yyyy-MM-dd');
  todayDate = new Date();

  ngOnInit(): void {
    this.RegisterFormData = new FormGroup({
      purposeOfReq: new FormControl("", Validators.required),
      typeOfReq: new FormControl("", Validators.required),
      environment: new FormControl("", Validators.required),
      artifact: new FormControl(""),
      requestUser: new FormControl("", Validators.required),
      approvedUser: new FormControl("", Validators.required),
      deployTime: new FormControl("", Validators.required),
      comment: new FormControl("", Validators.required),
    });

    const d: Date = new Date();
    // const fortyDaysBack = subtract(d, 40, "days");
    this.date = new Date();

    this.minDate = this.todayDate.setDate(this.todayDate.getDate() - 8);
    this.maxDate = this.todayDate.setDate(this.todayDate.getDate() + 10);

    // this.minDate = fortyDaysBack;
    // const pipe = new DatePipe('en-US');

    // const minDate = new Date();
    // const minDateOut = pipe.transform(this.minDate, 'yyyy-MM-dd');

    // const maxDate = new Date(this.minDate.getTime() - (1000 * 60 * 60 * 24 * 5));
    // const maxDateOut = pipe.transform(this.maxDate, 'yyyy-MM-dd');
  }

  requestList() {
    this.router.navigate(["getList"]);
  }

  onReset() {
    this.RegisterFormData.reset();
  }

  onSubmit() {
    // var PurposeOfRequest = this.RegisterFormData.controls['purposeOfReq'].value;
    // var TypeOfRequests = this.RegisterFormData.controls['typeOfReq'].value;
    // var TypeOfEnvironments =
    //   this.RegisterFormData.controls['typeOfEnvironment'].value;
    // var Artifats = this.RegisterFormData.controls['artifact'].value;
    // var RequestedUsers = this.RegisterFormData.controls['requestedUser'].value;
    // var ApprovedUsers = this.RegisterFormData.controls['approvedUser'].value;
    // var DeployedDateTime =
    //   this.RegisterFormData.controls['deployDateTime'].value;

    // console.log(PurposeOfRequest);

    let Values = this.RegisterFormData.value;
    console.log(Values);

    // interface PipeTransform {
    //   transform(value: any, ...args: any[]): any
    // }

    this.service.requestDetails(Values).subscribe(
      (res: any) => {
        localStorage.setItem("user", JSON.stringify(res));
        if (res) {
          // Swal.fire("success", "Request Details Sent Successfully");
          var RequestedUsers = this.RegisterFormData.controls["requestUser"].value;
          let Values = this.RegisterFormData.value;
          console.log(Values);
          Swal.fire({
            title: `Hey  ${RequestedUsers} are you sure?`,
            text: "This process is irreversible.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, go ahead.",
            cancelButtonText: "No, let me think",
          }).then((result) => {
            if (result.value) {
              Swal.fire(
                "Success!",
                ` ${RequestedUsers} your request has been sent successfully.`,
                "success"
              );
              this.RegisterFormData.reset();
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              Swal.fire("Cancelled", "Edit Your Request.)", "error");
            }
          });
          // this.RegisterFormData.reset();
        } else {
          Swal.fire("Something Went Wrong");
        }
      },
      (err) => {
        Swal.fire("Something went Wrong, Try after sometime");
      }
    );
  }
}
function moment() {
  throw new Error("Function not implemented.");
}

function subtract(d: Date, arg1: number, arg2: string) {
  throw new Error("Function not implemented.");
}
