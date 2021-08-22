require("./../lib/swisscalc.lib.format.js");
require("./../lib/swisscalc.lib.operator.js");
require("./../lib/swisscalc.lib.operatorCache.js");
require("./../lib/swisscalc.lib.shuntingYard.js");
require("./../lib/swisscalc.display.numericDisplay.js");
require("./../lib/swisscalc.display.memoryDisplay.js");
require("./../lib/swisscalc.calc.calculator.js");
var mexp = require('math-expression-evaluator');

import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { CalcButton, CalcDisplay } from './../components';
import { landscapeButtonsList } from '../components/LandscapeButtonsList';
import { portraitButtonsList } from '../components/PortraitButtonsList';

export default class CalculatorScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            display: "0",
            orientation: "portrait",
            mexpIsActive: false,
        };

        this.oc = global.swisscalc.lib.operatorCache;
        this.calc = new global.swisscalc.calc.calculator();
        
        Dimensions.addEventListener("change", () => {
            this.checkOrientation();
        });

        this.portraitBtnsList = [
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
                    style: {},
                    onPress: () => this.onDigitPress("0"),
                },
                {
                    title: ',',
                    color: 'blue',
                    backgroundColor: 'yellow',
                    style: {},
                    onPress: () => this.onDigitPress("."),
                },
                {
                    title: 'exp',
                    color: 'white',
                    backgroundColor: 'red',
                    style: {},
                    onPress: () => this.mexpButtonPressed(),
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

        this.portraitBtnsListEval = [
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
                    onPress: () => this.mexpEvaluate(),
                }
            ],
            [
                {
                    title: '7',
                    color: 'blue',
                    backgroundColor: 'yellow',
                    style: {},
                    onPress: () => this.addSymbol("7", false),
                },
                {
                    title: '8',
                    color: 'blue',
                    backgroundColor: 'yellow',
                    style: {},
                    onPress: () => this.addSymbol("8", false),
                }
                ,
                {
                    title: '9',
                    color: 'blue',
                    backgroundColor: 'yellow',
                    style: {},
                    onPress: () => this.addSymbol("9", false),
                },
                {
                    title: '+',
                    color: 'black',
                    backgroundColor: 'orange',
                    style: {},
                    onPress: () => this.addSymbol("+", true),
                }
            ],
            [
                {
                    title: '4',
                    color: 'blue',
                    backgroundColor: 'yellow',
                    style: {},
                    onPress: () => this.addSymbol("4", false),
                },
                {
                    title: '5',
                    color: 'blue',
                    backgroundColor: 'yellow',
                    style: {},
                    onPress: () => this.addSymbol("5", false),
                }
                ,
                {
                    title: '6',
                    color: 'blue',
                    backgroundColor: 'yellow',
                    style: {},
                    onPress: () => this.addSymbol("6", false),
                },
                {
                    title: '-',
                    color: 'black',
                    backgroundColor: 'orange',
                    style: {},
                    onPress: () => this.addSymbol("-", true),
                }
            ],
            [
                {
                    title: '1',
                    color: 'blue',
                    backgroundColor: 'yellow',
                    style: {},
                    onPress: () => this.addSymbol("1", false),
                },
                {
                    title: '2',
                    color: 'blue',
                    backgroundColor: 'yellow',
                    style: {},
                    onPress: () => this.addSymbol("2", false),
                }
                ,
                {
                    title: '3',
                    color: 'blue',
                    backgroundColor: 'yellow',
                    style: {},
                    onPress: () => this.addSymbol("3", false),
                },
                {
                    title: '*',
                    color: 'black',
                    backgroundColor: 'orange',
                    style: {},
                    onPress: () => this.addSymbol("*", true),
                }
            ],
            [
                {
                    title: '0',
                    color: 'blue',
                    backgroundColor: 'yellow',
                    style: {},
                    onPress: () => this.addSymbol("0", false),
                },
                {
                    title: ',',
                    color: 'blue',
                    backgroundColor: 'yellow',
                    style: {},
                    onPress: () => this.addSymbol(".", true),
                },
                {
                    title: 'exp',
                    color: 'white',
                    backgroundColor: 'green',
                    style: {},
                    onPress: () => this.mexpButtonPressed(),
                },
                {
                    title: '/',
                    color: 'black',
                    backgroundColor: 'orange',
                    style: {},
                    onPress: () => this.addSymbol("/", true),
                }
            ]
        ];

        this.landscapeBtnsList = [
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
                    title:'=',
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
 
        this.portraitModeBtns = portraitButtonsList;
        this.landscapeModeBtns = landscapeButtonsList;
    }

    componentDidMount(){
        this.checkOrientation();
        this.render();
    }

    checkOrientation(){
        const {width, height} = Dimensions.get("window");
        var orientation = (width>height) ? "landscape" : "portrait";
        this.setState({orientation: orientation});
    }

    mexpButtonPressed(){
        this.setState({mexpIsActive: !this.state.mexpIsActive});
        this.calc.clear();
        this.setState({ display: this.calc.getMainDisplay() });
    }

    mexpEvaluate(){
        let expression = this.calc.getMainDisplay();
        expression = expression.split(',').join('');
        let last = expression.charAt(expression.length-1);
        if(last=='.'||last=='/'||last=='*'||last=='-'||last=='+')
            expression=expression.slice(0, -1);
        let result = mexp.eval(expression);
        this.calc.clear();
        this.calc.addSymbol(result, false);
        this.setState({ display: global.swisscalc.lib.format.groupDigits(result) });
    }

    addSymbol = (symbol, isOperator) => {
        this.calc.addSymbol(symbol, isOperator);
        this.setState({ display: this.calc.getMainDisplay() });
    }

    onDigitPress = (digit) => {
        this.calc.addDigit(digit);
        this.setState({ display: this.calc.getMainDisplay() });
    }

    onClearPress = () => {
        this.calc.clear();
        this.setState({ display: this.calc.getMainDisplay() });
    }

    onEqualsPress = () => {
        this.calc.equalsPressed();
        this.setState({ display: this.calc.getMainDisplay() });
    }

    onBinaryOperatorPress = (operator) => {
        this.calc.addBinaryOperator(operator);
        this.setState({ display: this.calc.getMainDisplay() });
    }

    onUnaryOperatorPress = (operator) => {
        this.calc.addUnaryOperator(operator);
        this.setState({ display: this.calc.getMainDisplay() });
    }

    onNullaryOperatorPress = (operator) => {
        this.calc.addNullaryOperator(operator);
        this.setState({ display: this.calc.getMainDisplay() });
    }

    renderDisplay(){
        return (
            <View style={styles.display}>
                <CalcDisplay display={this.state.display} />
            </View>
        );
    }

    renderButtons(buttonsList){
        let layout = buttonsList.map((bRows, rIndex) => {
            let button = bRows.map((bItem, bIndex) => {
                return (
                    <CalcButton
                        title={bItem.title}
                        color={bItem.color}
                        backgroundColor={bItem.backgroundColor}
                        onPress={bItem.onPress}
                        style={bItem.style}
                        key={'btn-'+bIndex} />
                );
            })
            return <View style={styles.row} key={'row-'+rIndex}>{button}</View>
        })
        return layout;
    }

    render() {
        var orientationMode;
        if(this.state.orientation == "portrait" && !this.state.mexpIsActive){
            orientationMode = this.renderButtons(this.portraitBtnsList);
        }
        else if(this.state.orientation == "portrait" && this.state.mexpIsActive){
            orientationMode = this.renderButtons(this.portraitBtnsListEval);
        }
        else if(this.state.orientation == "landscape"){
            orientationMode = this.renderButtons(this.landscapeBtnsList);
        }
        return (
            <View style={styles.container}>
                {this.renderDisplay()}
                {orientationMode}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#666",
    },
    display: {
        flex:1,
        justifyContent: "flex-end",
        backgroundColor: "#777",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    lbs: {
        width: 104,
        height:55,
    }
});