import React from "react";
import './Home.css';
import VideoFile from './../VideoFile/VideoFile';
import Contentsmain from "./../Contentsmain/Contentsmain";
import Carditems from "./../Carditems/Carditems";
import Headermenu from "./../Headermenu/Headermenu";
import Footer from "./../Footer/Footer";

const Home = ()=>{
    //rest operators
    let add = (a,...b)=>{
        console.log(a,b);
 
     }
     add(1,2,3,4,5,6,7,8,9);
     let arrone = [1,2,3,4,5];
     let arrtwo = [6,7,8,9];
     let arrthre = [...arrone,...arrtwo];
     console.log(arrthre);

     let arrfour = ["arrone","arrtwo"];
     console.log(...arrfour);
     let arrfiv = "arrfiverest";
     console.log(...arrfiv);

     let obj1 = {name:"vivek",id:"123"};
     let obj2 = {...obj1,number:8970440804}
     console.log(obj2);

     //default parameter
     let addfunc = (a,b=2)=>{
         return a+b;
     }
     console.log(addfunc(2));
     
     // For ofloop

     let arrloop = ["vivek","kumar","raja"];
     for(let val of arrloop)
     {
         console.log(val);
     }
     for(let val3 of arrloop.entries())
     {
         console.log(val3);
     }

     //symbols

     //arrow function

     //destructuring object
     let {name,mobile,lname} = {name:"vivek",lname:"kumar",mobile:8970440804};
     console.log(`My name is ${name} and my number is ${mobile}`);

     //Array destructing
     let [name2,mobile2,lname2] = ["vivek","kumar",8970440804];
     console.log(`My name is ${name2} and my number is ${lname2}`);

     //sets and maps
     let map = new Map();
     map.set('name','vivek');
     map.set('lname','kumar');
     map.set('mobile','8970440804');
     map.set('email','vivekmca543@gmail.com');
     console.log('map get name :'+map.get('name'));
     console.log(map.has('name'));
     console.log(map.size);
     for(let vv of map){
         console.log(vv);
     }
     const letters = new Set();



     // Add the Variables to the Set
     letters.add(1);
     letters.add(2);
     letters.add(3);
     letters.add(3);
     console.log(letters);

     let setarr = new Set([1,3,2,4,5,6,8,8,8]);
     console.log(setarr);
     console.log(setarr.size);
     console.log(setarr.has(8));

     //promises
     let completed = true;
     let mypromise = new Promise((resolve,reject)=>{
            if(completed){
                resolve('Promise request has been completed');
            }
            else
            {
                reject('promise request has been rejected');
            }
     });
     console.log(mypromise);
     let billpaid = true;
     let mypromisetwo = new Promise((resolve,reject)=>{
      if(billpaid)
      {
          resolve("paid");
      }
      else{
          reject("not yet paid")
      }
     });
     mypromisetwo.then((fromresolve)=>{
         console.log(`Electric bill ${fromresolve}`);
     }).catch((fromreject)=>{
         console.log(`Electric bill ${fromreject}`);
     })



     //Promise with learned react, got job and got salary from next month
     let learnmore = ()=>{
         return new Promise((resolve,reject)=>{
             resolve("learned react");
         })
     }
     let gotselected = (message)=>{
         return new Promise((resolve,reject)=>{
             resolve(message+"got selected");
         })
     }
     let gotsalary = (message)=>{
         return new Promise((resolve,reject)=>{
             resolve(message+"got salary from next month");
         })
     }
     learnmore().then((result)=>{
        return gotselected(result)
     }).then((result)=>{
         return gotsalary(result)
     }).then((result)=>{
        console.log(result+"finished task");
    })

    // Promise.all([learnmore(),gotselected(),gotsalary()]).then(()=>{
    //     console.log("all finished");
    // });

    // Promise.race([learnmore(),gotselected(),gotsalary()]).then(()=>{
    //     console.log("one of them finished");
    // })

    //Promise second scenario
    let salaryone = ()=>{
        return new Promise((resolve,reject)=>{
        resolve("got first month salary, ");
        })
    }
    let salarytwo = (message)=>{
        return new Promise((resolve,reject)=>{
            resolve(message+"got second month salary, ");
        })
    }
    let salarythre = (message)=>{
        return new Promise((resolve,reject)=>{
            resolve(message+"got third month salary, ")
        })
    }

    salaryone().then((message)=>{
        return salarytwo(message)
    }).then((message)=>{
        return salarythre(message)
    }).then((message)=>{
        console.log(message+"and loan amount paid");
    });

    Promise.all([salaryone(),salarytwo(),salarythre()]).then(()=>{
        console.log("loan amount paid2");
    });
    Promise.race([salaryone(),salarytwo(),salarythre()]).then(()=>{
        console.log("one month loan paid2");
    });


    // Aync and await

    //promise frinds going for movie example

    console.log('person 1 shows tickets');
    console.log('person 2 shows tickets');

    let person3tics = new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve("tickets");
        },1000);
    })
    let person4hun = person3tics.then((t)=>{
        console.log("person 3 got"+t);
        console.log('person 4 getting hungry');
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("bought food went inside");
            },1000);
        })
    })
    person4hun.then((t)=>{
        console.log(t);
    })
    console.log('person 5 shows tickets');
    console.log('person 6 shows tickets');
    return(
        <div>   
           <VideoFile />
            <div className="container">
            <Contentsmain/>
            <div className="card-content">
            <Carditems/>
            </div>         
            </div>
            <Footer />
        </div>
    )
}
export default Home;