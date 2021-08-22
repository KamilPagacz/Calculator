export const portraitButtonsList = [
    [
        {
            title: 'AC',
            color: 'black',
            backgroundColor: 'orange',
            style: {width: 195},
            onPress: () => this.onClearPress(),
        },
        {
            title: '=',
            color: 'black',
            backgroundColor: 'orange',
            style: {width: 195},
            onPress: () => this.onEqualsPress(),
        }
    ],
    [
        {
            title: '7',
            color: 'blue',
            backgroundColor: 'yellow',
            style: {},
            onPress: () => this.onDigitPress("7"),
        },
        {
            title: '8',
            color: 'blue',
            backgroundColor: 'yellow',
            style: {},
            onPress: () => this.onDigitPress("8"),
        }
        ,
        {
            title: '9',
            color: 'blue',
            backgroundColor: 'yellow',
            style: {},
            onPress: () => this.onDigitPress("9"),
        },
        {
            title: '+',
            color: 'black',
            backgroundColor: 'orange',
            style: {},
            onPress: () => this.onBinaryOperatorPress(this.oc.AdditionOperator),
        }
    ],
    [
        {
            title: '4',
            color: 'blue',
            backgroundColor: 'yellow',
            style: {},
            onPress: () => this.onDigitPress("4"),
        },
        {
            title: '5',
            color: 'blue',
            backgroundColor: 'yellow',
            style: {},
            onPress: () => this.onDigitPress("5"),
        }
        ,
        {
            title: '6',
            color: 'blue',
            backgroundColor: 'yellow',
            style: {},
            onPress: () => this.onDigitPress("6"),
        },
        {
            title: '-',
            color: 'black',
            backgroundColor: 'orange',
            style: {},
            onPress: () => this.onBinaryOperatorPress(this.oc.SubtractionOperator),
        }
    ],
    [
        {
            title: '1',
            color: 'blue',
            backgroundColor: 'yellow',
            style: {},
            onPress: () => this.onDigitPress("1"),
        },
        {
            title: '2',
            color: 'blue',
            backgroundColor: 'yellow',
            style: {},
            onPress: () => this.onDigitPress("2"),
        }
        ,
        {
            title: '3',
            color: 'blue',
            backgroundColor: 'yellow',
            style: {},
            onPress: () => this.onDigitPress("3"),
        },
        {
            title: '*',
            color: 'black',
            backgroundColor: 'orange',
            style: {},
            onPress: () => this.onBinaryOperatorPress(this.oc.MultiplicationOperator),
        }
    ],
    [
        {
            title: '0',
            color: 'blue',
            backgroundColor: 'yellow',
            style: {width: 195},
            onPress: () => this.onDigitPress("0"),
        }
        ,
        {
            title: ',',
            color: 'blue',
            backgroundColor: 'yellow',
            style: {},
            onPress: () => this.onDigitPress("."),
        },
        {
            title: '/',
            color: 'black',
            backgroundColor: 'orange',
            style: {},
            onPress: () => this.onBinaryOperatorPress(this.oc.DivisionOperator),
        }
    ]
];
