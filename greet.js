function greet(name, language) {
      let greetMe = {
        Afrikaans: "Hallo",
        English: "Hello",
        Hindi: "Namaskar",
        IsiZulu: "Sawubona",
        Korean: "Annyeonghaseyo"
      };

      let greets = greetMe[language];
      if (!greets) {
        greets = "Hello";
      }

      return greets + ", " + name;
    }

    function greeting() {
      return {
        greets: "",
        name: "",
        language: "English",

        showGreeting() {
          this.greets = greet(this.name, this.language);
          // Remove the following setTimeout if unnecessary
          setTimeout(() => {
            this.name = "";
            this.language = "";
            this.greets = "";
          }, 3000);
        }
      };
    }
