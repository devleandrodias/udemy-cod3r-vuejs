import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
import Usuario from './components/usuario/Usuario'
import UsuarioLista from './components/usuario/UsuarioLista'
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
import UsuarioEditar from './components/usuario/UsuarioEditar'

Vue.use(Router)

// Hash e History

export default new Router({
  mode: "history",
  routes: [{
    path: '/',
    component: Inicio
  },
  {
    path: '/usuario',
    component: Usuario,
    props: true,
    children: [
      { path: '', component: UsuarioLista },
      { path: ':id', component: UsuarioDetalhe, props: true },
      { path: ':id/detalhe', component: UsuarioDetalhe, props: true },
    ]
  }]
})