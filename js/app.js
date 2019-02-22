          
          "use strict"
          var user = prompt('what is your name?');
          console.log('User Name:' + user);

          var answer = prompt('Thanks for your response ' + user
            + '! I\'m going to ask few questions, if you are intrested please answer Y else N');
            var answer = answer.toUpperCase();
          console.log('User Answer:', answer);
          if (answer === 'Y') {
            var answer_company = prompt(user + '! Thanks for your Inetrest. Are you working for Amazon (Y/N) ');
            console.log('User Answer:', answer_company);
            var answer_company = answer_company.toUpperCase();
            var answer_organization = prompt( 'Are you in Peopletech Org(Y/N) ');
            console.log('User Answer:', answer_organization);
            var answer_organization = answer_organization.toUpperCase();
            var answer_designation = prompt( 'Are you an Application Engineer (Y/N');
            console.log('User Answer:', answer_designation);
            var answer_designation = answer_designation.toUpperCase();
            if ((answer_company === 'Y') && (answer_organization === 'Y') && (answer_designation === 'Y')) {
              alert('great, you have software development training on this friday, enjoy the day');
            } else {
              alert('Dude! you are missing software development training on this friday');
            }
      
          } else {
            alert('Thanks for your response ' + user
            + ' We will catch you later');
          }
        
      
      