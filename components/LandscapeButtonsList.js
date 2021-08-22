export const landscapeButtonsList = [
    [
        {
            title:'ʸ√x',
            color:'white',
            backgroundColor:'green',
            style:{width:104, height:55},
            onPress: () => this.onBinaryOperatorPress(this.oc.RootOperator),
        },
        {
            title:'x!',
            color:'white',
            backgroundColor:'green',
            style:{width:104, height:55},
            onPress: () => this.onUnaryOperatorPress(this.oc.FactorialOperator),
        },
        {
            title:'AC',
            color:'black',
            backgroundColor:'orange',
            style:{width:104, height:55},
            onPress: () => this.onClearPress(),
        },
        {
            title:'+/-',
            color:'black',
            backgroundColor:'orange',
            style:{width:104, height:55},
            onPress: () => this.onUnaryOperatorPress(this.oc.NegateOperator),
        },
        {
            title:'%',
            color:'black',
            backgroundColor:'orange',
            style:{width:104, height:55},
            onPress: () => this.onBinaryOperatorPress(this.oc.ModulusOperator),
        },
        {
            title:':',
            color:'black',
            backgroundColor:'orange',
            style:{width:104, height:55},
            onPress: () => this.onEqualsPress(),
        },
    ],
    [
        {
            title:'eˣ',
            color:'white',
            backgroundColor:'green',
            style:{width:104, height:55},
            onPress: () => this.onUnaryOperatorPress(this.oc.EExponentialOperator),
        },
        {
            title:'10ˣ',
            color:'white',
            backgroundColor:'green',
            style:{width:104, height:55},
            onPress: () => this.onUnaryOperatorPress(this.oc.TenExponentialOperator),
        },
        {
            title:'7',
            color:'blue',
            backgroundColor:'yellow',
            style:{width:104, height:55},
            onPress: () => this.onDigitPress("7"),
        },
        {
            title:'8',
            color:'blue',
            backgroundColor:'yellow',
            style:{width:104, height:55},
            onPress: () => this.onDigitPress("8"),
        },
        {
            title:'9',
            color:'blue',
            backgroundColor:'yellow',
            style:{width:104, height:55},
            onPress: () => this.onDigitPress("9"),
        },
        {
            title:'+',
            color:'black',
            backgroundColor:'orange',
            style:{width:104, height:55},
            onPress: () => this.onBinaryOperatorPress(this.oc.AdditionOperator),
        },
    ],
    [
        {
            title:'ln',
            color:'white',
            backgroundColor:'green',
            style:{width:104, height:55},
            onPress: () => this.onUnaryOperatorPress(this.oc.NaturalLogOperator),
        },
        {
            title:'log₁₀',
            color:'white',
            backgroundColor:'green',
            style:{width:104, height:55},
            onPress: () => this.onUnaryOperatorPress(this.oc.LogBase10Operator),
        },
        {
            title:'4',
            color:'blue',
            backgroundColor:'yellow',
            style:{width:104, height:55},
            onPress: () => this.onDigitPress("4"),
        },
        {
            title:'5',
            color:'blue',
            backgroundColor:'yellow',
            style:{width:104, height:55},
            onPress: () => this.onDigitPress("5"),
        },
        {
            title:'6',
            color:'blue',
            backgroundColor:'yellow',
            style:{width:104, height:55},
            onPress: () => this.onDigitPress("6"),
        },
        {
            title:'-',
            color:'black',
            backgroundColor:'orange',
            style:{width:104, height:55},
            onPress: () => this.onBinaryOperatorPress(this.oc.SubtractionOperator),
        },
    ],
    [
        {
            title:'e',
            color:'white',
            backgroundColor:'green',
            style:{width:104, height:55},
            onPress: () => this.onNullaryOperatorPress(this.oc.EOperator),
        },
        {
            title:'x²',
            color:'white',
            backgroundColor:'green',
            style:{width:104, height:55},
            onPress: () => this.onUnaryOperatorPress(this.oc.XSquaredOperator),
        },
        {
            title:'1',
            color:'blue',
            backgroundColor:'yellow',
            style:{width:104, height:55},
            onPress: () => this.onDigitPress("1"),
        },
        {
            title:'2',
            color:'blue',
            backgroundColor:'yellow',
            style:{width:104, height:55},
            onPress: () => this.onDigitPress("2"),
        },
        {
            title:'3',
            color:'blue',
            backgroundColor:'yellow',
            style:{width:104, height:55},
            onPress: () => this.onDigitPress("3"),
        },
        {
            title:'X',
            color:'black',
            backgroundColor:'orange',
            style:{width:104, height:55},
            onPress: () => this.onBinaryOperatorPress(this.oc.MultiplicationOperator),
        },
    ],
    [
        {
            title:'π',
            color:'white',
            backgroundColor:'green',
            style:{width:104, height:55},
            onPress: () => this.onNullaryOperatorPress(this.oc.PiOperator),
        },
        {
            title:'x³',
            color:'white',
            backgroundColor:'green',
            style:{width:104, height:55},
            onPress: () => this.onUnaryOperatorPress(this.oc.XCubedOperator),
        },
        {
            title:'0',
            color:'blue',
            backgroundColor:'yellow',
            style:{width:218,height:55},
            onPress: () => this.onDigitPress('0'),
        },
        {
            title:',',
            color:'blue',
            backgroundColor:'yellow',
            style:{width:104, height:55},
            onPress: () => this.onDigitPress('.'),
        },
        {
            title:'/',
            color:'black',
            backgroundColor:'orange',
            style:{width:104, height:55},
            onPress: () => this.onBinaryOperatorPress(this.oc.DivisionOperator),
        },
    ],
];