import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { JumblesController } from "./controllers/JumblesController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";



export const router = [
  {
    path: '',
    controller: [HomeController, JumblesController],
    view: /*html*/`
    <div class="card">
      <div class="card-body">
        <p>Home Page</p>
        <button class="btn btn-dark" onclick="app.HomeController.testButton()">😎</button>
      </div>
    </div>
    <section class="container-fluid">

    <Title>Jungle Jumble</Title>
    <section class="row justify-content-between">
      <div class="col-8">
        <div id="active-jumble" class="col-10">ACTIVE JUMBLE HERE</div> //TODO - this is where you put the active Jumble
        <div class="col-10">
          <textarea class="w-100" name="" id="" cols="30" rows="10" placeholder="type here!"></textarea> //TODO - fill
          in id and name
          <button class="btn btn-info">Submit</button>
        </div>
      </div>
      <div class="col-3">Jumbles!
        <div id="jumbles-list" class="row"></div>
        <span></span> // this is where the saved jumbles will go
  
      </div>
    </section>
    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]