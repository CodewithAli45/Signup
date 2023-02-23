import logo from './logo.svg';
import './App.css';

function App() {

  const validate = (event) => {
      
    event.preventDefault();
    var email = document.querySelector("input[data-testid='email']").value;
    const error = document.getElementById("error");
    const welcome = document.getElementById("welcome");
    var input = document.querySelectorAll("input");
    var name = input[0].value;
    var password = input[3].value;
    

      for(var i=0 ; i<input.length ; i++){

        console.log(input[i].value.length);

        // eslint-disable-next-line eqeqeq
        if(input[i].value.length === 0){

            error.innerHTML = "<h1>All fields are mandatory</h1>";
                return;
        }

      }
      var matches = name.match(/(\d+)/);
      console.log(matches);

      if(matches == null){

        error.innerHTML = "<h1>Name is not alphanumeric</h1>";
        return;
      }

      if( email.indexOf('@') == -1)
      {
        welcome.innerHTML = "";
        error.innerHTML = "<h1>Email must contain @</h1>";

        return
      }

      if(password.length <6){
        error.innerHTML = "<h1>Password must contain atleast 6 letters</h1>";
        return;
      }
      
      console.log("email="+email);

      error.innerHTML ="";

      welcome.innerHTML = "<h1>Hello "+email.slice(0,email.indexOf('@'))+"</h1>";

    }

  return (
    <div id="main">

      <form  onSubmit={validate}>
        <div>
        <label>name</label><br/>
        <input type="text" data-testid = 'name'  /><br/>
        <label>Email</label><br/>
        <input type="text" data-testid='email' id = "email"  /> <br/>
        <label>Gender</label><br/>
        </div>
        <div>
        <select data-testid='gender' placeholder="Gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Others</option>
        </select>
        </div>

          <label>Phone Number</label><br/>
          <input type="text" data-testid='phoneNumber'   /><br/>
          <label>Password</label><br/>
          <input type="password" data-testid = "password"  /><br/><br/>
          <button type="submit" data-testid="submit">Submit</button><br/>

        </form>

        <div id="error"></div>
        <div id="welcome"></div>
    </div>

  );
}

export default App;
