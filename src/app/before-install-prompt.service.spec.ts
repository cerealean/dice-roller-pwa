import { TestBed } from '@angular/core/testing';

import { BeforeInstallPromptService } from './before-install-prompt.service';

describe('BeforeInstallPromptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeforeInstallPromptService = TestBed.get(BeforeInstallPromptService);
    expect(service).toBeTruthy();
  });
});
