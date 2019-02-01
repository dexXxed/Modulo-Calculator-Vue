var app = new Vue({
    el: '#app',
    data: {
        firstNumber: '',
        secondNumber: '',
        thirdNumber: '',
        k: '',
        show: false,
        home: true,
        about: false,
        help: false,
        isActive: false,
        isStyle1: false,
        isBorder: false,
        isBorderDark: false,
        isStyle2: false,
        activebackgroundColor: 'white',
        isTextSecondary: false,
        isColor: '',
        isSuccess: true,
        isDark: false,
        max: 10
    },
    methods: {
        placeholderValue: function() {
            function mod(x, n, slice) {
                var res = parseFloat(((x % n + n) % n).toFixed(slice));
                if (0 <= res && res < Math.abs(n)){
                    return res;
                } else {
                    return parseFloat((Math.abs(n) + res).toFixed(slice));
                }
            }

            function countDecimals(value) {
                if (Math.floor(value) === value) return 0;
                try {
                    return value.toString().split(".")[1].length;
                }
                catch(e) {
                    return 0;
                }
            }

            function compareNumeric(a, b) {
                if (a > b) return 1;
                if (a < b) return -1;
            }

            if (this.firstNumber && this.secondNumber || parseFloat(this.firstNumber) === 0) {
                    var mass = [countDecimals(parseFloat(this.firstNumber)), countDecimals(this.secondNumber)];
                    mass.sort(compareNumeric);
                    var result = mod(this.firstNumber, this.secondNumber, mass[1]);
                    if (result == '0') {
                        this.thirdNumber = 0;
                        this.k = this.firstNumber / this.secondNumber;
                        return '0';
                    } else if (result == false) {
                        this.thirdNumber = 0;
                        this.k = this.firstNumber / this.secondNumber;
                        return '0';
                    } else if (result == '-0') {
                        this.thirdNumber = 0;
                        this.k = this.firstNumber / this.secondNumber;
                        return '0';
                    } else {
                        this.thirdNumber = result;
                        this.k = Math.ceil((this.firstNumber - this.thirdNumber) / this.secondNumber);
                        return result;
                    }
            }

        },
        onCopy: function(e) {
            this.show = true;
            var self = this;
            setTimeout(function() {
                self.show = false;
            }, 1000);
        },
        darkTheme: function() {
            if (this.isActive == false &&
                this.isStyle1 == false && 
                this.isStyle2 == false && 
                this.isBorder == false &&
                this.isBorderDark == false &&
                this.activebackgroundColor == 'white' &&
                this.isTextSecondary == false &&
                this.isColor == '' &&
                this.isSuccess == true &&
                this.isDark == false) {
                    this.isActive = true;
                    this.isStyle1 = true;
                    this.isStyle2 = true;
                    this.isBorder = true;
                    this.isBorderDark = true;
                    this.activebackgroundColor = '#1d1d21';
                    this.isTextSecondary = true;
                    this.isColor = 'gray';
                    this.isSuccess = false;
                    this.isDark = true;
            } else {
                    this.isActive = false;
                    this.isStyle1 = false;
                    this.isStyle2 = false;
                    this.isBorder = false;
                    this.isBorderDark = false;
                    this.activebackgroundColor = 'white';
                    this.isTextSecondary = false;
                    this.isColor = '';
                    this.isSuccess = true;
                    this.isDark = false;
            }
        }
    }
})