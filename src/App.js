import React, { useRef } from 'react';
import './App.css';
import 'tachyons';
import emailjs from '@emailjs/browser';
import Calendar from './components/Calendar';
import swal from 'sweetalert'
import Warning from './components/Warning'
import Contact from './components/Contact'
import BlackLineInTheBottom from './components/BlackLineInTheBottom'
import WorkExamples from './components/WorkExamples'
import TopBlue from './components/TopBlue'
import AboutMe from './components/AboutMe';

const initialState = {
  Three: false,
  One: false,
  Two: false,
  Four: false,
  Five: false,
  Six: false,
  Seven: false,
  Date: "",
  Time: "",
  Name: "",
  Telephone: "",
  Links: [
    {
    link: 'https://i.ytimg.com/vi/IMLwb8DIksk/maxresdefault.jpg'
    }
],
  Instagram: "",
  Message: "",
  Text: `\xa0\xa0\xa0\xa0\xa0Пн-Пт: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Сб: ${"\n"} 13:00-18:00\xa0\xa0\xa0\xa010:00-18:00 ${"\n"}${"\n"}\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Нд - вихідний`,
}
class App extends React.Component {
  constructor(){
    super();
    this.state = initialState;
  }
  sendEmail = () => {
    emailjs.send('service_2imqbbb', 'template_9yk2c5m', {
      name: this.state.Name,
      date: this.state.Date,
      time: this.state.Time,
      telephone: this.state.Telephone,
      instagram: this.state.Instagram,
      message: this.state.Message,
  }, 'bfBdofZZvjOwEDhIP')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    TryIt = () => {
        fetch('https://immense-shore-40039.herokuapp.com/links')
        .then(response => response.json())
        .then(console.log)
  }
  createMessage = () => {
    const {One, Two, Three, Four, Five, Six, Seven} = this.state;
    let ms = "";
    if (One) {
      ms += ` Моделювання та фарбування брів${"\n"}`;
    }
    if (Two) {
      ms +=  `Моделювання, фарбування та прорідження брів${"\n"}`
    }
    if (Three) {
      ms += ` Моделювання брів${"\n"}`;
    }
    if (Four) {
      ms += ` Ламінування брів+фарбування корекція брів${"\n"}`
    }
    if (Five) {
      ms += ` Ламінування брів+корекція${"\n"}`
    }
    if (Six) {
      ms += ` Прорідження брів${"\n"}`
    }
    if (Seven){
      ms += ` Депіляція обличчя${"\n"}`
    }
    this.setState({Message: ms})
  }
  OnChangeButton = (e, t) => {
    switch (t){
      case 1:
        this.setState({ One : e.target.checked})
        break
      case 2:
        this.setState({ Two : e.target.checked})
        break
      case 3:
        this.setState({ Three : e.target.checked})
        break
      case 4:
        this.setState({ Four : e.target.checked})
        break
      case 5:
        this.setState({ Five : e.target.checked})
        break
      case 6:
        this.setState({ Six : e.target.checked})
        break
        case 7:
        this.setState({ Seven : e.target.checked})
        break
      default: 
        break
    }
  }
  handleDateChange = (date) => { 
    this.setState({ Date: date })
  };
    sendRequest = () => {
    console.log(this.state)
    const {One, Two, Three, Four, Five, Six, Seven, Telephone, Name, Date, Time, Instagram, Text} = this.state;
    if (Name === "") {
      swal ( "Упс..." ,  "Введіть імʼя" ,  "error" );
    }
    else if (Telephone === ""){
      swal ( "Упс..." ,  "Введіть номер телефону" ,  "error" );
    }
    else if (Date ==="") {
      swal ( "Упс..." ,  `Виберіть дату` ,  "error" );
    }
    else if (Time === ""){
      swal ( "Упс..." ,  "Виберіть час" ,  "error" );
    }
    else if ((parseInt(Time[0])*10+parseInt(Time[1]))*60 + parseInt(Time[3])*10+parseInt(Time[4]) > 1080 ||
    (parseInt(Time[0])*10+parseInt(Time[1]))*60 + parseInt(Time[3])*10+parseInt(Time[4]) < 600){
      swal ( "Графік роботи:" ,  `${this.state.Text}` ,  "error" );
    }
    else if (!One && !Two && !Three && !Four && !Five && !Six && !Seven) {
      swal ( "Упс..." ,  "Виберіть хоча б одну процедуру" ,  "error" );
    }
    else {
    swal({
      title: "Все правильно?",
      text: `Імʼя: ${this.state.Name}${"\n"} Номер телефону: ${this.state.Telephone} ${"\n"} Дата: ${(this.state.Date.toString()).slice(7,10)} ${"\n"} Час: ${(this.state.Time)} ${"\n"}`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.createMessage();
        let NewDate = this.state.Date;
    let hoursDiff = NewDate.getHours() - NewDate.getTimezoneOffset() / 60;
    let minutesDiff = (NewDate.getHours() - NewDate.getTimezoneOffset()) % 60;
    NewDate.setHours(hoursDiff);
    NewDate.setMinutes(minutesDiff);
    fetch('https://immense-shore-40039.herokuapp.com/appointment', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              One: this.state.One,
              Two: this.state.Two,
              Three: this.state.Three,
              Four: this.state.Four,
              Five: this.state.Five,
              Six: this.state.Six,
              Seven: this.state.Seven,
              Date: NewDate,
              Time: this.state.Time,
              Name: this.state.Name,
              Telephone: this.state.Telephone,
              Instagram: this.state.Instagram
            })
        })
        .then(response => response.json())
        .then(data =>{
            if (data === 'Success') {
              swal("Вітаю", "Ви записалися", "success");
              this.sendEmail();
            }
            else if (data === 'Name is required!'){
              swal ( "Упс..." ,  "Введіть імʼя" ,  "error" );
            }
            else if (data === 'Telephone is required!'){
              swal ( "Упс..." ,  "Введіть номер телефону" ,  "error" );
            }
            else if (data === 'Date is required!'){
              swal ( "Упс..." ,  "Виберіть дату" ,  "error" );
            }
            else if (data === 'Time is required!'){
              swal ( "Упс..." ,  "Виберіть час" ,  "error" );
            }
            else if (data === 'Select procedure'){
              swal ( "Упс..." ,  "Виберіть хоча б одну процедуру" ,  "error" );
            }
            else if (data === 'Reserved'){
              swal ( "Упс..." ,  "В цей час занято" ,  "error" );
            }
            else if (data === 'Set a proper time'){
              swal ( "Графік роботи:" ,  `${this.state.Text}` ,  "error" );
            }
            else {
              swal ( "Упс..." ,  "Спробуйте знову" ,  "error" );
            }
        })
      } 
    });
  }
    }
  setTime = (event) => {
    this.setState({Time: event.target.value})
  }
  SetName = (event) => {
    this.setState({Name: event.target.value})
  }
  SetTelephone = (event) => {
    this.setState({Telephone: event.target.value})
  }
  SetInstagram = (event) => {
    this.setState({Instagram: event.target.value})
  }
  componentDidMount() {
    fetch('https://immense-shore-40039.herokuapp.com/links')
    .then(response => response.json())
    .then(data => this.setState({ Links: data}))
}
  render() {
    return (
      <div className="App">
          <TopBlue />
          <AboutMe />
          <WorkExamples Links = {this.state.Links} />
            <div className="Appointment pa5 container" id="Appointment">
              <div className="pa All_left">
                <div className="pl4 notContainer">
                  <div className="notContainer">
                  <div className="Font Appointment_title fxxb pb5 pl5">Запис</div>
                    <div className="pa1 pb3 pl4">
                      <input onInput={this.SetName} type="text" placeholder="Імʼя, прізвище" className="Font w-60 br3 fs"/>
                    </div>
                    <div className="pa1 pb3 pl4">
                      <input onChange={this.SetTelephone} type="number" placeholder="Телефон" className="Font w-60 fm br3 fs"/>
                    </div>
                    <div className="pa1 pb3 pl4">
                      <input onInput={this.SetInstagram} type="text" placeholder="Instagram" className="Font w-60 br3 fs"/>
                    </div>
                  </div>
                </div>
                <div className="calendar pt4 pb4">
                  <Calendar onChange={this.handleDateChange} className=""/>
                </div>
                <div className="container pt2 tl timeContainer pv4">  
                    <div className="pr3 Font ">Час</div>
                      <input type='time' className="br3 "  min="09:00" max="18:00" required onChange={this.setTime}/> 
                </div>  
                <div className="pl5">
                  <button onClick={() => swal("Графік роботи:", `${this.state.Text}`, "info")} className="btn-grad2 tc pointer">Графік роботи</button>  
                </div>
              </div>
            <div className="Appointment mr5">
            <label  className='muravei'>
            <div className="pl4 tl">
                Моделювання та фарбування брів - 150₴ - 1 год
            </div>
								<input  type='checkbox' onChange={(e) => this.OnChangeButton(e,1)} checked={this.state.One} />
                  <span className='checkmark'></span>
              </label>
							<label className='muravei'>
              <div className="pl4 tl">
                Моделювання, фарбування та прорідження<br/> брів - 170₴ - 1 год 30 хв
							</div>
                <input type='checkbox' className="" onChange={(e) => this.OnChangeButton(e,2)} checked={this.state.Two}/>
								<span className='checkmark'></span>
							</label>
							<label className='muravei'>
              <div className="pl4 tl">
                Моделювання брів - 100₴ - 30 хв
              </div>
								<input type='checkbox' onChange={(e) => this.OnChangeButton(e,3)} checked={this.state.Three}/>
								<span className='checkmark'></span>
							</label>
              <label className='muravei'>
                <div className="pl4 tl">
                  Ламінування брів+фарбування+<br/>корекція брів - 400₴ - 1 година 30 хв
                </div>
                <input type='checkbox' onChange={(e) => this.OnChangeButton(e,4)} checked={this.state.Four}/>
								<span className='checkmark'></span>
							</label>
              <label className='muravei'>
              <div className="pl4 tl">
                Ламінування брів+корекція - 350₴ - 1 година 
							</div>
                <input type='checkbox' onChange={(e) => this.OnChangeButton(e,5)} checked={this.state.Five}/>
								<span className='checkmark'></span>
							</label>
              <label className='muravei'>
                <div className="pl4 tl">
                  Прорідження брів - 75₴ - 30 хв
                </div>
								<input type='checkbox' onChange={(e) => this.OnChangeButton(e,6)} checked={this.state.Six}/>
								<span className='checkmark'></span>
							</label>
              <label className='muravei'>
              <div className="pl4 tl">
                Депіляція обличчя(будь-яка зона) - +30₴ до процедури - 30 хв
							</div>
                <input type='checkbox' onChange={(e) => this.OnChangeButton(e,7)} checked={this.state.Seven}/>
								<span className='checkmark'></span>
							</label>
                <div className="pt3">
                  <button onClick={this.sendRequest} className="btn-grad tc pointer">Записатися</button>
                </div>
              </div>
            </div>
          <Warning />
          <Contact />
          <BlackLineInTheBottom />
      </div>
    );
  }
}
export default App;




// function OnChangeButton (e, state) {
//   this.setState({ state : e.target.checked})
// }



