function Student(id, klas, voornaam, tussenvoegsel, achternaam) {
    let studentNummer = id;
    let klasNaam = klas;
    let voorNaam = voornaam;
    let achterNaam = achternaam;
    let tussenVoegsel = tussenvoegsel;
  }

  this.student = function () {
      console.log('id' + 'klas' + 'voornaam' + 'tussenvoegsel' + 'achternaam');
  }

  localStorage.setItem('id' + 'klas' + 'voornaam' + 'tussenvoegsel' + 'achternaam');