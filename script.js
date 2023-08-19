var input = document.querySelector('input')
        var btn = document.querySelectorAll('.btn')
        btn.forEach(element => {
            element.addEventListener('click' , function(ev){
                if (ev.target.innerHTML == '=') {//equal
                    // input.value += ev.target.innerHTML
                    // var val = input.value
                    var taq = /([+-]?\d+(\.\d+)?)\/([+-]?\d+(\.\d+)?)/g
                    var zarb = /([+-]?\d+(\.\d+)?)\*([+-]?\d+(\.\d+)?)/g
                    // var plus = /([+-]?\d+(\.\d+)?)\+([+-]?\d+(\.\d+)?)/g
                    // var menha = /([+-]?\d+(\.\d+)?)\-([+-]?\d+(\.\d+)?)/g
                    // var manfiNum = /^-\d+(\.\d+)?$/g
                    var jaygahTaq = input.value.indexOf('/')
                    var jaygahZarb = input.value.indexOf('*')
                    var jaygahPlus = input.value.indexOf('+' , 1)
                    var jaygahMenha = input.value.indexOf('-' , 1)

                    ////////taqsim//////////////
                    while (jaygahTaq != -1) {

                        var num1 = input.value.search(taq)
                        console.log(num1);
                        var previous1 = input.value.slice(num1 , jaygahTaq) //عدد قبل
                        var next1 = parseFloat(input.value.slice(jaygahTaq + 1)) //عدد بعد

                        input.value = input.value.replace(previous1 + '/' + next1 , previous1 / next1 )
                        console.log(input.value.replace(previous1 + '/' + next1 , previous1 / next1 ));
                        jaygahTaq = input.value.indexOf('/')
                        jaygahZarb = input.value.indexOf('*')
                        jaygahPlus = input.value.indexOf('+' , 1)
                        jaygahMenha = input.value.indexOf('-', 1)
                    }
                    ////////zarb//////////////
                    while (jaygahZarb != -1) {

                        var num2 = input.value.search(zarb)
                        var previous2 = input.value.slice(num2 , jaygahZarb) //عدد قبل
                        var next2 = parseFloat(input.value.slice(jaygahZarb + 1)) //عدد بعد
                        input.value = input.value.replace(previous2 + '*' + next2 , previous2 * next2 )
                        console.log(input.value);
                        jaygahTaq = input.value.indexOf('/')
                        jaygahZarb = input.value.indexOf('*')
                        jaygahPlus = input.value.indexOf('+' , 1)
                        jaygahMenha = input.value.indexOf('-', 1)
                    }
                    ////////jam/////menha////////////
                    while (jaygahPlus != -1 || jaygahMenha != -1) {
                        if (input.value.indexOf("+") == 0) {
                            input.value = input.value.slice(1)
                        }
                        var alamat = (input.value.replace(parseFloat(input.value) , "")).slice(0 , 1)
                        if (alamat == "+") {
                            input.value = input.value.replace(parseFloat(input.value) + "+" + parseFloat(input.value.slice(jaygahPlus + 1)), parseFloat(input.value) + parseFloat(input.value.slice(jaygahPlus + 1)))
                            jaygahPlus = input.value.indexOf("+" , 1)
                            jaygahMenha = input.value.indexOf("-", 1)
                        }else if (alamat == "-") {
                            input.value = input.value.replace(parseFloat(input.value) + "-" + parseFloat(input.value.slice(jaygahMenha + 1)), parseFloat(input.value) - parseFloat(input.value.slice(jaygahMenha + 1)))
                            jaygahPlus = input.value.indexOf("+" , 1)
                            jaygahMenha = input.value.indexOf("-", 1)
                        }
                    }
                    // while (jaygahMenha != -1) {
                    //     if (menha.test(input.value)) {
                    //         var num4 = input.value.search(menha)
                    //         var previous4 = input.value.slice(num4 , jaygahMenha) 
                    //         var next4 = parseFloat(input.value.slice(jaygahMenha + 1)) 
                    //         input.value = input.value.replace(previous4 + '-' + next4 , Number(previous4) - Number(next4) )
                    //         console.log(input.value);
                            
                    //         var jaygahMenha = input.value.indexOf('-')
                            
                    //     }else if(manfiNum.test(input.value)){
                    //         break;
                    //     }
    
                    // }

                } else if(ev.target.innerHTML == '+' || ev.target.dataset.number == '-' || ev.target.dataset.number == '*' || ev.target.dataset.number == '/'){//operator
                    input.value += ev.target.innerHTML
                } else if(ev.target.innerHTML == 'off'){  //on , off
                    input.value += ev.target.innerHTML
                } else{//number
                    input.value += ev.target.innerHTML
                }
            })
        });