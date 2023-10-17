import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpWordPairService } from '../common/services/http-word-pair/http-word-pair.service';
import { takeUntil } from 'rxjs';
import { OnDispose } from '../common/services/on-dispose/on-despose';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-word-pair',
  templateUrl: './new-word-pair.component.html',
  styleUrls: ['./new-word-pair.component.scss'],
})
export class NewWordPairComponent extends OnDispose implements OnInit {
  wordPairForm!: FormGroup;
  submitted = false;
  shouldShowSuccessMessage = false;

  constructor(
    protected formBuilder: FormBuilder,
    protected httpWordPairService: HttpWordPairService,
    protected router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.wordPairForm = this.formBuilder.group({
      initialWord: ['', [Validators.required, this.customPatternValidator()]],
      similarWord: ['', [Validators.required, this.customPatternValidator()]],
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.wordPairForm.invalid) {
      return;
    }

    if (this.wordPairForm.valid) {
      this.httpWordPairService
        .addWordPair(
          this.wordPairForm.value.initialWord.trim(),
          this.wordPairForm.value.similarWord.trim()
        )
        .pipe(takeUntil(this.destroyed$))
        .subscribe(() => {
          this.wordPairForm.reset();
          this.submitted = false;
          this.shouldShowSuccessMessage = true;
        });
    }
  }

  private customPatternValidator() {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const pattern = /^[a-zA-Z]+$/;
      const isValid = pattern.test(control.value);

      return isValid ? null : { invalidPattern: { value: control.value } };
    };
  }

  goBackToHome(): void {
    this.router.navigateByUrl('/');
  }
}
