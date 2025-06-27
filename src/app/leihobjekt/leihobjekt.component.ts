import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { Platform } from '@ionic/angular';
import { VerlieheneSache } from '../services/data.service';

@Component({
  selector: 'app-leihobjekt',
  templateUrl: './leihobjekt.component.html',
  styleUrls: ['./leihobjekt.component.scss'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeihobjektComponent {

  private platform = inject(Platform);

  @Input() verlieheneSache?: VerlieheneSache;

  isIos() {

    return this.platform.is('ios')
  }
}
