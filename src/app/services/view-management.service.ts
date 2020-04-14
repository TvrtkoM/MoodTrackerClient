import { Injectable, ComponentRef, ViewRef } from "@angular/core";

import { ModalComponent } from "../components/modal/modal.component";

@Injectable({
  providedIn: "root"
})
export class ViewManagementService {
  constructor() {}

  private views: Map<number, ViewRef> = new Map();
  registerView(id: number, view: ViewRef): void {
    this.views.set(id, view);
  }
  getView(id: number): ViewRef {
    return this.views.get(id);
  }

  get modal(): ModalComponent {
    return this.modalRef.instance;
  }

  private modalRef: ComponentRef<ModalComponent>;
  registerModalRef(ref: ComponentRef<ModalComponent>) {
    if (this.modalRef != undefined) {
      console.warn("modal component already registered. skipping.");
      return;
    }
    this.modalRef = ref;
  }
}