//For the given JSON iterate over all the loops(for, for  in, for of).
var jsonObject = {
    name: "Gopikadevi",
    age: 24,
    city: "virudhunagar",
    job: "Engineer"
  };

  //for in
  for (var key in jsonObject) {
    if (jsonObject.hasOwnProperty(key)) {
      console.log(key + ": " + jsonObject[key]);
    }
  }

  //for
  var keys = Object.keys(jsonObject);
  for (var i = 0; i < keys.length; i++) {
  var key = keys[i];
  console.log(key + ": " + jsonObject[key]);
}

//for of
for (var [key, value] of Object.entries(jsonObject)) {
    console.log(key + ": " + value);
  }
  
//create a own resume data in JSON format

const MyResume = {
    "name": "JGopikadevi",
    "email": "deviradhakrishnan@gmail.com",
    "phone": "9789235454",
    "address": "3/30,South street Anathapanaiyakkarpatti rajapalayam virudhunar",
    "summary": "A dedicated and results-driven software engineer with a strong background in web development and a passion for solving complex problems.",
    "education": [
      {
        "degree": "Bachelor of Electronics and Communication Engineering",
        "university": "Dr. N.G.P Institute of Technolog",
        "graduationYear": "2022"
      },
      {
        "degree": "High School",
        "school": "Vidyaa Vikas",
        "graduationYear": "2018"
      }
    ],
    
    "skills": [
      "JavaScript",
      "HTML/CSS",
      "SQL",
      "Git",
      "Docker",
      "Jenkins",
      "AWS services",
      "Communication",
      "Teamwork"]
    }

  console.log(MyResume);

  
  