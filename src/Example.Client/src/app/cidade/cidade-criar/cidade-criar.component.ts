import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Cidade } from 'src/models/cidade';
import { CidadeService } from 'src/services/cidade.service';

@Component({
  selector: 'app-cidade-criar',
  templateUrl: './cidade-criar.component.html',
  styleUrls: ['./cidade-criar.component.scss'],
})
export class CidadeCriarComponent implements OnInit {
  cidade: Cidade = {} as Cidade;
  constructor(private _cidadeService: CidadeService, private _router: Router) {}

  async ngOnInit() {}

  async onSubmit(value: any) {
    await this._cidadeService.criarCidade(value).toPromise();
    this.voltar();
  }

  voltar() {
    this._router.navigateByUrl('/lists');
  }
}
