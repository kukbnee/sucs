`https://api.encar.com/search/car/list
/mobile?count=true
&q=(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.
    (C.CarType.Y._.
    (C.Manufacturer.%EA%B8%B0%EC%95%84._.
        (C.ModelGroup.%EC%8F%98%EB%A0%8C%ED%86%A0._.Model.%EB%8D%94+%EB%89%B4+%EC%8F%98%EB%A0%8C%ED%86%A0.)
    )
    )_.
    (Or.OfficeCityState.%EC%84%9C%EC%9A%B8._.OfficeCityState.%EA%B2%BD%EA%B8%B0.)_.
    Condition.Inspection._.
    Condition.Record.)
&sr=%7CModifiedDate%7C0%7C200
&inav=%7CMetadata%7CSort`
{
  "Count": 205,
  "iNav": {
      "Nodes": [
          {
              "LowerPlaceholder": "<!lower>",
              "UpperPlaceholder": "<!upper>",
              "LowerBound": "50000",
              "UpperBound": "150000",
              "QueryWithPlaceholder": "(And.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Mileage.range(<!lower>..<!upper>).)",
              "IsSelected": true,
              "RemoveAction": "(And.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record.)",
              "Name": "Mileage",
              "DisplayName": "주행거리",
              "Type": "RangeAction"
          },
          {
              "LowerPlaceholder": "<!lower>",
              "UpperPlaceholder": "<!upper>",
              "LowerBound": "1500",
              "UpperBound": "4000",
              "QueryWithPlaceholder": "(And.Mileage.range(50000..150000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Price.range(<!lower>..<!upper>).)",
              "IsSelected": true,
              "RemoveAction": "(And.Mileage.range(50000..150000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record.)",
              "Name": "Price",
              "DisplayName": "가격",
              "Type": "RangeAction"
          },
          {
              "IsSelected": true,
              "PlaceholderExpression": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(<!>))",
              "MultiSelectMode": "None",
              "RemoveAction": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record.)",
              "Facets": [
                  {
                      "IsSelected": true,
                      "Value": "N",
                      "DisplayValue": "N",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record.)",
                      "Count": 205,
                      "Expression": "Hidden.N.",
                      "Metadata": {}
                  }
              ],
              "Metadata": {},
              "Name": "Hidden",
              "DisplayName": "숨김데이터",
              "Type": "Aspect"
          },
          {
              "IsSelected": true,
              "PlaceholderExpression": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record.)",
              "Facets": [
                  {
                      "IsSelected": true,
                      "Value": "Y",
                      "DisplayValue": "Y",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record.)",
                      "Count": 8314,
                      "Refinements": {
                          "Nodes": [
                              {
                                  "IsSelected": true,
                                  "PlaceholderExpression": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(<!>)))",
                                  "MultiSelectMode": "None",
                                  "RemoveAction": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.CarType.Y.)",
                                  "Facets": [
                                      {
                                          "IsSelected": false,
                                          "Value": "현대",
                                          "DisplayValue": "현대",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.Manufacturer.현대.))",
                                          "Count": 3422,
                                          "Expression": "Manufacturer.현대.",
                                          "Metadata": {
                                              "Ordering": [
                                                  10.0
                                              ],
                                              "EngName": [
                                                  "Hyundai"
                                              ],
                                              "Expression": [
                                                  "GreenType"
                                              ],
                                              "Code": [
                                                  "001"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": 80.0,
                                                      "Max": 6502.0
                                                  }
                                              ],
                                              "CarType": [
                                                  "Y"
                                              ],
                                              "Category": [
                                                  [
                                                      "RV",
                                                      "SUV",
                                                      "경차",
                                                      "대형차",
                                                      "소형차",
                                                      "스포츠카",
                                                      "승합차",
                                                      "준중형차",
                                                      "중형차",
                                                      "화물차"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "제네시스",
                                          "DisplayValue": "제네시스",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.Manufacturer.제네시스.))",
                                          "Count": 966,
                                          "Expression": "Manufacturer.제네시스.",
                                          "Metadata": {
                                              "Ordering": [
                                                  15.0
                                              ],
                                              "EngName": [
                                                  "Genesis"
                                              ],
                                              "Expression": [
                                                  "GreenType"
                                              ],
                                              "Code": [
                                                  "007"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": 1955.0,
                                                      "Max": 17268.0
                                                  }
                                              ],
                                              "CarType": [
                                                  "Y"
                                              ],
                                              "Category": [
                                                  [
                                                      "SUV",
                                                      "대형차",
                                                      "중형차"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": true,
                                          "Value": "기아",
                                          "DisplayValue": "기아",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.CarType.Y.)",
                                          "Count": 3090,
                                          "Refinements": {
                                              "Nodes": [
                                                  {
                                                      "IsSelected": true,
                                                      "PlaceholderExpression": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.(<!>))))",
                                                      "MultiSelectMode": "None",
                                                      "RemoveAction": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.Manufacturer.기아.))",
                                                      "Facets": [
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "K3",
                                                              "DisplayValue": "K3",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.K3.)))",
                                                              "Count": 54,
                                                              "Expression": "ModelGroup.K3.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      0.0
                                                                  ],
                                                                  "EngName": [
                                                                      "K3"
                                                                  ],
                                                                  "Code": [
                                                                      "060"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 536.0,
                                                                          "Max": 2599.0
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "스포츠카",
                                                                          "준중형차"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "K5",
                                                              "DisplayValue": "K5",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.K5.)))",
                                                              "Count": 324,
                                                              "Expression": "ModelGroup.K5.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      1.0
                                                                  ],
                                                                  "EngName": [
                                                                      "K5"
                                                                  ],
                                                                  "Code": [
                                                                      "001"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 377.0,
                                                                          "Max": 3471.0
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "중형차"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "K7",
                                                              "DisplayValue": "K7",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.K7.)))",
                                                              "Count": 666,
                                                              "Expression": "ModelGroup.K7.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      2.0
                                                                  ],
                                                                  "EngName": [
                                                                      "K7"
                                                                  ],
                                                                  "Code": [
                                                                      "002"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 374.0,
                                                                          "Max": 3625.0
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "대형차"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "K8",
                                                              "DisplayValue": "K8",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.K8.)))",
                                                              "Count": 30,
                                                              "Expression": "ModelGroup.K8.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      3.0
                                                                  ],
                                                                  "EngName": [
                                                                      "K8"
                                                                  ],
                                                                  "Code": [
                                                                      "065"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 2883.0,
                                                                          "Max": 4794.0
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "대형차"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "K9",
                                                              "DisplayValue": "K9",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.K9.)))",
                                                              "Count": 195,
                                                              "Expression": "ModelGroup.K9.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      4.0
                                                                  ],
                                                                  "EngName": [
                                                                      "K9"
                                                                  ],
                                                                  "Code": [
                                                                      "059"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 946.0,
                                                                          "Max": 7994.0
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "대형차"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "EV6",
                                                              "DisplayValue": "EV6",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.EV6.)))",
                                                              "Count": 0,
                                                              "Expression": "ModelGroup.EV6.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      5.0
                                                                  ],
                                                                  "EngName": [
                                                                      "EV6"
                                                                  ],
                                                                  "Code": [
                                                                      "066"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 3552.0,
                                                                          "Max": 6492.0
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "준중형차"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "EV9",
                                                              "DisplayValue": "EV9",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.EV9.)))",
                                                              "Count": 0,
                                                              "Expression": "ModelGroup.EV9.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      6.0
                                                                  ],
                                                                  "EngName": [
                                                                      "EV9"
                                                                  ],
                                                                  "Code": [
                                                                      "069"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": null,
                                                                          "Max": null
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "SUV"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "X-TREK",
                                                              "DisplayValue": "X-TREK",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.X-TREK.)))",
                                                              "Count": 0,
                                                              "Expression": "ModelGroup.X-TREK.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      7.0
                                                                  ],
                                                                  "EngName": [
                                                                      "X-TREK"
                                                                  ],
                                                                  "Code": [
                                                                      "003"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": null,
                                                                          "Max": null
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "RV"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "니로",
                                                              "DisplayValue": "니로",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.니로.)))",
                                                              "Count": 121,
                                                              "Expression": "ModelGroup.니로.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      8.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Niro"
                                                                  ],
                                                                  "Code": [
                                                                      "061"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 1416.0,
                                                                          "Max": 4505.0
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "SUV"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "델타",
                                                              "DisplayValue": "델타",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.델타.)))",
                                                              "Count": 0,
                                                              "Expression": "ModelGroup.델타.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      9.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Delta"
                                                                  ],
                                                                  "Code": [
                                                                      "006"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": null,
                                                                          "Max": null
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "소형차"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "레이",
                                                              "DisplayValue": "레이",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.레이.)))",
                                                              "Count": 0,
                                                              "Expression": "ModelGroup.레이.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      10.0
                                                                  ],
                                                                  "EngName": [
                                                                      "RAY"
                                                                  ],
                                                                  "Code": [
                                                                      "058"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 416.0,
                                                                          "Max": 1771.0
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "경차"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "레토나",
                                                              "DisplayValue": "레토나",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.레토나.)))",
                                                              "Count": 0,
                                                              "Expression": "ModelGroup.레토나.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      11.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Retona"
                                                                  ],
                                                                  "Code": [
                                                                      "008"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": null,
                                                                          "Max": null
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "SUV"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "로체",
                                                              "DisplayValue": "로체",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.로체.)))",
                                                              "Count": 0,
                                                              "Expression": "ModelGroup.로체.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      12.0
                                                                  ],
                                                                  "EngName": [
                                                                      "LOTZE"
                                                                  ],
                                                                  "Code": [
                                                                      "009"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 171.0,
                                                                          "Max": 345.0
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "중형차"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "록스타",
                                                              "DisplayValue": "록스타",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.록스타.)))",
                                                              "Count": 0,
                                                              "Expression": "ModelGroup.록스타.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      13.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Rocksta"
                                                                  ],
                                                                  "Code": [
                                                                      "010"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": null,
                                                                          "Max": null
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "SUV"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "리갈",
                                                              "DisplayValue": "리갈",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.리갈.)))",
                                                              "Count": 0,
                                                              "Expression": "ModelGroup.리갈.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      14.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Regal"
                                                                  ],
                                                                  "Code": [
                                                                      "011"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": null,
                                                                          "Max": null
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "중형차"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "리오",
                                                              "DisplayValue": "리오",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.리오.)))",
                                                              "Count": 0,
                                                              "Expression": "ModelGroup.리오.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      15.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Rio"
                                                                  ],
                                                                  "Code": [
                                                                      "012"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": null,
                                                                          "Max": null
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "소형차"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "모닝",
                                                              "DisplayValue": "모닝",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.모닝.)))",
                                                              "Count": 0,
                                                              "Expression": "ModelGroup.모닝.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      16.0
                                                                  ],
                                                                  "EngName": [
                                                                      "morning"
                                                                  ],
                                                                  "Code": [
                                                                      "013"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 100.0,
                                                                          "Max": 1399.0
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "경차"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "모하비",
                                                              "DisplayValue": "모하비",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.모하비.)))",
                                                              "Count": 95,
                                                              "Expression": "ModelGroup.모하비.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      17.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Mohave"
                                                                  ],
                                                                  "Code": [
                                                                      "015"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 559.0,
                                                                          "Max": 5618.0
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "SUV"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "베스타",
                                                              "DisplayValue": "베스타",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.베스타.)))",
                                                              "Count": 0,
                                                              "Expression": "ModelGroup.베스타.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      18.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Besta"
                                                                  ],
                                                                  "Code": [
                                                                      "016"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": null,
                                                                          "Max": null
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "승합차"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "봉고III 미니버스",
                                                              "DisplayValue": "봉고III 미니버스",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.봉고III 미니버스.)))",
                                                              "Count": 0,
                                                              "Expression": "ModelGroup.봉고III 미니버스.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      19.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Bongo III Minibus"
                                                                  ],
                                                                  "Code": [
                                                                      "018"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": null,
                                                                          "Max": null
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "승합차"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "브리샤",
                                                              "DisplayValue": "브리샤",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.브리샤.)))",
                                                              "Count": 0,
                                                              "Expression": "ModelGroup.브리샤.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      20.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Brisa"
                                                                  ],
                                                                  "Code": [
                                                                      "019"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": null,
                                                                          "Max": null
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "소형차"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "비스토",
                                                              "DisplayValue": "비스토",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.비스토.)))",
                                                              "Count": 0,
                                                              "Expression": "ModelGroup.비스토.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      21.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Visto"
                                                                  ],
                                                                  "Code": [
                                                                      "020"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": null,
                                                                          "Max": null
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "경차"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "세피아",
                                                              "DisplayValue": "세피아",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.세피아.)))",
                                                              "Count": 0,
                                                              "Expression": "ModelGroup.세피아.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      22.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Sephia"
                                                                  ],
                                                                  "Code": [
                                                                      "022"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": null,
                                                                          "Max": null
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "준중형차"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "셀토스",
                                                              "DisplayValue": "셀토스",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.셀토스.)))",
                                                              "Count": 152,
                                                              "Expression": "ModelGroup.셀토스.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      23.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Seltos"
                                                                  ],
                                                                  "Code": [
                                                                      "064"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 1549.0,
                                                                          "Max": 3017.0
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "SUV"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "슈마",
                                                              "DisplayValue": "슈마",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.슈마.)))",
                                                              "Count": 0,
                                                              "Expression": "ModelGroup.슈마.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      24.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Shuma"
                                                                  ],
                                                                  "Code": [
                                                                      "023"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": null,
                                                                          "Max": null
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "준중형차"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "스토닉",
                                                              "DisplayValue": "스토닉",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.스토닉.)))",
                                                              "Count": 7,
                                                              "Expression": "ModelGroup.스토닉.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      25.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Stonic"
                                                                  ],
                                                                  "Code": [
                                                                      "063"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 899.0,
                                                                          "Max": 1544.0
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "SUV"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "스팅어",
                                                              "DisplayValue": "스팅어",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.스팅어.)))",
                                                              "Count": 138,
                                                              "Expression": "ModelGroup.스팅어.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      26.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Stinger"
                                                                  ],
                                                                  "Code": [
                                                                      "062"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 1830.0,
                                                                          "Max": 4976.0
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "중형차"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "스펙트라",
                                                              "DisplayValue": "스펙트라",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.스펙트라.)))",
                                                              "Count": 0,
                                                              "Expression": "ModelGroup.스펙트라.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      27.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Spectra"
                                                                  ],
                                                                  "Code": [
                                                                      "024"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": null,
                                                                          "Max": null
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "준중형차"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "스포티지",
                                                              "DisplayValue": "스포티지",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.스포티지.)))",
                                                              "Count": 136,
                                                              "Expression": "ModelGroup.스포티지.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      28.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Sportage"
                                                                  ],
                                                                  "Code": [
                                                                      "025"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 154.0,
                                                                          "Max": 6701.0
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "SUV"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "쎄라토",
                                                              "DisplayValue": "쎄라토",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.쎄라토.)))",
                                                              "Count": 0,
                                                              "Expression": "ModelGroup.쎄라토.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      29.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Cerato"
                                                                  ],
                                                                  "Code": [
                                                                      "026"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 89.0,
                                                                          "Max": 213.0
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "준중형차"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": true,
                                                              "Value": "쏘렌토",
                                                              "DisplayValue": "쏘렌토",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.Manufacturer.기아.))",
                                                              "Count": 420,
                                                              "Refinements": {
                                                                  "Nodes": [
                                                                      {
                                                                          "IsSelected": true,
                                                                          "PlaceholderExpression": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.(<!>)))))",
                                                                          "MultiSelectMode": "None",
                                                                          "RemoveAction": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.쏘렌토.)))",
                                                                          "Facets": [
                                                                              {
                                                                                  "IsSelected": false,
                                                                                  "Value": "쏘렌토 4세대",
                                                                                  "DisplayValue": "쏘렌토 4세대",
                                                                                  "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.쏘렌토 4세대.))))",
                                                                                  "Count": 100,
                                                                                  "Expression": "Model.쏘렌토 4세대.",
                                                                                  "Metadata": {
                                                                                      "Ordering": [
                                                                                          0.0
                                                                                      ],
                                                                                      "ModelEndDate": [
                                                                                          null
                                                                                      ],
                                                                                      "ModelStartDate": [
                                                                                          "202003"
                                                                                      ],
                                                                                      "Code": [
                                                                                          "151"
                                                                                      ],
                                                                                      "Price": [
                                                                                          {
                                                                                              "Min": 2799.0,
                                                                                              "Max": 4781.0
                                                                                          }
                                                                                      ],
                                                                                      "Category": [
                                                                                          [
                                                                                              "RV",
                                                                                              "SUV",
                                                                                              "경승합차",
                                                                                              "경차",
                                                                                              "대형차",
                                                                                              "소형차",
                                                                                              "스포츠카",
                                                                                              "승합차",
                                                                                              "준중형차",
                                                                                              "중형차"
                                                                                          ]
                                                                                      ],
                                                                                      "Image": [
                                                                                          "/carsdata/cars/cm_cardb/file/e8a8aab0-991e-4a80-88c0-69cd49413650.png"
                                                                                      ]
                                                                                  }
                                                                              },
                                                                              {
                                                                                  "IsSelected": true,
                                                                                  "Value": "더 뉴 쏘렌토",
                                                                                  "DisplayValue": "더 뉴 쏘렌토",
                                                                                  "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.쏘렌토.)))",
                                                                                  "Count": 205,
                                                                                  "Refinements": {
                                                                                      "Nodes": [
                                                                                          {
                                                                                              "IsSelected": false,
                                                                                              "PlaceholderExpression": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.(C.Model.더 뉴 쏘렌토._.(<!>))))))",
                                                                                              "MultiSelectMode": "Or",
                                                                                              "RemoveAction": "",
                                                                                              "Facets": [
                                                                                                  {
                                                                                                      "IsSelected": false,
                                                                                                      "Value": "가솔린 2WD",
                                                                                                      "DisplayValue": "가솔린 2WD",
                                                                                                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.(C.Model.더 뉴 쏘렌토._.BadgeGroup.가솔린 2WD.)))))",
                                                                                                      "Count": 16,
                                                                                                      "Expression": "BadgeGroup.가솔린 2WD.",
                                                                                                      "Metadata": {
                                                                                                          "Code": [
                                                                                                              "163065"
                                                                                                          ]
                                                                                                      }
                                                                                                  },
                                                                                                  {
                                                                                                      "IsSelected": false,
                                                                                                      "Value": "가솔린 4WD",
                                                                                                      "DisplayValue": "가솔린 4WD",
                                                                                                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.(C.Model.더 뉴 쏘렌토._.BadgeGroup.가솔린 4WD.)))))",
                                                                                                      "Count": 10,
                                                                                                      "Expression": "BadgeGroup.가솔린 4WD.",
                                                                                                      "Metadata": {
                                                                                                          "Code": [
                                                                                                              "163119"
                                                                                                          ]
                                                                                                      }
                                                                                                  },
                                                                                                  {
                                                                                                      "IsSelected": false,
                                                                                                      "Value": "디젤 2WD",
                                                                                                      "DisplayValue": "디젤 2WD",
                                                                                                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.(C.Model.더 뉴 쏘렌토._.BadgeGroup.디젤 2WD.)))))",
                                                                                                      "Count": 130,
                                                                                                      "Expression": "BadgeGroup.디젤 2WD.",
                                                                                                      "Metadata": {
                                                                                                          "Code": [
                                                                                                              "168065"
                                                                                                          ]
                                                                                                      }
                                                                                                  },
                                                                                                  {
                                                                                                      "IsSelected": false,
                                                                                                      "Value": "디젤 4WD",
                                                                                                      "DisplayValue": "디젤 4WD",
                                                                                                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.(C.Model.더 뉴 쏘렌토._.BadgeGroup.디젤 4WD.)))))",
                                                                                                      "Count": 49,
                                                                                                      "Expression": "BadgeGroup.디젤 4WD.",
                                                                                                      "Metadata": {
                                                                                                          "Code": [
                                                                                                              "168119"
                                                                                                          ]
                                                                                                      }
                                                                                                  }
                                                                                              ],
                                                                                              "Metadata": {},
                                                                                              "Name": "BadgeGroup",
                                                                                              "DisplayName": "등급필터",
                                                                                              "Type": "Aspect"
                                                                                          },
                                                                                          {
                                                                                              "IsSelected": false,
                                                                                              "PlaceholderExpression": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.(C.Model.더 뉴 쏘렌토._.(<!>))))))",
                                                                                              "MultiSelectMode": "None",
                                                                                              "RemoveAction": "",
                                                                                              "Facets": [
                                                                                                  {
                                                                                                      "IsSelected": false,
                                                                                                      "Value": "2020",
                                                                                                      "DisplayValue": "2020",
                                                                                                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.(C.Model.더 뉴 쏘렌토._.YearGroup.2020.)))))",
                                                                                                      "Count": 5,
                                                                                                      "Expression": "YearGroup.2020.",
                                                                                                      "Metadata": {
                                                                                                          "Price": [
                                                                                                              {
                                                                                                                  "Min": 2093.0,
                                                                                                                  "Max": 3048.0
                                                                                                              }
                                                                                                          ]
                                                                                                      }
                                                                                                  },
                                                                                                  {
                                                                                                      "IsSelected": false,
                                                                                                      "Value": "2019",
                                                                                                      "DisplayValue": "2019",
                                                                                                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.(C.Model.더 뉴 쏘렌토._.YearGroup.2019.)))))",
                                                                                                      "Count": 90,
                                                                                                      "Expression": "YearGroup.2019.",
                                                                                                      "Metadata": {
                                                                                                          "Price": [
                                                                                                              {
                                                                                                                  "Min": 1945.0,
                                                                                                                  "Max": 2878.0
                                                                                                              }
                                                                                                          ]
                                                                                                      }
                                                                                                  },
                                                                                                  {
                                                                                                      "IsSelected": false,
                                                                                                      "Value": "2018",
                                                                                                      "DisplayValue": "2018",
                                                                                                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.(C.Model.더 뉴 쏘렌토._.YearGroup.2018.)))))",
                                                                                                      "Count": 83,
                                                                                                      "Expression": "YearGroup.2018.",
                                                                                                      "Metadata": {
                                                                                                          "Price": [
                                                                                                              {
                                                                                                                  "Min": 1778.0,
                                                                                                                  "Max": 2603.0
                                                                                                              }
                                                                                                          ]
                                                                                                      }
                                                                                                  },
                                                                                                  {
                                                                                                      "IsSelected": false,
                                                                                                      "Value": "2017",
                                                                                                      "DisplayValue": "2017",
                                                                                                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.(C.Model.더 뉴 쏘렌토._.YearGroup.2017.)))))",
                                                                                                      "Count": 27,
                                                                                                      "Expression": "YearGroup.2017.",
                                                                                                      "Metadata": {
                                                                                                          "Price": [
                                                                                                              {
                                                                                                                  "Min": 1683.0,
                                                                                                                  "Max": 2382.0
                                                                                                              }
                                                                                                          ]
                                                                                                      }
                                                                                                  }
                                                                                              ],
                                                                                              "Metadata": {},
                                                                                              "Name": "YearGroup",
                                                                                              "DisplayName": "연식년도",
                                                                                              "Type": "Aspect"
                                                                                          }
                                                                                      ],
                                                                                      "BreadCrumbs": []
                                                                                  },
                                                                                  "Expression": "Model.더 뉴 쏘렌토.",
                                                                                  "Metadata": {
                                                                                      "Ordering": [
                                                                                          1.0
                                                                                      ],
                                                                                      "ModelEndDate": [
                                                                                          "202006"
                                                                                      ],
                                                                                      "ModelStartDate": [
                                                                                          "201707"
                                                                                      ],
                                                                                      "Code": [
                                                                                          "133"
                                                                                      ],
                                                                                      "Price": [
                                                                                          {
                                                                                              "Min": 1683.0,
                                                                                              "Max": 3048.0
                                                                                          }
                                                                                      ],
                                                                                      "Category": [
                                                                                          [
                                                                                              "RV",
                                                                                              "SUV",
                                                                                              "경승합차",
                                                                                              "경차",
                                                                                              "대형차",
                                                                                              "소형차",
                                                                                              "스포츠카",
                                                                                              "승합차",
                                                                                              "준중형차",
                                                                                              "중형차"
                                                                                          ]
                                                                                      ],
                                                                                      "Image": [
                                                                                          "/carsdata/cars/cm_cardb/file/002_133_2018.png"
                                                                                      ]
                                                                                  }
                                                                              },
                                                                              {
                                                                                  "IsSelected": false,
                                                                                  "Value": "올 뉴 쏘렌토",
                                                                                  "DisplayValue": "올 뉴 쏘렌토",
                                                                                  "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.올 뉴 쏘렌토.))))",
                                                                                  "Count": 115,
                                                                                  "Expression": "Model.올 뉴 쏘렌토.",
                                                                                  "Metadata": {
                                                                                      "Ordering": [
                                                                                          2.0
                                                                                      ],
                                                                                      "ModelEndDate": [
                                                                                          "201709"
                                                                                      ],
                                                                                      "ModelStartDate": [
                                                                                          "201409"
                                                                                      ],
                                                                                      "Code": [
                                                                                          "114"
                                                                                      ],
                                                                                      "Price": [
                                                                                          {
                                                                                              "Min": 1259.0,
                                                                                              "Max": 2105.0
                                                                                          }
                                                                                      ],
                                                                                      "Category": [
                                                                                          [
                                                                                              "RV",
                                                                                              "SUV",
                                                                                              "경승합차",
                                                                                              "경차",
                                                                                              "대형차",
                                                                                              "소형차",
                                                                                              "스포츠카",
                                                                                              "승합차",
                                                                                              "준중형차",
                                                                                              "중형차"
                                                                                          ]
                                                                                      ],
                                                                                      "Image": [
                                                                                          "/carsdata/cars/cm_cardb/file/002_114_2017.png"
                                                                                      ]
                                                                                  }
                                                                              },
                                                                              {
                                                                                  "IsSelected": false,
                                                                                  "Value": "뉴 쏘렌토 R",
                                                                                  "DisplayValue": "뉴 쏘렌토 R",
                                                                                  "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.뉴 쏘렌토 R.))))",
                                                                                  "Count": 0,
                                                                                  "Expression": "Model.뉴 쏘렌토 R.",
                                                                                  "Metadata": {
                                                                                      "Ordering": [
                                                                                          3.0
                                                                                      ],
                                                                                      "ModelEndDate": [
                                                                                          "201410"
                                                                                      ],
                                                                                      "ModelStartDate": [
                                                                                          "201207"
                                                                                      ],
                                                                                      "Code": [
                                                                                          "102"
                                                                                      ],
                                                                                      "Price": [
                                                                                          {
                                                                                              "Min": 796.0,
                                                                                              "Max": 1208.0
                                                                                          }
                                                                                      ],
                                                                                      "Category": [
                                                                                          [
                                                                                              "RV",
                                                                                              "SUV",
                                                                                              "경승합차",
                                                                                              "경차",
                                                                                              "대형차",
                                                                                              "소형차",
                                                                                              "스포츠카",
                                                                                              "승합차",
                                                                                              "준중형차",
                                                                                              "중형차"
                                                                                          ]
                                                                                      ],
                                                                                      "Image": [
                                                                                          "/carsdata/cars/cm_cardb/file/002_102_2014.png"
                                                                                      ]
                                                                                  }
                                                                              },
                                                                              {
                                                                                  "IsSelected": false,
                                                                                  "Value": "쏘렌토 R",
                                                                                  "DisplayValue": "쏘렌토 R",
                                                                                  "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.쏘렌토 R.))))",
                                                                                  "Count": 0,
                                                                                  "Expression": "Model.쏘렌토 R.",
                                                                                  "Metadata": {
                                                                                      "Ordering": [
                                                                                          4.0
                                                                                      ],
                                                                                      "ModelEndDate": [
                                                                                          "201208"
                                                                                      ],
                                                                                      "ModelStartDate": [
                                                                                          "200905"
                                                                                      ],
                                                                                      "Code": [
                                                                                          "087"
                                                                                      ],
                                                                                      "Price": [
                                                                                          {
                                                                                              "Min": 507.0,
                                                                                              "Max": 975.0
                                                                                          }
                                                                                      ],
                                                                                      "Category": [
                                                                                          [
                                                                                              "RV",
                                                                                              "SUV",
                                                                                              "경승합차",
                                                                                              "경차",
                                                                                              "대형차",
                                                                                              "소형차",
                                                                                              "스포츠카",
                                                                                              "승합차",
                                                                                              "준중형차",
                                                                                              "중형차"
                                                                                          ]
                                                                                      ],
                                                                                      "Image": [
                                                                                          "/carsdata/cars/cm_cardb/file/002_087_2012.png"
                                                                                      ]
                                                                                  }
                                                                              },
                                                                              {
                                                                                  "IsSelected": false,
                                                                                  "Value": "뉴쏘렌토",
                                                                                  "DisplayValue": "뉴쏘렌토",
                                                                                  "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.뉴쏘렌토.))))",
                                                                                  "Count": 0,
                                                                                  "Expression": "Model.뉴쏘렌토.",
                                                                                  "Metadata": {
                                                                                      "Ordering": [
                                                                                          5.0
                                                                                      ],
                                                                                      "ModelEndDate": [
                                                                                          "200906"
                                                                                      ],
                                                                                      "ModelStartDate": [
                                                                                          "200604"
                                                                                      ],
                                                                                      "Code": [
                                                                                          "077"
                                                                                      ],
                                                                                      "Price": [
                                                                                          {
                                                                                              "Min": 197.0,
                                                                                              "Max": 384.0
                                                                                          }
                                                                                      ],
                                                                                      "Category": [
                                                                                          [
                                                                                              "RV",
                                                                                              "SUV",
                                                                                              "경승합차",
                                                                                              "경차",
                                                                                              "대형차",
                                                                                              "소형차",
                                                                                              "스포츠카",
                                                                                              "승합차",
                                                                                              "준중형차",
                                                                                              "중형차"
                                                                                          ]
                                                                                      ],
                                                                                      "Image": [
                                                                                          "/carsdata/cars/cm_cardb/file/002_077_2009.png"
                                                                                      ]
                                                                                  }
                                                                              },
                                                                              {
                                                                                  "IsSelected": false,
                                                                                  "Value": "쏘렌토",
                                                                                  "DisplayValue": "쏘렌토",
                                                                                  "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.쏘렌토.))))",
                                                                                  "Count": 0,
                                                                                  "Expression": "Model.쏘렌토.",
                                                                                  "Metadata": {
                                                                                      "Ordering": [
                                                                                          6.0
                                                                                      ],
                                                                                      "ModelEndDate": [
                                                                                          "200605"
                                                                                      ],
                                                                                      "ModelStartDate": [
                                                                                          "200202"
                                                                                      ],
                                                                                      "Code": [
                                                                                          "036"
                                                                                      ],
                                                                                      "Price": [
                                                                                          {
                                                                                              "Min": 158.0,
                                                                                              "Max": 1017.0
                                                                                          }
                                                                                      ],
                                                                                      "Category": [
                                                                                          [
                                                                                              "RV",
                                                                                              "SUV",
                                                                                              "경승합차",
                                                                                              "경차",
                                                                                              "대형차",
                                                                                              "소형차",
                                                                                              "스포츠카",
                                                                                              "승합차",
                                                                                              "준중형차",
                                                                                              "중형차"
                                                                                          ]
                                                                                      ],
                                                                                      "Image": [
                                                                                          "/carsdata/cars/cm_cardb/file/002_036_2006.png"
                                                                                      ]
                                                                                  }
                                                                              }
                                                                          ],
                                                                          "Metadata": {},
                                                                          "Name": "Model",
                                                                          "DisplayName": "모델",
                                                                          "Type": "Aspect"
                                                                      }
                                                                  ],
                                                                  "BreadCrumbs": [
                                                                      {
                                                                          "Aspect": "Model",
                                                                          "AspectDisplay": "모델",
                                                                          "Facet": "더 뉴 쏘렌토",
                                                                          "FacetDisplay": "더 뉴 쏘렌토",
                                                                          "Children": [],
                                                                          "Type": "FacetBreadCrumb",
                                                                          "RemoveAction": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.쏘렌토.)))"
                                                                      }
                                                                  ]
                                                              },
                                                              "Expression": "(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      30.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Sorento"
                                                                  ],
                                                                  "Code": [
                                                                      "027"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 158.0,
                                                                          "Max": 4781.0
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "SUV"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "쏘울",
                                                              "DisplayValue": "쏘울",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.쏘울.)))",
                                                              "Count": 19,
                                                              "Expression": "ModelGroup.쏘울.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      31.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Soul"
                                                                  ],
                                                                  "Code": [
                                                                      "028"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 289.0,
                                                                          "Max": 2511.0
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "준중형차"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "씨드",
                                                              "DisplayValue": "씨드",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.씨드.)))",
                                                              "Count": 0,
                                                              "Expression": "ModelGroup.씨드.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      32.0
                                                                  ],
                                                                  "EngName": [
                                                                      "CEED"
                                                                  ],
                                                                  "Code": [
                                                                      "067"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": null,
                                                                          "Max": null
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "준중형차"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "아벨라",
                                                              "DisplayValue": "아벨라",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.아벨라.)))",
                                                              "Count": 0,
                                                              "Expression": "ModelGroup.아벨라.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      33.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Avella"
                                                                  ],
                                                                  "Code": [
                                                                      "029"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": null,
                                                                          "Max": null
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "소형차"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "엔터프라이즈",
                                                              "DisplayValue": "엔터프라이즈",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.엔터프라이즈.)))",
                                                              "Count": 0,
                                                              "Expression": "ModelGroup.엔터프라이즈.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      34.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Enterprise"
                                                                  ],
                                                                  "Code": [
                                                                      "031"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": null,
                                                                          "Max": null
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "대형차"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "엘란",
                                                              "DisplayValue": "엘란",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.엘란.)))",
                                                              "Count": 0,
                                                              "Expression": "ModelGroup.엘란.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      35.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Elan"
                                                                  ],
                                                                  "Code": [
                                                                      "032"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": null,
                                                                          "Max": null
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "스포츠카"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "오피러스",
                                                              "DisplayValue": "오피러스",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.오피러스.)))",
                                                              "Count": 0,
                                                              "Expression": "ModelGroup.오피러스.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      36.0
                                                                  ],
                                                                  "EngName": [
                                                                      "OPIRUS"
                                                                  ],
                                                                  "Code": [
                                                                      "033"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 83.0,
                                                                          "Max": 749.0
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "대형차"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "옵티마",
                                                              "DisplayValue": "옵티마",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.옵티마.)))",
                                                              "Count": 0,
                                                              "Expression": "ModelGroup.옵티마.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      37.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Optima"
                                                                  ],
                                                                  "Code": [
                                                                      "034"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": null,
                                                                          "Max": null
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "중형차"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "카니발",
                                                              "DisplayValue": "카니발",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.카니발.)))",
                                                              "Count": 733,
                                                              "Expression": "ModelGroup.카니발.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      38.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Canival"
                                                                  ],
                                                                  "Code": [
                                                                      "036"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 85.0,
                                                                          "Max": 7671.0
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "RV"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "카렌스",
                                                              "DisplayValue": "카렌스",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.카렌스.)))",
                                                              "Count": 0,
                                                              "Expression": "ModelGroup.카렌스.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      39.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Carens"
                                                                  ],
                                                                  "Code": [
                                                                      "037"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 116.0,
                                                                          "Max": 1297.0
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "RV"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "카스타",
                                                              "DisplayValue": "카스타",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.카스타.)))",
                                                              "Count": 0,
                                                              "Expression": "ModelGroup.카스타.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      40.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Carstar"
                                                                  ],
                                                                  "Code": [
                                                                      "038"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": null,
                                                                          "Max": null
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "RV"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "캐피탈",
                                                              "DisplayValue": "캐피탈",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.캐피탈.)))",
                                                              "Count": 0,
                                                              "Expression": "ModelGroup.캐피탈.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      41.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Capital"
                                                                  ],
                                                                  "Code": [
                                                                      "039"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": null,
                                                                          "Max": null
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "준중형차"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "콩코드",
                                                              "DisplayValue": "콩코드",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.콩코드.)))",
                                                              "Count": 0,
                                                              "Expression": "ModelGroup.콩코드.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      42.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Concorde"
                                                                  ],
                                                                  "Code": [
                                                                      "042"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": null,
                                                                          "Max": null
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "중형차"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "크레도스",
                                                              "DisplayValue": "크레도스",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.크레도스.)))",
                                                              "Count": 0,
                                                              "Expression": "ModelGroup.크레도스.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      43.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Credos"
                                                                  ],
                                                                  "Code": [
                                                                      "043"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": null,
                                                                          "Max": null
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "중형차"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "타우너",
                                                              "DisplayValue": "타우너",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.타우너.)))",
                                                              "Count": 0,
                                                              "Expression": "ModelGroup.타우너.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      44.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Towner"
                                                                  ],
                                                                  "Code": [
                                                                      "044"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": null,
                                                                          "Max": null
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "경승합차"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "토픽",
                                                              "DisplayValue": "토픽",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.토픽.)))",
                                                              "Count": 0,
                                                              "Expression": "ModelGroup.토픽.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      45.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Topic"
                                                                  ],
                                                                  "Code": [
                                                                      "046"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": null,
                                                                          "Max": null
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "승합차"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "텔루라이드",
                                                              "DisplayValue": "텔루라이드",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.텔루라이드.)))",
                                                              "Count": 0,
                                                              "Expression": "ModelGroup.텔루라이드.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      46.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Telluride"
                                                                  ],
                                                                  "Code": [
                                                                      "068"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": null,
                                                                          "Max": null
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "SUV"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "파크타운",
                                                              "DisplayValue": "파크타운",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.파크타운.)))",
                                                              "Count": 0,
                                                              "Expression": "ModelGroup.파크타운.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      47.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Parktown"
                                                                  ],
                                                                  "Code": [
                                                                      "050"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": null,
                                                                          "Max": null
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "중형차"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "포르테",
                                                              "DisplayValue": "포르테",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.포르테.)))",
                                                              "Count": 0,
                                                              "Expression": "ModelGroup.포르테.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      48.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Porte"
                                                                  ],
                                                                  "Code": [
                                                                      "051"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 236.0,
                                                                          "Max": 432.0
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "스포츠카",
                                                                          "준중형차"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "포텐샤",
                                                              "DisplayValue": "포텐샤",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.포텐샤.)))",
                                                              "Count": 0,
                                                              "Expression": "ModelGroup.포텐샤.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      49.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Potentia"
                                                                  ],
                                                                  "Code": [
                                                                      "052"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": null,
                                                                          "Max": null
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "대형차"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "프라이드",
                                                              "DisplayValue": "프라이드",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.프라이드.)))",
                                                              "Count": 0,
                                                              "Expression": "ModelGroup.프라이드.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      50.0
                                                                  ],
                                                                  "EngName": [
                                                                      "pride"
                                                                  ],
                                                                  "Code": [
                                                                      "053"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 124.0,
                                                                          "Max": 767.0
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "소형차"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "프레지오",
                                                              "DisplayValue": "프레지오",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.프레지오.)))",
                                                              "Count": 0,
                                                              "Expression": "ModelGroup.프레지오.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      51.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Pregio"
                                                                  ],
                                                                  "Code": [
                                                                      "054"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": null,
                                                                          "Max": null
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "승합차"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "피아트132",
                                                              "DisplayValue": "피아트132",
                                                              "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.피아트132.)))",
                                                              "Count": 0,
                                                              "Expression": "ModelGroup.피아트132.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      52.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Fiat 132"
                                                                  ],
                                                                  "Code": [
                                                                      "056"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": null,
                                                                          "Max": null
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "소형차"
                                                                      ]
                                                                  ]
                                                              }
                                                          }
                                                      ],
                                                      "Metadata": {},
                                                      "Name": "ModelGroup",
                                                      "DisplayName": "모델그룹",
                                                      "Type": "Aspect"
                                                  }
                                              ],
                                              "BreadCrumbs": [
                                                  {
                                                      "Aspect": "ModelGroup",
                                                      "AspectDisplay": "모델그룹",
                                                      "Facet": "쏘렌토",
                                                      "FacetDisplay": "쏘렌토",
                                                      "Children": [
                                                          {
                                                              "Aspect": "Model",
                                                              "AspectDisplay": "모델",
                                                              "Facet": "더 뉴 쏘렌토",
                                                              "FacetDisplay": "더 뉴 쏘렌토",
                                                              "Children": [],
                                                              "Type": "FacetBreadCrumb",
                                                              "RemoveAction": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.쏘렌토.)))"
                                                          }
                                                      ],
                                                      "Type": "FacetBreadCrumb",
                                                      "RemoveAction": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.Manufacturer.기아.))"
                                                  }
                                              ]
                                          },
                                          "Expression": "(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.))",
                                          "Metadata": {
                                              "Ordering": [
                                                  20.0
                                              ],
                                              "EngName": [
                                                  "Kia"
                                              ],
                                              "Expression": [
                                                  "GreenType"
                                              ],
                                              "Code": [
                                                  "002"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": 83.0,
                                                      "Max": 7994.0
                                                  }
                                              ],
                                              "CarType": [
                                                  "Y"
                                              ],
                                              "Category": [
                                                  [
                                                      "RV",
                                                      "SUV",
                                                      "경승합차",
                                                      "경차",
                                                      "대형차",
                                                      "소형차",
                                                      "스포츠카",
                                                      "승합차",
                                                      "준중형차",
                                                      "중형차"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "쉐보레(GM대우)",
                                          "DisplayValue": "쉐보레(GM대우)",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.Manufacturer.쉐보레(GM대우_).))",
                                          "Count": 255,
                                          "Expression": "Manufacturer.쉐보레(GM대우_).",
                                          "Metadata": {
                                              "Ordering": [
                                                  30.0
                                              ],
                                              "EngName": [
                                                  "ChevroletGMDaewoo"
                                              ],
                                              "Expression": [
                                                  "GreenType"
                                              ],
                                              "Code": [
                                                  "003"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": 80.0,
                                                      "Max": 5109.0
                                                  }
                                              ],
                                              "CarType": [
                                                  "Y"
                                              ],
                                              "Category": [
                                                  [
                                                      "RV",
                                                      "SUV",
                                                      "경승합차",
                                                      "경차",
                                                      "대형차",
                                                      "소형차",
                                                      "스포츠카",
                                                      "준중형차",
                                                      "중형차",
                                                      "화물차"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "르노코리아(삼성)",
                                          "DisplayValue": "르노코리아(삼성)",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.Manufacturer.르노코리아(삼성_).))",
                                          "Count": 253,
                                          "Expression": "Manufacturer.르노코리아(삼성_).",
                                          "Metadata": {
                                              "Ordering": [
                                                  40.0
                                              ],
                                              "EngName": [
                                                  "Renault-KoreaSamsung"
                                              ],
                                              "Expression": [
                                                  "GreenType"
                                              ],
                                              "Code": [
                                                  "005"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": 92.0,
                                                      "Max": 3440.0
                                                  }
                                              ],
                                              "CarType": [
                                                  "Y"
                                              ],
                                              "Category": [
                                                  [
                                                      "RV",
                                                      "SUV",
                                                      "경차",
                                                      "대형차",
                                                      "소형차",
                                                      "승합차",
                                                      "준중형차",
                                                      "중형차",
                                                      "화물차"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "KG모빌리티(쌍용)",
                                          "DisplayValue": "KG모빌리티(쌍용)",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.Manufacturer.KG모빌리티(쌍용_).))",
                                          "Count": 328,
                                          "Expression": "Manufacturer.KG모빌리티(쌍용_).",
                                          "Metadata": {
                                              "Ordering": [
                                                  50.0
                                              ],
                                              "EngName": [
                                                  "KG_Mobility_Ssangyong"
                                              ],
                                              "Expression": [
                                                  "GreenType"
                                              ],
                                              "Code": [
                                                  "004"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": 80.0,
                                                      "Max": 4935.0
                                                  }
                                              ],
                                              "CarType": [
                                                  "Y"
                                              ],
                                              "Category": [
                                                  [
                                                      "RV",
                                                      "SUV",
                                                      "대형차",
                                                      "스포츠카",
                                                      "승합차",
                                                      "화물차"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "기타 제조사",
                                          "DisplayValue": "기타 제조사",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.Manufacturer.기타 제조사.))",
                                          "Count": 0,
                                          "Expression": "Manufacturer.기타 제조사.",
                                          "Metadata": {
                                              "Ordering": [
                                                  100.0
                                              ],
                                              "EngName": [
                                                  "Others"
                                              ],
                                              "Expression": [
                                                  "GreenType"
                                              ],
                                              "Code": [
                                                  "006"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": null,
                                                      "Max": null
                                                  }
                                              ],
                                              "CarType": [
                                                  "Y"
                                              ],
                                              "Category": [
                                                  [
                                                      "경차",
                                                      "기타",
                                                      "스포츠카"
                                                  ]
                                              ]
                                          }
                                      }
                                  ],
                                  "Metadata": {},
                                  "Name": "Manufacturer",
                                  "DisplayName": "제조사",
                                  "Type": "Aspect"
                              }
                          ],
                          "BreadCrumbs": [
                              {
                                  "Aspect": "Manufacturer",
                                  "AspectDisplay": "제조사",
                                  "Facet": "기아",
                                  "FacetDisplay": "기아",
                                  "Children": [
                                      {
                                          "Aspect": "ModelGroup",
                                          "AspectDisplay": "모델그룹",
                                          "Facet": "쏘렌토",
                                          "FacetDisplay": "쏘렌토",
                                          "Children": [
                                              {
                                                  "Aspect": "Model",
                                                  "AspectDisplay": "모델",
                                                  "Facet": "더 뉴 쏘렌토",
                                                  "FacetDisplay": "더 뉴 쏘렌토",
                                                  "Children": [],
                                                  "Type": "FacetBreadCrumb",
                                                  "RemoveAction": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.쏘렌토.)))"
                                              }
                                          ],
                                          "Type": "FacetBreadCrumb",
                                          "RemoveAction": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.Manufacturer.기아.))"
                                      }
                                  ],
                                  "Type": "FacetBreadCrumb",
                                  "RemoveAction": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.CarType.Y.)"
                              }
                          ]
                      },
                      "Expression": "(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "A",
                      "DisplayValue": "A",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(Or.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.CarType.A.))",
                      "Count": 14211,
                      "Expression": "CarType.A.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "N",
                      "DisplayValue": "N",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(Or.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.CarType.N.))",
                      "Count": 5897,
                      "Expression": "CarType.N.",
                      "Metadata": {}
                  }
              ],
              "Metadata": {},
              "Name": "CarType",
              "DisplayName": "국산여부",
              "Type": "Aspect"
          },
          {
              "IsSelected": true,
              "PlaceholderExpression": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record.)",
              "Facets": [
                  {
                      "IsSelected": true,
                      "Value": "경기",
                      "DisplayValue": "경기",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.OfficeCityState.서울.)",
                      "Count": 173,
                      "Refinements": {
                          "Nodes": [
                              {
                                  "IsSelected": false,
                                  "PlaceholderExpression": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.(<!>))))",
                                  "MultiSelectMode": "None",
                                  "RemoveAction": "",
                                  "Facets": [
                                      {
                                          "IsSelected": false,
                                          "Value": "안산시",
                                          "DisplayValue": "안산시",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet.안산시.)))",
                                          "Count": 1,
                                          "Expression": "OfficeStreet.안산시.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "고양시 일산동구",
                                          "DisplayValue": "고양시 일산동구",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet.고양시 일산동구.)))",
                                          "Count": 2,
                                          "Expression": "OfficeStreet.고양시 일산동구.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "안성시",
                                          "DisplayValue": "안성시",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet.안성시.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.안성시.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "수원시 영통구",
                                          "DisplayValue": "수원시 영통구",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet.수원시 영통구.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.수원시 영통구.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "남양주시",
                                          "DisplayValue": "남양주시",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet.남양주시.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.남양주시.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "파주시",
                                          "DisplayValue": "파주시",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet.파주시.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.파주시.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "용인시 수지구",
                                          "DisplayValue": "용인시 수지구",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet.용인시 수지구.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.용인시 수지구.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "화성시",
                                          "DisplayValue": "화성시",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet.화성시.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.화성시.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "가평군",
                                          "DisplayValue": "가평군",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet.가평군.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.가평군.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "성남시",
                                          "DisplayValue": "성남시",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet.성남시.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.성남시.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "수원시",
                                          "DisplayValue": "수원시",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet.수원시.)))",
                                          "Count": 11,
                                          "Expression": "OfficeStreet.수원시.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "성남시 수정구",
                                          "DisplayValue": "성남시 수정구",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet.성남시 수정구.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.성남시 수정구.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "의정부시",
                                          "DisplayValue": "의정부시",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet.의정부시.)))",
                                          "Count": 4,
                                          "Expression": "OfficeStreet.의정부시.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "과천시",
                                          "DisplayValue": "과천시",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet.과천시.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.과천시.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "고양시 일산서구",
                                          "DisplayValue": "고양시 일산서구",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet.고양시 일산서구.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.고양시 일산서구.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "광명시",
                                          "DisplayValue": "광명시",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet.광명시.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.광명시.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": " 안산시",
                                          "DisplayValue": " 안산시",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet. 안산시.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet. 안산시.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "안산시 단원구",
                                          "DisplayValue": "안산시 단원구",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet.안산시 단원구.)))",
                                          "Count": 23,
                                          "Expression": "OfficeStreet.안산시 단원구.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "양평군",
                                          "DisplayValue": "양평군",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet.양평군.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.양평군.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "광주시",
                                          "DisplayValue": "광주시",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet.광주시.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.광주시.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "용인시 처인구",
                                          "DisplayValue": "용인시 처인구",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet.용인시 처인구.)))",
                                          "Count": 1,
                                          "Expression": "OfficeStreet.용인시 처인구.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "성남시 중원구",
                                          "DisplayValue": "성남시 중원구",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet.성남시 중원구.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.성남시 중원구.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "부천시",
                                          "DisplayValue": "부천시",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet.부천시.)))",
                                          "Count": 18,
                                          "Expression": "OfficeStreet.부천시.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "오산시",
                                          "DisplayValue": "오산시",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet.오산시.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.오산시.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "양주시",
                                          "DisplayValue": "양주시",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet.양주시.)))",
                                          "Count": 1,
                                          "Expression": "OfficeStreet.양주시.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "수원시 팔달구",
                                          "DisplayValue": "수원시 팔달구",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet.수원시 팔달구.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.수원시 팔달구.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "시흥시",
                                          "DisplayValue": "시흥시",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet.시흥시.)))",
                                          "Count": 4,
                                          "Expression": "OfficeStreet.시흥시.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "하남시",
                                          "DisplayValue": "하남시",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet.하남시.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.하남시.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "용인시",
                                          "DisplayValue": "용인시",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet.용인시.)))",
                                          "Count": 7,
                                          "Expression": "OfficeStreet.용인시.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "구리시",
                                          "DisplayValue": "구리시",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet.구리시.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.구리시.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "김포시",
                                          "DisplayValue": "김포시",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet.김포시.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.김포시.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "이천시",
                                          "DisplayValue": "이천시",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet.이천시.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.이천시.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "안양시 만안구",
                                          "DisplayValue": "안양시 만안구",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet.안양시 만안구.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.안양시 만안구.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "평택시",
                                          "DisplayValue": "평택시",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet.평택시.)))",
                                          "Count": 2,
                                          "Expression": "OfficeStreet.평택시.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "안양시 동안구",
                                          "DisplayValue": "안양시 동안구",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet.안양시 동안구.)))",
                                          "Count": 1,
                                          "Expression": "OfficeStreet.안양시 동안구.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": " 평택시",
                                          "DisplayValue": " 평택시",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet. 평택시.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet. 평택시.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "수원시 권선구",
                                          "DisplayValue": "수원시 권선구",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet.수원시 권선구.)))",
                                          "Count": 93,
                                          "Expression": "OfficeStreet.수원시 권선구.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "고양시",
                                          "DisplayValue": "고양시",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet.고양시.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.고양시.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "의왕시",
                                          "DisplayValue": "의왕시",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet.의왕시.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.의왕시.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "군포시",
                                          "DisplayValue": "군포시",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet.군포시.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.군포시.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "안산시 상록구",
                                          "DisplayValue": "안산시 상록구",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet.안산시 상록구.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.안산시 상록구.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "용인시 기흥구",
                                          "DisplayValue": "용인시 기흥구",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet.용인시 기흥구.)))",
                                          "Count": 4,
                                          "Expression": "OfficeStreet.용인시 기흥구.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "포천시",
                                          "DisplayValue": "포천시",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet.포천시.)))",
                                          "Count": 1,
                                          "Expression": "OfficeStreet.포천시.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "수원시 장안구",
                                          "DisplayValue": "수원시 장안구",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet.수원시 장안구.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.수원시 장안구.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "동두천시",
                                          "DisplayValue": "동두천시",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet.동두천시.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.동두천시.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "연천군",
                                          "DisplayValue": "연천군",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet.연천군.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.연천군.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "성남시 분당구",
                                          "DisplayValue": "성남시 분당구",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet.성남시 분당구.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.성남시 분당구.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "고양시 덕양구",
                                          "DisplayValue": "고양시 덕양구",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet.고양시 덕양구.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.고양시 덕양구.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "여주시",
                                          "DisplayValue": "여주시",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet.여주시.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.여주시.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "안양시",
                                          "DisplayValue": "안양시",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.(C.OfficeCityState.경기._.OfficeStreet.안양시.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.안양시.",
                                          "Metadata": {}
                                      }
                                  ],
                                  "Metadata": {},
                                  "Name": "OfficeStreet",
                                  "DisplayName": "지역(시군구)",
                                  "Type": "Aspect"
                              }
                          ],
                          "BreadCrumbs": []
                      },
                      "Expression": "OfficeCityState.경기.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "대구",
                      "DisplayValue": "대구",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.OfficeCityState.경기._.OfficeCityState.대구.))",
                      "Count": 76,
                      "Expression": "OfficeCityState.대구.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "광주",
                      "DisplayValue": "광주",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.OfficeCityState.경기._.OfficeCityState.광주.))",
                      "Count": 33,
                      "Expression": "OfficeCityState.광주.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": true,
                      "Value": "서울",
                      "DisplayValue": "서울",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.OfficeCityState.경기.)",
                      "Count": 32,
                      "Refinements": {
                          "Nodes": [
                              {
                                  "IsSelected": false,
                                  "PlaceholderExpression": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.경기._.(C.OfficeCityState.서울._.(<!>))))",
                                  "MultiSelectMode": "None",
                                  "RemoveAction": "",
                                  "Facets": [
                                      {
                                          "IsSelected": false,
                                          "Value": "강서구",
                                          "DisplayValue": "강서구",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.경기._.(C.OfficeCityState.서울._.OfficeStreet.강서구.)))",
                                          "Count": 25,
                                          "Expression": "OfficeStreet.강서구.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "관악구",
                                          "DisplayValue": "관악구",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.경기._.(C.OfficeCityState.서울._.OfficeStreet.관악구.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.관악구.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "용산구",
                                          "DisplayValue": "용산구",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.경기._.(C.OfficeCityState.서울._.OfficeStreet.용산구.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.용산구.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "강남구",
                                          "DisplayValue": "강남구",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.경기._.(C.OfficeCityState.서울._.OfficeStreet.강남구.)))",
                                          "Count": 1,
                                          "Expression": "OfficeStreet.강남구.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "동대문구",
                                          "DisplayValue": "동대문구",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.경기._.(C.OfficeCityState.서울._.OfficeStreet.동대문구.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.동대문구.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "성북구",
                                          "DisplayValue": "성북구",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.경기._.(C.OfficeCityState.서울._.OfficeStreet.성북구.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.성북구.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "중구",
                                          "DisplayValue": "중구",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.경기._.(C.OfficeCityState.서울._.OfficeStreet.중구.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.중구.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "양천구",
                                          "DisplayValue": "양천구",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.경기._.(C.OfficeCityState.서울._.OfficeStreet.양천구.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.양천구.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "  송파구",
                                          "DisplayValue": "  송파구",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.경기._.(C.OfficeCityState.서울._.OfficeStreet.  송파구.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.  송파구.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "강북구",
                                          "DisplayValue": "강북구",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.경기._.(C.OfficeCityState.서울._.OfficeStreet.강북구.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.강북구.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "중랑구",
                                          "DisplayValue": "중랑구",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.경기._.(C.OfficeCityState.서울._.OfficeStreet.중랑구.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.중랑구.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "서초구",
                                          "DisplayValue": "서초구",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.경기._.(C.OfficeCityState.서울._.OfficeStreet.서초구.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.서초구.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "종로구",
                                          "DisplayValue": "종로구",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.경기._.(C.OfficeCityState.서울._.OfficeStreet.종로구.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.종로구.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "성동구",
                                          "DisplayValue": "성동구",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.경기._.(C.OfficeCityState.서울._.OfficeStreet.성동구.)))",
                                          "Count": 6,
                                          "Expression": "OfficeStreet.성동구.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "강동구",
                                          "DisplayValue": "강동구",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.경기._.(C.OfficeCityState.서울._.OfficeStreet.강동구.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.강동구.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": " 서대문구",
                                          "DisplayValue": " 서대문구",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.경기._.(C.OfficeCityState.서울._.OfficeStreet. 서대문구.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet. 서대문구.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "동작구",
                                          "DisplayValue": "동작구",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.경기._.(C.OfficeCityState.서울._.OfficeStreet.동작구.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.동작구.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "도봉구",
                                          "DisplayValue": "도봉구",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.경기._.(C.OfficeCityState.서울._.OfficeStreet.도봉구.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.도봉구.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "송파구",
                                          "DisplayValue": "송파구",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.경기._.(C.OfficeCityState.서울._.OfficeStreet.송파구.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.송파구.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "서대문구",
                                          "DisplayValue": "서대문구",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.경기._.(C.OfficeCityState.서울._.OfficeStreet.서대문구.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.서대문구.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "은평구",
                                          "DisplayValue": "은평구",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.경기._.(C.OfficeCityState.서울._.OfficeStreet.은평구.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.은평구.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "금천구",
                                          "DisplayValue": "금천구",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.경기._.(C.OfficeCityState.서울._.OfficeStreet.금천구.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.금천구.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "영등포구",
                                          "DisplayValue": "영등포구",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.경기._.(C.OfficeCityState.서울._.OfficeStreet.영등포구.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.영등포구.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "노원구",
                                          "DisplayValue": "노원구",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.경기._.(C.OfficeCityState.서울._.OfficeStreet.노원구.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.노원구.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "마포구",
                                          "DisplayValue": "마포구",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.경기._.(C.OfficeCityState.서울._.OfficeStreet.마포구.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.마포구.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "광진구",
                                          "DisplayValue": "광진구",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.경기._.(C.OfficeCityState.서울._.OfficeStreet.광진구.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.광진구.",
                                          "Metadata": {}
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "구로구",
                                          "DisplayValue": "구로구",
                                          "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.경기._.(C.OfficeCityState.서울._.OfficeStreet.구로구.)))",
                                          "Count": 0,
                                          "Expression": "OfficeStreet.구로구.",
                                          "Metadata": {}
                                      }
                                  ],
                                  "Metadata": {},
                                  "Name": "OfficeStreet",
                                  "DisplayName": "지역(시군구)",
                                  "Type": "Aspect"
                              }
                          ],
                          "BreadCrumbs": []
                      },
                      "Expression": "OfficeCityState.서울.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "인천",
                      "DisplayValue": "인천",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.OfficeCityState.경기._.OfficeCityState.인천.))",
                      "Count": 25,
                      "Expression": "OfficeCityState.인천.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "부산",
                      "DisplayValue": "부산",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.OfficeCityState.경기._.OfficeCityState.부산.))",
                      "Count": 22,
                      "Expression": "OfficeCityState.부산.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "경남",
                      "DisplayValue": "경남",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.OfficeCityState.경기._.OfficeCityState.경남.))",
                      "Count": 21,
                      "Expression": "OfficeCityState.경남.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "대전",
                      "DisplayValue": "대전",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.OfficeCityState.경기._.OfficeCityState.대전.))",
                      "Count": 13,
                      "Expression": "OfficeCityState.대전.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "충남",
                      "DisplayValue": "충남",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.OfficeCityState.경기._.OfficeCityState.충남.))",
                      "Count": 13,
                      "Expression": "OfficeCityState.충남.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "전북",
                      "DisplayValue": "전북",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.OfficeCityState.경기._.OfficeCityState.전북.))",
                      "Count": 9,
                      "Expression": "OfficeCityState.전북.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "울산",
                      "DisplayValue": "울산",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.OfficeCityState.경기._.OfficeCityState.울산.))",
                      "Count": 8,
                      "Expression": "OfficeCityState.울산.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "경북",
                      "DisplayValue": "경북",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.OfficeCityState.경기._.OfficeCityState.경북.))",
                      "Count": 6,
                      "Expression": "OfficeCityState.경북.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "충북",
                      "DisplayValue": "충북",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.OfficeCityState.경기._.OfficeCityState.충북.))",
                      "Count": 5,
                      "Expression": "OfficeCityState.충북.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "제주",
                      "DisplayValue": "제주",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.OfficeCityState.경기._.OfficeCityState.제주.))",
                      "Count": 3,
                      "Expression": "OfficeCityState.제주.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "강원",
                      "DisplayValue": "강원",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.OfficeCityState.경기._.OfficeCityState.강원.))",
                      "Count": 1,
                      "Expression": "OfficeCityState.강원.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "null",
                      "DisplayValue": "null",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.OfficeCityState.경기._.OfficeCityState.null.))",
                      "Count": 0,
                      "Expression": "OfficeCityState.null.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "세종",
                      "DisplayValue": "세종",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.OfficeCityState.경기._.OfficeCityState.세종.))",
                      "Count": 0,
                      "Expression": "OfficeCityState.세종.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "전남",
                      "DisplayValue": "전남",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.(Or.OfficeCityState.서울._.OfficeCityState.경기._.OfficeCityState.전남.))",
                      "Count": 0,
                      "Expression": "OfficeCityState.전남.",
                      "Metadata": {}
                  }
              ],
              "Metadata": {},
              "Name": "OfficeCityState",
              "DisplayName": "지역(시도)",
              "Type": "Aspect"
          },
          {
              "IsSelected": true,
              "PlaceholderExpression": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.(<!>))",
              "MultiSelectMode": "And",
              "RemoveAction": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.))",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "InspectionDirect",
                      "DisplayValue": "엔카(직영) 성능점검",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Condition.InspectionDirect.)",
                      "Count": 4,
                      "Expression": "Condition.InspectionDirect.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": true,
                      "Value": "Inspection",
                      "DisplayValue": "성능기록부",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Record.)",
                      "Count": 205,
                      "Expression": "Condition.Inspection.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": true,
                      "Value": "Record",
                      "DisplayValue": "보험이력",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection.)",
                      "Count": 205,
                      "Expression": "Condition.Record.",
                      "Metadata": {}
                  }
              ],
              "Metadata": {},
              "Name": "Condition",
              "DisplayName": "성능/보험 공개",
              "Type": "Aspect"
          },
          {
              "IsSelected": false,
              "PlaceholderExpression": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "경차",
                      "DisplayValue": "경차",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Category.경차.)",
                      "Count": 0,
                      "Expression": "Category.경차.",
                      "Metadata": {
                          "Code": [
                              "001"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "소형차",
                      "DisplayValue": "소형차",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Category.소형차.)",
                      "Count": 0,
                      "Expression": "Category.소형차.",
                      "Metadata": {
                          "Code": [
                              "002"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "준중형차",
                      "DisplayValue": "준중형차",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Category.준중형차.)",
                      "Count": 0,
                      "Expression": "Category.준중형차.",
                      "Metadata": {
                          "Code": [
                              "003"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "중형차",
                      "DisplayValue": "중형차",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Category.중형차.)",
                      "Count": 0,
                      "Expression": "Category.중형차.",
                      "Metadata": {
                          "Code": [
                              "004"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "대형차",
                      "DisplayValue": "대형차",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Category.대형차.)",
                      "Count": 0,
                      "Expression": "Category.대형차.",
                      "Metadata": {
                          "Code": [
                              "005"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "스포츠카",
                      "DisplayValue": "스포츠카",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Category.스포츠카.)",
                      "Count": 0,
                      "Expression": "Category.스포츠카.",
                      "Metadata": {
                          "Code": [
                              "006"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "SUV",
                      "DisplayValue": "SUV",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Category.SUV.)",
                      "Count": 205,
                      "Expression": "Category.SUV.",
                      "Metadata": {
                          "Code": [
                              "007"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "RV",
                      "DisplayValue": "RV",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Category.RV.)",
                      "Count": 0,
                      "Expression": "Category.RV.",
                      "Metadata": {
                          "Code": [
                              "008"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "경승합차",
                      "DisplayValue": "경승합차",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Category.경승합차.)",
                      "Count": 0,
                      "Expression": "Category.경승합차.",
                      "Metadata": {
                          "Code": [
                              "009"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "승합차",
                      "DisplayValue": "승합차",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Category.승합차.)",
                      "Count": 0,
                      "Expression": "Category.승합차.",
                      "Metadata": {
                          "Code": [
                              "010"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "화물차",
                      "DisplayValue": "화물차",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Category.화물차.)",
                      "Count": 0,
                      "Expression": "Category.화물차.",
                      "Metadata": {
                          "Code": [
                              "011"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "기타",
                      "DisplayValue": "기타",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Category.기타.)",
                      "Count": 0,
                      "Expression": "Category.기타.",
                      "Metadata": {
                          "Code": [
                              "099"
                          ]
                      }
                  }
              ],
              "Metadata": {},
              "Name": "Category",
              "DisplayName": "차종",
              "Type": "Aspect"
          },
          {
              "IsSelected": false,
              "PlaceholderExpression": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(<!>))",
              "MultiSelectMode": "None",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "경차",
                      "DisplayValue": "경차",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.CategoryPath.경차.)",
                      "Count": 0,
                      "Expression": "CategoryPath.경차.",
                      "Metadata": {
                          "Code": [
                              "001"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "소형차",
                      "DisplayValue": "소형차",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.CategoryPath.소형차.)",
                      "Count": 0,
                      "Expression": "CategoryPath.소형차.",
                      "Metadata": {
                          "Code": [
                              "002"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "준중형차",
                      "DisplayValue": "준중형차",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.CategoryPath.준중형차.)",
                      "Count": 0,
                      "Expression": "CategoryPath.준중형차.",
                      "Metadata": {
                          "Code": [
                              "003"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "중형차",
                      "DisplayValue": "중형차",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.CategoryPath.중형차.)",
                      "Count": 0,
                      "Expression": "CategoryPath.중형차.",
                      "Metadata": {
                          "Code": [
                              "004"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "대형차",
                      "DisplayValue": "대형차",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.CategoryPath.대형차.)",
                      "Count": 0,
                      "Expression": "CategoryPath.대형차.",
                      "Metadata": {
                          "Code": [
                              "005"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "스포츠카",
                      "DisplayValue": "스포츠카",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.CategoryPath.스포츠카.)",
                      "Count": 0,
                      "Expression": "CategoryPath.스포츠카.",
                      "Metadata": {
                          "Code": [
                              "006"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "SUV",
                      "DisplayValue": "SUV",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.CategoryPath.SUV.)",
                      "Count": 205,
                      "Expression": "CategoryPath.SUV.",
                      "Metadata": {
                          "Code": [
                              "007"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "RV",
                      "DisplayValue": "RV",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.CategoryPath.RV.)",
                      "Count": 0,
                      "Expression": "CategoryPath.RV.",
                      "Metadata": {
                          "Code": [
                              "008"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "경승합차",
                      "DisplayValue": "경승합차",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.CategoryPath.경승합차.)",
                      "Count": 0,
                      "Expression": "CategoryPath.경승합차.",
                      "Metadata": {
                          "Code": [
                              "009"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "승합차",
                      "DisplayValue": "승합차",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.CategoryPath.승합차.)",
                      "Count": 0,
                      "Expression": "CategoryPath.승합차.",
                      "Metadata": {
                          "Code": [
                              "010"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "화물차",
                      "DisplayValue": "화물차",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.CategoryPath.화물차.)",
                      "Count": 0,
                      "Expression": "CategoryPath.화물차.",
                      "Metadata": {
                          "Code": [
                              "011"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "기타",
                      "DisplayValue": "기타",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.CategoryPath.기타.)",
                      "Count": 0,
                      "Expression": "CategoryPath.기타.",
                      "Metadata": {
                          "Code": [
                              "099"
                          ]
                      }
                  }
              ],
              "Metadata": {},
              "Name": "CategoryPath",
              "DisplayName": "차종",
              "Type": "Aspect"
          },
          {
              "IsSelected": false,
              "PlaceholderExpression": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "N",
                      "DisplayValue": "N",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.GreenType.N.)",
                      "Count": 205,
                      "Expression": "GreenType.N.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "Y",
                      "DisplayValue": "Y",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.GreenType.Y.)",
                      "Count": 0,
                      "Expression": "GreenType.Y.",
                      "Metadata": {}
                  }
              ],
              "Metadata": {},
              "Name": "GreenType",
              "DisplayName": "친환경차여부",
              "Type": "Aspect"
          },
          {
              "IsSelected": false,
              "PlaceholderExpression": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(<!>))",
              "MultiSelectMode": "None",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "A",
                      "DisplayValue": "A",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.ModelCarType.A.)",
                      "Count": 205,
                      "Expression": "ModelCarType.A.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "Y",
                      "DisplayValue": "Y",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.ModelCarType.Y.)",
                      "Count": 205,
                      "Expression": "ModelCarType.Y.",
                      "Metadata": {}
                  }
              ],
              "Metadata": {},
              "Name": "ModelCarType",
              "DisplayName": "국산여부",
              "Type": "Aspect"
          },
          {
              "IsSelected": false,
              "PlaceholderExpression": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "Green",
                      "DisplayValue": "Green",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.AttributeType.Green.)",
                      "Count": 0,
                      "Expression": "AttributeType.Green.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "Lease",
                      "DisplayValue": "Lease",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.AttributeType.Lease.)",
                      "Count": 0,
                      "Expression": "AttributeType.Lease.",
                      "Metadata": {}
                  }
              ],
              "Metadata": {},
              "Name": "AttributeType",
              "DisplayName": "속성타입",
              "Type": "Aspect"
          },
          {
              "IsSelected": false,
              "PlaceholderExpression": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "일반",
                      "DisplayValue": "일반",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.SellType.일반.)",
                      "Count": 205,
                      "Expression": "SellType.일반.",
                      "Metadata": {
                          "Code": [
                              "1"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "리스승계",
                      "DisplayValue": "리스승계",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.SellType.리스승계.)",
                      "Count": 0,
                      "Expression": "SellType.리스승계.",
                      "Metadata": {
                          "Code": [
                              "2"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "렌트",
                      "DisplayValue": "렌트",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.SellType.렌트.)",
                      "Count": 0,
                      "Expression": "SellType.렌트.",
                      "Metadata": {
                          "Code": [
                              "3"
                          ]
                      }
                  }
              ],
              "Metadata": {},
              "Name": "SellType",
              "DisplayName": "판매방식",
              "Type": "Aspect"
          },
          {
              "IsSelected": false,
              "PlaceholderExpression": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "운용리스",
                      "DisplayValue": "운용리스",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.LeaseType.운용리스.)",
                      "Count": 0,
                      "Expression": "LeaseType.운용리스.",
                      "Metadata": {
                          "Code": [
                              "21"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "금융리스",
                      "DisplayValue": "금융리스",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.LeaseType.금융리스.)",
                      "Count": 0,
                      "Expression": "LeaseType.금융리스.",
                      "Metadata": {
                          "Code": [
                              "22"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "렌트승계",
                      "DisplayValue": "렌트승계",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.LeaseType.렌트승계.)",
                      "Count": 0,
                      "Expression": "LeaseType.렌트승계.",
                      "Metadata": {
                          "Code": [
                              "31"
                          ]
                      }
                  }
              ],
              "Metadata": {},
              "Name": "LeaseType",
              "DisplayName": "리스렌트타입",
              "Type": "Aspect"
          },
          {
              "IsSelected": false,
              "PlaceholderExpression": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "승계지원금 포함",
                      "DisplayValue": "승계지원금 포함",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.LeaseBenefits.승계지원금 포함.)",
                      "Count": 0,
                      "Expression": "LeaseBenefits.승계지원금 포함.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "자동차세 포함",
                      "DisplayValue": "자동차세 포함",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.LeaseBenefits.자동차세 포함.)",
                      "Count": 0,
                      "Expression": "LeaseBenefits.자동차세 포함.",
                      "Metadata": {}
                  }
              ],
              "Metadata": {},
              "Name": "LeaseBenefits",
              "DisplayName": "혜택구분",
              "Type": "Aspect"
          },
          {
              "IsSelected": false,
              "PlaceholderExpression": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "오토",
                      "DisplayValue": "오토",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Transmission.오토.)",
                      "Count": 205,
                      "Expression": "Transmission.오토.",
                      "Metadata": {
                          "Code": [
                              "001"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "수동",
                      "DisplayValue": "수동",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Transmission.수동.)",
                      "Count": 0,
                      "Expression": "Transmission.수동.",
                      "Metadata": {
                          "Code": [
                              "002"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "세미오토",
                      "DisplayValue": "세미오토",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Transmission.세미오토.)",
                      "Count": 0,
                      "Expression": "Transmission.세미오토.",
                      "Metadata": {
                          "Code": [
                              "003"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "CVT",
                      "DisplayValue": "CVT",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Transmission.CVT.)",
                      "Count": 0,
                      "Expression": "Transmission.CVT.",
                      "Metadata": {
                          "Code": [
                              "004"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "기타",
                      "DisplayValue": "기타",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Transmission.기타.)",
                      "Count": 0,
                      "Expression": "Transmission.기타.",
                      "Metadata": {
                          "Code": [
                              "999"
                          ]
                      }
                  }
              ],
              "Metadata": {},
              "Name": "Transmission",
              "DisplayName": "변속기",
              "Type": "Aspect"
          },
          {
              "IsSelected": false,
              "PlaceholderExpression": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "q1416",
                      "DisplayValue": "1,400 ~ 1,600만원 미만",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Price.q1416.)",
                      "Count": 2,
                      "Expression": "Price.q1416.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "q1618",
                      "DisplayValue": "1,600 ~ 1,800만원 미만",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Price.q1618.)",
                      "Count": 7,
                      "Expression": "Price.q1618.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "q1820",
                      "DisplayValue": "1,800 ~ 2,000만원 미만",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Price.q1820.)",
                      "Count": 30,
                      "Expression": "Price.q1820.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "q2022",
                      "DisplayValue": "2,000 ~ 2,200만원 미만",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Price.q2022.)",
                      "Count": 38,
                      "Expression": "Price.q2022.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "q2224",
                      "DisplayValue": "2,200 ~ 2,400만원 미만",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Price.q2224.)",
                      "Count": 44,
                      "Expression": "Price.q2224.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "q2426",
                      "DisplayValue": "2,400 ~ 2,600만원 미만",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Price.q2426.)",
                      "Count": 29,
                      "Expression": "Price.q2426.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "q2628",
                      "DisplayValue": "2,600 ~ 2,800만원 미만",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Price.q2628.)",
                      "Count": 29,
                      "Expression": "Price.q2628.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "q2830",
                      "DisplayValue": "2,800 ~ 3,000만원 미만",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Price.q2830.)",
                      "Count": 15,
                      "Expression": "Price.q2830.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "q3032",
                      "DisplayValue": "3,000 ~ 3,200만원 미만",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Price.q3032.)",
                      "Count": 8,
                      "Expression": "Price.q3032.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "q3234",
                      "DisplayValue": "3,200 ~ 3,400만원 미만",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Price.q3234.)",
                      "Count": 3,
                      "Expression": "Price.q3234.",
                      "Metadata": {}
                  }
              ],
              "Metadata": {},
              "Name": "Price",
              "DisplayName": "가격",
              "Type": "Aspect"
          },
          {
              "IsSelected": false,
              "PlaceholderExpression": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "가솔린",
                      "DisplayValue": "가솔린",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.FuelType.가솔린.)",
                      "Count": 26,
                      "Expression": "FuelType.가솔린.",
                      "Metadata": {
                          "Expression": [
                              "GreenType"
                          ],
                          "Code": [
                              "001"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "디젤",
                      "DisplayValue": "디젤",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.FuelType.디젤.)",
                      "Count": 179,
                      "Expression": "FuelType.디젤.",
                      "Metadata": {
                          "Expression": [
                              "GreenType"
                          ],
                          "Code": [
                              "002"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "LPG(일반인 구입)",
                      "DisplayValue": "LPG(일반인 구입)",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.FuelType.LPG(일반인 구입_).)",
                      "Count": 0,
                      "Expression": "FuelType.LPG(일반인 구입_).",
                      "Metadata": {
                          "Expression": [
                              "GreenType"
                          ],
                          "Code": [
                              "003"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "가솔린+전기",
                      "DisplayValue": "가솔린+전기",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.FuelType.가솔린+전기.)",
                      "Count": 0,
                      "Expression": "FuelType.가솔린+전기.",
                      "Metadata": {
                          "Expression": [
                              "GreenType"
                          ],
                          "Code": [
                              "006"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "디젤+전기",
                      "DisplayValue": "디젤+전기",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.FuelType.디젤+전기.)",
                      "Count": 0,
                      "Expression": "FuelType.디젤+전기.",
                      "Metadata": {
                          "Expression": [
                              "GreenType"
                          ],
                          "Code": [
                              "007"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "LPG+전기",
                      "DisplayValue": "LPG+전기",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.FuelType.LPG+전기.)",
                      "Count": 0,
                      "Expression": "FuelType.LPG+전기.",
                      "Metadata": {
                          "Expression": [
                              "GreenType"
                          ],
                          "Code": [
                              "008"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "가솔린+LPG",
                      "DisplayValue": "가솔린+LPG",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.FuelType.가솔린+LPG.)",
                      "Count": 0,
                      "Expression": "FuelType.가솔린+LPG.",
                      "Metadata": {
                          "Expression": [
                              "GreenType"
                          ],
                          "Code": [
                              "005"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "가솔린+CNG",
                      "DisplayValue": "가솔린+CNG",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.FuelType.가솔린+CNG.)",
                      "Count": 0,
                      "Expression": "FuelType.가솔린+CNG.",
                      "Metadata": {
                          "Code": [
                              "010"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "전기",
                      "DisplayValue": "전기",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.FuelType.전기.)",
                      "Count": 0,
                      "Expression": "FuelType.전기.",
                      "Metadata": {
                          "Expression": [
                              "GreenType"
                          ],
                          "Code": [
                              "009"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "수소",
                      "DisplayValue": "수소",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.FuelType.수소.)",
                      "Count": 0,
                      "Expression": "FuelType.수소.",
                      "Metadata": {
                          "Expression": [
                              "GreenType"
                          ],
                          "Code": [
                              "013"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "CNG",
                      "DisplayValue": "CNG",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.FuelType.CNG.)",
                      "Count": 0,
                      "Expression": "FuelType.CNG.",
                      "Metadata": {
                          "Code": [
                              "012"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "기타",
                      "DisplayValue": "기타",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.FuelType.기타.)",
                      "Count": 0,
                      "Expression": "FuelType.기타.",
                      "Metadata": {
                          "Code": [
                              "999"
                          ]
                      }
                  }
              ],
              "Metadata": {},
              "Name": "FuelType",
              "DisplayName": "연료",
              "Type": "Aspect"
          },
          {
              "IsSelected": false,
              "PlaceholderExpression": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "Meetgo",
                      "DisplayValue": "믿고",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Trust.Meetgo.)",
                      "Count": 4,
                      "Expression": "Trust.Meetgo.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "HomeService",
                      "DisplayValue": "엔카홈서비스",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Trust.HomeService.)",
                      "Count": 44,
                      "Expression": "Trust.HomeService.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "Warranty",
                      "DisplayValue": "엔카진단",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Trust.Warranty.)",
                      "Count": 84,
                      "Expression": "Trust.Warranty.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "ExtendWarranty",
                      "DisplayValue": "엔카보증",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Trust.ExtendWarranty.)",
                      "Count": 52,
                      "Expression": "Trust.ExtendWarranty.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "ExtendWarrantyImported",
                      "DisplayValue": "엔카보증(수입차)",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Trust.ExtendWarrantyImported.)",
                      "Count": 0,
                      "Expression": "Trust.ExtendWarrantyImported.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "Compensate",
                      "DisplayValue": "헛걸음보상",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Trust.Compensate.)",
                      "Count": 5,
                      "Expression": "Trust.Compensate.",
                      "Metadata": {}
                  }
              ],
              "Metadata": {},
              "Name": "Trust",
              "DisplayName": "엔카 서비스",
              "Type": "Aspect"
          },
          {
              "IsSelected": false,
              "PlaceholderExpression": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "A",
                      "DisplayValue": "개인",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Separation.A.)",
                      "Count": 0,
                      "Expression": "Separation.A.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "B",
                      "DisplayValue": "딜러",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Separation.B.)",
                      "Count": 205,
                      "Expression": "Separation.B.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "F",
                      "DisplayValue": "브랜드인증",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Separation.F.)",
                      "Count": 0,
                      "Expression": "Separation.F.",
                      "Metadata": {}
                  }
              ],
              "Metadata": {},
              "Name": "Separation",
              "DisplayName": "판매구분",
              "Type": "Aspect"
          },
          {
              "IsSelected": false,
              "PlaceholderExpression": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(<!>))",
              "MultiSelectMode": "And",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "19",
                      "DisplayValue": "19",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Hotmarks.19.)",
                      "Count": 2,
                      "Expression": "Hotmarks.19.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "28",
                      "DisplayValue": "28",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Hotmarks.28.)",
                      "Count": 3,
                      "Expression": "Hotmarks.28.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "14",
                      "DisplayValue": "14",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Hotmarks.14.)",
                      "Count": 11,
                      "Expression": "Hotmarks.14.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "15",
                      "DisplayValue": "15",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Hotmarks.15.)",
                      "Count": 9,
                      "Expression": "Hotmarks.15.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "26",
                      "DisplayValue": "26",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Hotmarks.26.)",
                      "Count": 4,
                      "Expression": "Hotmarks.26.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "17",
                      "DisplayValue": "17",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Hotmarks.17.)",
                      "Count": 6,
                      "Expression": "Hotmarks.17.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "24",
                      "DisplayValue": "24",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Hotmarks.24.)",
                      "Count": 5,
                      "Expression": "Hotmarks.24.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "10",
                      "DisplayValue": "10",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Hotmarks.10.)",
                      "Count": 3,
                      "Expression": "Hotmarks.10.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "11",
                      "DisplayValue": "11",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Hotmarks.11.)",
                      "Count": 4,
                      "Expression": "Hotmarks.11.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "22",
                      "DisplayValue": "22",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Hotmarks.22.)",
                      "Count": 4,
                      "Expression": "Hotmarks.22.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "02",
                      "DisplayValue": "02",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Hotmarks.02.)",
                      "Count": 3,
                      "Expression": "Hotmarks.02.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "12",
                      "DisplayValue": "12",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Hotmarks.12.)",
                      "Count": 2,
                      "Expression": "Hotmarks.12.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "13",
                      "DisplayValue": "13",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Hotmarks.13.)",
                      "Count": 11,
                      "Expression": "Hotmarks.13.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "20",
                      "DisplayValue": "20",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Hotmarks.20.)",
                      "Count": 6,
                      "Expression": "Hotmarks.20.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "09",
                      "DisplayValue": "09",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Hotmarks.09.)",
                      "Count": 5,
                      "Expression": "Hotmarks.09.",
                      "Metadata": {}
                  }
              ],
              "Metadata": {},
              "Name": "Hotmarks",
              "DisplayName": "핫마크",
              "Type": "Aspect"
          },
          {
              "IsSelected": false,
              "PlaceholderExpression": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "r0002",
                      "DisplayValue": "2만 km 미만",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Mileage.r0002.)",
                      "Count": 0,
                      "Expression": "Mileage.r0002.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "r0204",
                      "DisplayValue": "2만 ~ 4만 km 미만",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Mileage.r0204.)",
                      "Count": 0,
                      "Expression": "Mileage.r0204.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "r0406",
                      "DisplayValue": "4만 ~ 6만 km 미만",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Mileage.r0406.)",
                      "Count": 40,
                      "Expression": "Mileage.r0406.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "r0608",
                      "DisplayValue": "6만 ~ 8만 km 미만",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Mileage.r0608.)",
                      "Count": 62,
                      "Expression": "Mileage.r0608.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "r0810",
                      "DisplayValue": "8만 ~ 10만 km 미만",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Mileage.r0810.)",
                      "Count": 51,
                      "Expression": "Mileage.r0810.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "r1099",
                      "DisplayValue": "10만 km 이상",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Mileage.r1099.)",
                      "Count": 52,
                      "Expression": "Mileage.r1099.",
                      "Metadata": {}
                  }
              ],
              "Metadata": {},
              "Name": "Mileage",
              "DisplayName": "주행거리",
              "Type": "Aspect"
          },
          {
              "IsSelected": false,
              "PlaceholderExpression": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "흰색",
                      "DisplayValue": "흰색",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Color.흰색.)",
                      "Count": 63,
                      "Expression": "Color.흰색.",
                      "Metadata": {
                          "Expression": [
                              "#ffffff;#ffffff"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "검정색",
                      "DisplayValue": "검정색",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Color.검정색.)",
                      "Count": 52,
                      "Expression": "Color.검정색.",
                      "Metadata": {
                          "Expression": [
                              "#000000;#000000"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "쥐색",
                      "DisplayValue": "쥐색",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Color.쥐색.)",
                      "Count": 50,
                      "Expression": "Color.쥐색.",
                      "Metadata": {
                          "Expression": [
                              "#585A59;#585A59"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "청색",
                      "DisplayValue": "청색",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Color.청색.)",
                      "Count": 21,
                      "Expression": "Color.청색.",
                      "Metadata": {
                          "Expression": [
                              "#124280;#124280"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "갈색",
                      "DisplayValue": "갈색",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Color.갈색.)",
                      "Count": 7,
                      "Expression": "Color.갈색.",
                      "Metadata": {
                          "Expression": [
                              "#3D3624;#3D3624"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "진주색",
                      "DisplayValue": "진주색",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Color.진주색.)",
                      "Count": 7,
                      "Expression": "Color.진주색.",
                      "Metadata": {
                          "Expression": [
                              "#FFFAFA;#FFFAFA"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "은색",
                      "DisplayValue": "은색",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Color.은색.)",
                      "Count": 5,
                      "Expression": "Color.은색.",
                      "Metadata": {
                          "Expression": [
                              "#C0C0C0;#C0C0C0"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "갈대색",
                      "DisplayValue": "갈대색",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Color.갈대색.)",
                      "Count": 0,
                      "Expression": "Color.갈대색.",
                      "Metadata": {
                          "Expression": [
                              "#808275;#808275"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "갈색투톤",
                      "DisplayValue": "갈색투톤",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Color.갈색투톤.)",
                      "Count": 0,
                      "Expression": "Color.갈색투톤.",
                      "Metadata": {
                          "Expression": [
                              "#3D3624;#464741"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "검은색",
                      "DisplayValue": "검은색",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Color.검은색.)",
                      "Count": 0,
                      "Expression": "Color.검은색.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "검정투톤",
                      "DisplayValue": "검정투톤",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Color.검정투톤.)",
                      "Count": 0,
                      "Expression": "Color.검정투톤.",
                      "Metadata": {
                          "Expression": [
                              "#000000;#464741"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "금색",
                      "DisplayValue": "금색",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Color.금색.)",
                      "Count": 0,
                      "Expression": "Color.금색.",
                      "Metadata": {
                          "Expression": [
                              "#837538;#837538"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "금색투톤",
                      "DisplayValue": "금색투톤",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Color.금색투톤.)",
                      "Count": 0,
                      "Expression": "Color.금색투톤.",
                      "Metadata": {
                          "Expression": [
                              "#837538;#464741"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "노란색",
                      "DisplayValue": "노란색",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Color.노란색.)",
                      "Count": 0,
                      "Expression": "Color.노란색.",
                      "Metadata": {
                          "Expression": [
                              "#ffff00;#ffff00"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "녹색",
                      "DisplayValue": "녹색",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Color.녹색.)",
                      "Count": 0,
                      "Expression": "Color.녹색.",
                      "Metadata": {
                          "Expression": [
                              "#00cc00;#00cc00"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "담녹색",
                      "DisplayValue": "담녹색",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Color.담녹색.)",
                      "Count": 0,
                      "Expression": "Color.담녹색.",
                      "Metadata": {
                          "Expression": [
                              "#1D444B;#1D444B"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "명은색",
                      "DisplayValue": "명은색",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Color.명은색.)",
                      "Count": 0,
                      "Expression": "Color.명은색.",
                      "Metadata": {
                          "Expression": [
                              "#CFD8E7;#CFD8E7"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "보라색",
                      "DisplayValue": "보라색",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Color.보라색.)",
                      "Count": 0,
                      "Expression": "Color.보라색.",
                      "Metadata": {
                          "Expression": [
                              "#46293B;#46293B"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "분홍색",
                      "DisplayValue": "분홍색",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Color.분홍색.)",
                      "Count": 0,
                      "Expression": "Color.분홍색.",
                      "Metadata": {
                          "Expression": [
                              "#EECACE;#EECACE"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "빨간색",
                      "DisplayValue": "빨간색",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Color.빨간색.)",
                      "Count": 0,
                      "Expression": "Color.빨간색.",
                      "Metadata": {
                          "Expression": [
                              "#ff0000;#ff0000"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "연금색",
                      "DisplayValue": "연금색",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Color.연금색.)",
                      "Count": 0,
                      "Expression": "Color.연금색.",
                      "Metadata": {
                          "Expression": [
                              "#8E8574;#8E8574"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "연두색",
                      "DisplayValue": "연두색",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Color.연두색.)",
                      "Count": 0,
                      "Expression": "Color.연두색.",
                      "Metadata": {
                          "Expression": [
                              "#9AB95C;#9AB95C"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "은색투톤",
                      "DisplayValue": "은색투톤",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Color.은색투톤.)",
                      "Count": 0,
                      "Expression": "Color.은색투톤.",
                      "Metadata": {
                          "Expression": [
                              "#c0c0c0;#464741"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "은하색",
                      "DisplayValue": "은하색",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Color.은하색.)",
                      "Count": 0,
                      "Expression": "Color.은하색.",
                      "Metadata": {
                          "Expression": [
                              "#A6B2B0;#A6B2B0"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "은회색",
                      "DisplayValue": "은회색",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Color.은회색.)",
                      "Count": 0,
                      "Expression": "Color.은회색.",
                      "Metadata": {
                          "Expression": [
                              "#D3D3D3;#D3D3D3"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "자주색",
                      "DisplayValue": "자주색",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Color.자주색.)",
                      "Count": 0,
                      "Expression": "Color.자주색.",
                      "Metadata": {
                          "Expression": [
                              "#800080;#800080"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "주황색",
                      "DisplayValue": "주황색",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Color.주황색.)",
                      "Count": 0,
                      "Expression": "Color.주황색.",
                      "Metadata": {
                          "Expression": [
                              "#A94828;#A94828"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "진주투톤",
                      "DisplayValue": "진주투톤",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Color.진주투톤.)",
                      "Count": 0,
                      "Expression": "Color.진주투톤.",
                      "Metadata": {
                          "Expression": [
                              "#F7F7F5;#464741"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "청옥색",
                      "DisplayValue": "청옥색",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Color.청옥색.)",
                      "Count": 0,
                      "Expression": "Color.청옥색.",
                      "Metadata": {
                          "Expression": [
                              "#1F7D7C;#1F7D7C"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "하늘색",
                      "DisplayValue": "하늘색",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Color.하늘색.)",
                      "Count": 0,
                      "Expression": "Color.하늘색.",
                      "Metadata": {
                          "Expression": [
                              "#75919C;#75919C"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "흰색투톤",
                      "DisplayValue": "흰색투톤",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Color.흰색투톤.)",
                      "Count": 0,
                      "Expression": "Color.흰색투톤.",
                      "Metadata": {
                          "Expression": [
                              "#ffffff;#464741"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "기타",
                      "DisplayValue": "기타",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Color.기타.)",
                      "Count": 0,
                      "Expression": "Color.기타.",
                      "Metadata": {
                          "Expression": [
                              "#ffffff;#ffffff"
                          ]
                      }
                  }
              ],
              "Metadata": {},
              "Name": "Color",
              "DisplayName": "색상",
              "Type": "Aspect"
          },
          {
              "IsSelected": false,
              "PlaceholderExpression": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(<!>))",
              "MultiSelectMode": "And",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "선루프",
                      "DisplayValue": "선루프",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.선루프.)",
                      "Count": 51,
                      "Expression": "Options.선루프.",
                      "Metadata": {
                          "Ordering": [
                              1.0
                          ],
                          "Expression": [
                              "외관/내장"
                          ],
                          "Code": [
                              "010"
                          ],
                          "Type": [
                              "01"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "헤드램프(HID)",
                      "DisplayValue": "헤드램프(HID)",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.헤드램프(HID_).)",
                      "Count": 4,
                      "Expression": "Options.헤드램프(HID_).",
                      "Metadata": {
                          "Ordering": [
                              2.0
                          ],
                          "Expression": [
                              "외관/내장"
                          ],
                          "Code": [
                              "029"
                          ],
                          "Type": [
                              "01"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "헤드램프(LED)",
                      "DisplayValue": "헤드램프(LED)",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.헤드램프(LED_).)",
                      "Count": 155,
                      "Expression": "Options.헤드램프(LED_).",
                      "Metadata": {
                          "Ordering": [
                              3.0
                          ],
                          "Expression": [
                              "외관/내장"
                          ],
                          "Code": [
                              "075"
                          ],
                          "Type": [
                              "01"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "파워 전동 트렁크",
                      "DisplayValue": "파워 전동 트렁크",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.파워 전동 트렁크.)",
                      "Count": 137,
                      "Expression": "Options.파워 전동 트렁크.",
                      "Metadata": {
                          "Ordering": [
                              4.0
                          ],
                          "Expression": [
                              "외관/내장"
                          ],
                          "Code": [
                              "059"
                          ],
                          "Type": [
                              "01"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "고스트 도어 클로징",
                      "DisplayValue": "고스트 도어 클로징",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.고스트 도어 클로징.)",
                      "Count": 0,
                      "Expression": "Options.고스트 도어 클로징.",
                      "Metadata": {
                          "Ordering": [
                              5.0
                          ],
                          "Expression": [
                              "외관/내장"
                          ],
                          "Code": [
                              "080"
                          ],
                          "Type": [
                              "01"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "전동접이 사이드 미러",
                      "DisplayValue": "전동접이 사이드 미러",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.전동접이 사이드 미러.)",
                      "Count": 205,
                      "Expression": "Options.전동접이 사이드 미러.",
                      "Metadata": {
                          "Ordering": [
                              6.0
                          ],
                          "Expression": [
                              "외관/내장"
                          ],
                          "Code": [
                              "024"
                          ],
                          "Type": [
                              "01"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "알루미늄 휠",
                      "DisplayValue": "알루미늄 휠",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.알루미늄 휠.)",
                      "Count": 205,
                      "Expression": "Options.알루미늄 휠.",
                      "Metadata": {
                          "Ordering": [
                              7.0
                          ],
                          "Expression": [
                              "외관/내장"
                          ],
                          "Code": [
                              "017"
                          ],
                          "Type": [
                              "01"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "루프랙",
                      "DisplayValue": "루프랙",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.루프랙.)",
                      "Count": 197,
                      "Expression": "Options.루프랙.",
                      "Metadata": {
                          "Ordering": [
                              8.0
                          ],
                          "Expression": [
                              "외관/내장"
                          ],
                          "Code": [
                              "062"
                          ],
                          "Type": [
                              "01"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "열선 스티어링 휠",
                      "DisplayValue": "열선 스티어링 휠",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.열선 스티어링 휠.)",
                      "Count": 197,
                      "Expression": "Options.열선 스티어링 휠.",
                      "Metadata": {
                          "Ordering": [
                              9.0
                          ],
                          "Expression": [
                              "외관/내장"
                          ],
                          "Code": [
                              "082"
                          ],
                          "Type": [
                              "01"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "전동 조절 스티어링 휠",
                      "DisplayValue": "전동 조절 스티어링 휠",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.전동 조절 스티어링 휠.)",
                      "Count": 0,
                      "Expression": "Options.전동 조절 스티어링 휠.",
                      "Metadata": {
                          "Ordering": [
                              10.0
                          ],
                          "Expression": [
                              "외관/내장"
                          ],
                          "Code": [
                              "083"
                          ],
                          "Type": [
                              "01"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "패들 시프트",
                      "DisplayValue": "패들 시프트",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.패들 시프트.)",
                      "Count": 90,
                      "Expression": "Options.패들 시프트.",
                      "Metadata": {
                          "Ordering": [
                              11.0
                          ],
                          "Expression": [
                              "외관/내장"
                          ],
                          "Code": [
                              "084"
                          ],
                          "Type": [
                              "01"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "스티어링 휠 리모컨",
                      "DisplayValue": "스티어링 휠 리모컨",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.스티어링 휠 리모컨.)",
                      "Count": 205,
                      "Expression": "Options.스티어링 휠 리모컨.",
                      "Metadata": {
                          "Ordering": [
                              12.0
                          ],
                          "Expression": [
                              "외관/내장"
                          ],
                          "Code": [
                              "031"
                          ],
                          "Type": [
                              "01"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "ECM 룸미러",
                      "DisplayValue": "ECM 룸미러",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.ECM 룸미러.)",
                      "Count": 203,
                      "Expression": "Options.ECM 룸미러.",
                      "Metadata": {
                          "Ordering": [
                              13.0
                          ],
                          "Expression": [
                              "외관/내장"
                          ],
                          "Code": [
                              "030"
                          ],
                          "Type": [
                              "01"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "하이패스",
                      "DisplayValue": "하이패스",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.하이패스.)",
                      "Count": 203,
                      "Expression": "Options.하이패스.",
                      "Metadata": {
                          "Ordering": [
                              14.0
                          ],
                          "Expression": [
                              "외관/내장"
                          ],
                          "Code": [
                              "074"
                          ],
                          "Type": [
                              "01"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "파워 도어록",
                      "DisplayValue": "파워 도어록",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.파워 도어록.)",
                      "Count": 205,
                      "Expression": "Options.파워 도어록.",
                      "Metadata": {
                          "Ordering": [
                              15.0
                          ],
                          "Expression": [
                              "외관/내장"
                          ],
                          "Code": [
                              "006"
                          ],
                          "Type": [
                              "01"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "파워 스티어링 휠",
                      "DisplayValue": "파워 스티어링 휠",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.파워 스티어링 휠.)",
                      "Count": 205,
                      "Expression": "Options.파워 스티어링 휠.",
                      "Metadata": {
                          "Ordering": [
                              16.0
                          ],
                          "Expression": [
                              "외관/내장"
                          ],
                          "Code": [
                              "008"
                          ],
                          "Type": [
                              "01"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "파워 윈도우",
                      "DisplayValue": "파워 윈도우",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.파워 윈도우.)",
                      "Count": 205,
                      "Expression": "Options.파워 윈도우.",
                      "Metadata": {
                          "Ordering": [
                              17.0
                          ],
                          "Expression": [
                              "외관/내장"
                          ],
                          "Code": [
                              "007"
                          ],
                          "Type": [
                              "01"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "에어백(운전석)",
                      "DisplayValue": "에어백(운전석)",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.에어백(운전석_).)",
                      "Count": 205,
                      "Expression": "Options.에어백(운전석_).",
                      "Metadata": {
                          "Ordering": [
                              1.0
                          ],
                          "Expression": [
                              "안전"
                          ],
                          "Code": [
                              "026"
                          ],
                          "Type": [
                              "02"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "에어백(동승석)",
                      "DisplayValue": "에어백(동승석)",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.에어백(동승석_).)",
                      "Count": 205,
                      "Expression": "Options.에어백(동승석_).",
                      "Metadata": {
                          "Ordering": [
                              2.0
                          ],
                          "Expression": [
                              "안전"
                          ],
                          "Code": [
                              "027"
                          ],
                          "Type": [
                              "02"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "에어백(사이드)",
                      "DisplayValue": "에어백(사이드)",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.에어백(사이드_).)",
                      "Count": 205,
                      "Expression": "Options.에어백(사이드_).",
                      "Metadata": {
                          "Ordering": [
                              3.0
                          ],
                          "Expression": [
                              "안전"
                          ],
                          "Code": [
                              "020"
                          ],
                          "Type": [
                              "02"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "에어백(커튼)",
                      "DisplayValue": "에어백(커튼)",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.에어백(커튼_).)",
                      "Count": 205,
                      "Expression": "Options.에어백(커튼_).",
                      "Metadata": {
                          "Ordering": [
                              4.0
                          ],
                          "Expression": [
                              "안전"
                          ],
                          "Code": [
                              "056"
                          ],
                          "Type": [
                              "02"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "브레이크 잠김 방지(ABS)",
                      "DisplayValue": "브레이크 잠김 방지(ABS)",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.브레이크 잠김 방지(ABS_).)",
                      "Count": 205,
                      "Expression": "Options.브레이크 잠김 방지(ABS_).",
                      "Metadata": {
                          "Ordering": [
                              5.0
                          ],
                          "Expression": [
                              "안전"
                          ],
                          "Code": [
                              "001"
                          ],
                          "Type": [
                              "02"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "미끄럼 방지(TCS)",
                      "DisplayValue": "미끄럼 방지(TCS)",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.미끄럼 방지(TCS_).)",
                      "Count": 205,
                      "Expression": "Options.미끄럼 방지(TCS_).",
                      "Metadata": {
                          "Ordering": [
                              6.0
                          ],
                          "Expression": [
                              "안전"
                          ],
                          "Code": [
                              "019"
                          ],
                          "Type": [
                              "02"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "차체자세 제어장치(ESC)",
                      "DisplayValue": "차체자세 제어장치(ESC)",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.차체자세 제어장치(ESC_).)",
                      "Count": 205,
                      "Expression": "Options.차체자세 제어장치(ESC_).",
                      "Metadata": {
                          "Ordering": [
                              7.0
                          ],
                          "Expression": [
                              "안전"
                          ],
                          "Code": [
                              "055"
                          ],
                          "Type": [
                              "02"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "타이어 공기압센서(TPMS)",
                      "DisplayValue": "타이어 공기압센서(TPMS)",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.타이어 공기압센서(TPMS_).)",
                      "Count": 205,
                      "Expression": "Options.타이어 공기압센서(TPMS_).",
                      "Metadata": {
                          "Ordering": [
                              8.0
                          ],
                          "Expression": [
                              "안전"
                          ],
                          "Code": [
                              "033"
                          ],
                          "Type": [
                              "02"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "차선이탈 경보 시스템(LDWS)",
                      "DisplayValue": "차선이탈 경보 시스템(LDWS)",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.차선이탈 경보 시스템(LDWS_).)",
                      "Count": 130,
                      "Expression": "Options.차선이탈 경보 시스템(LDWS_).",
                      "Metadata": {
                          "Ordering": [
                              9.0
                          ],
                          "Expression": [
                              "안전"
                          ],
                          "Code": [
                              "088"
                          ],
                          "Type": [
                              "02"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "전자제어 서스펜션(ECS)",
                      "DisplayValue": "전자제어 서스펜션(ECS)",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.전자제어 서스펜션(ECS_).)",
                      "Count": 2,
                      "Expression": "Options.전자제어 서스펜션(ECS_).",
                      "Metadata": {
                          "Ordering": [
                              10.0
                          ],
                          "Expression": [
                              "안전"
                          ],
                          "Code": [
                              "002"
                          ],
                          "Type": [
                              "02"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "주차감지센서(전방)",
                      "DisplayValue": "주차감지센서(전방)",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.주차감지센서(전방_).)",
                      "Count": 138,
                      "Expression": "Options.주차감지센서(전방_).",
                      "Metadata": {
                          "Ordering": [
                              11.0
                          ],
                          "Expression": [
                              "안전"
                          ],
                          "Code": [
                              "085"
                          ],
                          "Type": [
                              "02"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "주차감지센서(후방)",
                      "DisplayValue": "주차감지센서(후방)",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.주차감지센서(후방_).)",
                      "Count": 205,
                      "Expression": "Options.주차감지센서(후방_).",
                      "Metadata": {
                          "Ordering": [
                              12.0
                          ],
                          "Expression": [
                              "안전"
                          ],
                          "Code": [
                              "032"
                          ],
                          "Type": [
                              "02"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "후측방 경보 시스템",
                      "DisplayValue": "후측방 경보 시스템",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.후측방 경보 시스템.)",
                      "Count": 109,
                      "Expression": "Options.후측방 경보 시스템.",
                      "Metadata": {
                          "Ordering": [
                              13.0
                          ],
                          "Expression": [
                              "안전"
                          ],
                          "Code": [
                              "086"
                          ],
                          "Type": [
                              "02"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "후방 카메라",
                      "DisplayValue": "후방 카메라",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.후방 카메라.)",
                      "Count": 188,
                      "Expression": "Options.후방 카메라.",
                      "Metadata": {
                          "Ordering": [
                              14.0
                          ],
                          "Expression": [
                              "안전"
                          ],
                          "Code": [
                              "058"
                          ],
                          "Type": [
                              "02"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "360도 어라운드 뷰",
                      "DisplayValue": "360도 어라운드 뷰",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.360도 어라운드 뷰.)",
                      "Count": 41,
                      "Expression": "Options.360도 어라운드 뷰.",
                      "Metadata": {
                          "Ordering": [
                              15.0
                          ],
                          "Expression": [
                              "안전"
                          ],
                          "Code": [
                              "087"
                          ],
                          "Type": [
                              "02"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "크루즈 컨트롤(일반)",
                      "DisplayValue": "크루즈 컨트롤(일반)",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.크루즈 컨트롤(일반_).)",
                      "Count": 116,
                      "Expression": "Options.크루즈 컨트롤(일반_).",
                      "Metadata": {
                          "Ordering": [
                              1.0
                          ],
                          "Expression": [
                              "편의/멀티미디어"
                          ],
                          "Code": [
                              "068"
                          ],
                          "Type": [
                              "03"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "크루즈 컨트롤(어댑티브)",
                      "DisplayValue": "크루즈 컨트롤(어댑티브)",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.크루즈 컨트롤(어댑티브_).)",
                      "Count": 89,
                      "Expression": "Options.크루즈 컨트롤(어댑티브_).",
                      "Metadata": {
                          "Ordering": [
                              2.0
                          ],
                          "Expression": [
                              "편의/멀티미디어"
                          ],
                          "Code": [
                              "079"
                          ],
                          "Type": [
                              "03"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "헤드업 디스플레이(HUD)",
                      "DisplayValue": "헤드업 디스플레이(HUD)",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.헤드업 디스플레이(HUD_).)",
                      "Count": 39,
                      "Expression": "Options.헤드업 디스플레이(HUD_).",
                      "Metadata": {
                          "Ordering": [
                              3.0
                          ],
                          "Expression": [
                              "편의/멀티미디어"
                          ],
                          "Code": [
                              "095"
                          ],
                          "Type": [
                              "03"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "전자식 주차브레이크(EPB)",
                      "DisplayValue": "전자식 주차브레이크(EPB)",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.전자식 주차브레이크(EPB_).)",
                      "Count": 139,
                      "Expression": "Options.전자식 주차브레이크(EPB_).",
                      "Metadata": {
                          "Ordering": [
                              4.0
                          ],
                          "Expression": [
                              "편의/멀티미디어"
                          ],
                          "Code": [
                              "094"
                          ],
                          "Type": [
                              "03"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "자동 에어컨",
                      "DisplayValue": "자동 에어컨",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.자동 에어컨.)",
                      "Count": 195,
                      "Expression": "Options.자동 에어컨.",
                      "Metadata": {
                          "Ordering": [
                              5.0
                          ],
                          "Expression": [
                              "편의/멀티미디어"
                          ],
                          "Code": [
                              "023"
                          ],
                          "Type": [
                              "03"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "스마트키",
                      "DisplayValue": "스마트키",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.스마트키.)",
                      "Count": 202,
                      "Expression": "Options.스마트키.",
                      "Metadata": {
                          "Ordering": [
                              6.0
                          ],
                          "Expression": [
                              "편의/멀티미디어"
                          ],
                          "Code": [
                              "057"
                          ],
                          "Type": [
                              "03"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "무선도어 잠금장치",
                      "DisplayValue": "무선도어 잠금장치",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.무선도어 잠금장치.)",
                      "Count": 205,
                      "Expression": "Options.무선도어 잠금장치.",
                      "Metadata": {
                          "Ordering": [
                              7.0
                          ],
                          "Expression": [
                              "편의/멀티미디어"
                          ],
                          "Code": [
                              "015"
                          ],
                          "Type": [
                              "03"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "레인센서",
                      "DisplayValue": "레인센서",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.레인센서.)",
                      "Count": 57,
                      "Expression": "Options.레인센서.",
                      "Metadata": {
                          "Ordering": [
                              8.0
                          ],
                          "Expression": [
                              "편의/멀티미디어"
                          ],
                          "Code": [
                              "081"
                          ],
                          "Type": [
                              "03"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "오토 라이트",
                      "DisplayValue": "오토 라이트",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.오토 라이트.)",
                      "Count": 205,
                      "Expression": "Options.오토 라이트.",
                      "Metadata": {
                          "Ordering": [
                              9.0
                          ],
                          "Expression": [
                              "편의/멀티미디어"
                          ],
                          "Code": [
                              "097"
                          ],
                          "Type": [
                              "03"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "커튼/블라인드(뒷좌석)",
                      "DisplayValue": "커튼/블라인드(뒷좌석)",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.커튼/블라인드(뒷좌석_).)",
                      "Count": 128,
                      "Expression": "Options.커튼/블라인드(뒷좌석_).",
                      "Metadata": {
                          "Ordering": [
                              10.0
                          ],
                          "Expression": [
                              "편의/멀티미디어"
                          ],
                          "Code": [
                              "092"
                          ],
                          "Type": [
                              "03"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "커튼/블라인드(후방)",
                      "DisplayValue": "커튼/블라인드(후방)",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.커튼/블라인드(후방_).)",
                      "Count": 1,
                      "Expression": "Options.커튼/블라인드(후방_).",
                      "Metadata": {
                          "Ordering": [
                              11.0
                          ],
                          "Expression": [
                              "편의/멀티미디어"
                          ],
                          "Code": [
                              "093"
                          ],
                          "Type": [
                              "03"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "내비게이션",
                      "DisplayValue": "내비게이션",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.내비게이션.)",
                      "Count": 184,
                      "Expression": "Options.내비게이션.",
                      "Metadata": {
                          "Ordering": [
                              12.0
                          ],
                          "Expression": [
                              "편의/멀티미디어"
                          ],
                          "Code": [
                              "005"
                          ],
                          "Type": [
                              "03"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "앞좌석 AV 모니터",
                      "DisplayValue": "앞좌석 AV 모니터",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.앞좌석 AV 모니터.)",
                      "Count": 173,
                      "Expression": "Options.앞좌석 AV 모니터.",
                      "Metadata": {
                          "Ordering": [
                              13.0
                          ],
                          "Expression": [
                              "편의/멀티미디어"
                          ],
                          "Code": [
                              "004"
                          ],
                          "Type": [
                              "03"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "뒷좌석 AV 모니터",
                      "DisplayValue": "뒷좌석 AV 모니터",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.뒷좌석 AV 모니터.)",
                      "Count": 3,
                      "Expression": "Options.뒷좌석 AV 모니터.",
                      "Metadata": {
                          "Ordering": [
                              14.0
                          ],
                          "Expression": [
                              "편의/멀티미디어"
                          ],
                          "Code": [
                              "054"
                          ],
                          "Type": [
                              "03"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "블루투스",
                      "DisplayValue": "블루투스",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.블루투스.)",
                      "Count": 205,
                      "Expression": "Options.블루투스.",
                      "Metadata": {
                          "Ordering": [
                              15.0
                          ],
                          "Expression": [
                              "편의/멀티미디어"
                          ],
                          "Code": [
                              "096"
                          ],
                          "Type": [
                              "03"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "CD 플레이어",
                      "DisplayValue": "CD 플레이어",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.CD 플레이어.)",
                      "Count": 47,
                      "Expression": "Options.CD 플레이어.",
                      "Metadata": {
                          "Ordering": [
                              16.0
                          ],
                          "Expression": [
                              "편의/멀티미디어"
                          ],
                          "Code": [
                              "003"
                          ],
                          "Type": [
                              "03"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "USB 단자",
                      "DisplayValue": "USB 단자",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.USB 단자.)",
                      "Count": 205,
                      "Expression": "Options.USB 단자.",
                      "Metadata": {
                          "Ordering": [
                              17.0
                          ],
                          "Expression": [
                              "편의/멀티미디어"
                          ],
                          "Code": [
                              "072"
                          ],
                          "Type": [
                              "03"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "AUX 단자",
                      "DisplayValue": "AUX 단자",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.AUX 단자.)",
                      "Count": 205,
                      "Expression": "Options.AUX 단자.",
                      "Metadata": {
                          "Ordering": [
                              18.0
                          ],
                          "Expression": [
                              "편의/멀티미디어"
                          ],
                          "Code": [
                              "071"
                          ],
                          "Type": [
                              "03"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "가죽시트",
                      "DisplayValue": "가죽시트",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.가죽시트.)",
                      "Count": 205,
                      "Expression": "Options.가죽시트.",
                      "Metadata": {
                          "Ordering": [
                              1.0
                          ],
                          "Expression": [
                              "시트"
                          ],
                          "Code": [
                              "014"
                          ],
                          "Type": [
                              "04"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "전동시트(운전석)",
                      "DisplayValue": "전동시트(운전석)",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.전동시트(운전석_).)",
                      "Count": 197,
                      "Expression": "Options.전동시트(운전석_).",
                      "Metadata": {
                          "Ordering": [
                              2.0
                          ],
                          "Expression": [
                              "시트"
                          ],
                          "Code": [
                              "021"
                          ],
                          "Type": [
                              "04"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "전동시트(동승석)",
                      "DisplayValue": "전동시트(동승석)",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.전동시트(동승석_).)",
                      "Count": 129,
                      "Expression": "Options.전동시트(동승석_).",
                      "Metadata": {
                          "Ordering": [
                              3.0
                          ],
                          "Expression": [
                              "시트"
                          ],
                          "Code": [
                              "035"
                          ],
                          "Type": [
                              "04"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "전동시트(뒷좌석)",
                      "DisplayValue": "전동시트(뒷좌석)",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.전동시트(뒷좌석_).)",
                      "Count": 0,
                      "Expression": "Options.전동시트(뒷좌석_).",
                      "Metadata": {
                          "Ordering": [
                              4.0
                          ],
                          "Expression": [
                              "시트"
                          ],
                          "Code": [
                              "089"
                          ],
                          "Type": [
                              "04"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "열선시트(앞좌석)",
                      "DisplayValue": "열선시트(앞좌석)",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.열선시트(앞좌석_).)",
                      "Count": 205,
                      "Expression": "Options.열선시트(앞좌석_).",
                      "Metadata": {
                          "Ordering": [
                              5.0
                          ],
                          "Expression": [
                              "시트"
                          ],
                          "Code": [
                              "022"
                          ],
                          "Type": [
                              "04"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "열선시트(뒷좌석)",
                      "DisplayValue": "열선시트(뒷좌석)",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.열선시트(뒷좌석_).)",
                      "Count": 197,
                      "Expression": "Options.열선시트(뒷좌석_).",
                      "Metadata": {
                          "Ordering": [
                              6.0
                          ],
                          "Expression": [
                              "시트"
                          ],
                          "Code": [
                              "063"
                          ],
                          "Type": [
                              "04"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "메모리 시트(운전석)",
                      "DisplayValue": "메모리 시트(운전석)",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.메모리 시트(운전석_).)",
                      "Count": 81,
                      "Expression": "Options.메모리 시트(운전석_).",
                      "Metadata": {
                          "Ordering": [
                              7.0
                          ],
                          "Expression": [
                              "시트"
                          ],
                          "Code": [
                              "051"
                          ],
                          "Type": [
                              "04"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "메모리 시트(동승석)",
                      "DisplayValue": "메모리 시트(동승석)",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.메모리 시트(동승석_).)",
                      "Count": 0,
                      "Expression": "Options.메모리 시트(동승석_).",
                      "Metadata": {
                          "Ordering": [
                              8.0
                          ],
                          "Expression": [
                              "시트"
                          ],
                          "Code": [
                              "078"
                          ],
                          "Type": [
                              "04"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "통풍시트(운전석)",
                      "DisplayValue": "통풍시트(운전석)",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.통풍시트(운전석_).)",
                      "Count": 197,
                      "Expression": "Options.통풍시트(운전석_).",
                      "Metadata": {
                          "Ordering": [
                              9.0
                          ],
                          "Expression": [
                              "시트"
                          ],
                          "Code": [
                              "034"
                          ],
                          "Type": [
                              "04"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "통풍시트(동승석)",
                      "DisplayValue": "통풍시트(동승석)",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.통풍시트(동승석_).)",
                      "Count": 197,
                      "Expression": "Options.통풍시트(동승석_).",
                      "Metadata": {
                          "Ordering": [
                              10.0
                          ],
                          "Expression": [
                              "시트"
                          ],
                          "Code": [
                              "077"
                          ],
                          "Type": [
                              "04"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "통풍시트(뒷좌석)",
                      "DisplayValue": "통풍시트(뒷좌석)",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.통풍시트(뒷좌석_).)",
                      "Count": 0,
                      "Expression": "Options.통풍시트(뒷좌석_).",
                      "Metadata": {
                          "Ordering": [
                              11.0
                          ],
                          "Expression": [
                              "시트"
                          ],
                          "Code": [
                              "090"
                          ],
                          "Type": [
                              "04"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "마사지 시트",
                      "DisplayValue": "마사지 시트",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Options.마사지 시트.)",
                      "Count": 0,
                      "Expression": "Options.마사지 시트.",
                      "Metadata": {
                          "Ordering": [
                              12.0
                          ],
                          "Expression": [
                              "시트"
                          ],
                          "Code": [
                              "091"
                          ],
                          "Type": [
                              "04"
                          ]
                      }
                  }
              ],
              "Metadata": {},
              "Name": "Options",
              "DisplayName": "옵션",
              "Type": "Aspect"
          },
          {
              "IsSelected": false,
              "PlaceholderExpression": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "E",
                      "DisplayValue": "모바일프리미엄",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.AdType.E.)",
                      "Count": 25,
                      "Expression": "AdType.E.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "D",
                      "DisplayValue": "파워팩",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.AdType.D.)",
                      "Count": 29,
                      "Expression": "AdType.D.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "G",
                      "DisplayValue": "자동업데이트",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.AdType.G.)",
                      "Count": 31,
                      "Expression": "AdType.G.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "A",
                      "DisplayValue": "사진우대",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.AdType.A.)",
                      "Count": 33,
                      "Expression": "AdType.A.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "C",
                      "DisplayValue": "핫마크",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.AdType.C.)",
                      "Count": 29,
                      "Expression": "AdType.C.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "B",
                      "DisplayValue": "우대등록",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.AdType.B.)",
                      "Count": 33,
                      "Expression": "AdType.B.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "H",
                      "DisplayValue": "오토체인지",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.AdType.H.)",
                      "Count": 1,
                      "Expression": "AdType.H.",
                      "Metadata": {}
                  }
              ],
              "Metadata": {},
              "Name": "AdType",
              "DisplayName": "광고구분",
              "Type": "Aspect"
          },
          {
              "IsSelected": false,
              "PlaceholderExpression": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "F",
                      "DisplayValue": "F",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Accident.F.)",
                      "Count": 53,
                      "Expression": "Accident.F.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "N",
                      "DisplayValue": "N",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Accident.N.)",
                      "Count": 140,
                      "Expression": "Accident.N.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "Y",
                      "DisplayValue": "Y",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Accident.Y.)",
                      "Count": 12,
                      "Expression": "Accident.Y.",
                      "Metadata": {}
                  }
              ],
              "Metadata": {},
              "Name": "Accident",
              "DisplayName": "사고구분",
              "Type": "Aspect"
          },
          {
              "IsSelected": false,
              "PlaceholderExpression": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [],
              "Metadata": {},
              "Name": "Lease",
              "DisplayName": "리스구분",
              "Type": "Aspect"
          },
          {
              "IsSelected": false,
              "PlaceholderExpression": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(<!>))",
              "MultiSelectMode": "None",
              "RemoveAction": "",
              "Facets": [],
              "Metadata": {},
              "Name": "Exhibition",
              "DisplayName": "전시장",
              "Type": "Aspect"
          },
          {
              "IsSelected": false,
              "PlaceholderExpression": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "경기 SAC",
                      "DisplayValue": "경기 SAC",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.DealerShipNm.경기 SAC.)",
                      "Count": 14,
                      "Expression": "DealerShipNm.경기 SAC.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "경기 SK V1모터스",
                      "DisplayValue": "경기 SK V1모터스",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.DealerShipNm.경기 SK V1모터스.)",
                      "Count": 24,
                      "Expression": "DealerShipNm.경기 SK V1모터스.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "경기 경기매매단지",
                      "DisplayValue": "경기 경기매매단지",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.DealerShipNm.경기 경기매매단지.)",
                      "Count": 7,
                      "Expression": "DealerShipNm.경기 경기매매단지.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "경기 김포 국민차매매단지",
                      "DisplayValue": "경기 김포 국민차매매단지",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.DealerShipNm.경기 김포 국민차매매단지.)",
                      "Count": 0,
                      "Expression": "DealerShipNm.경기 김포 국민차매매단지.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "경기 도이치오토월드",
                      "DisplayValue": "경기 도이치오토월드",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.DealerShipNm.경기 도이치오토월드.)",
                      "Count": 35,
                      "Expression": "DealerShipNm.경기 도이치오토월드.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "경기 라성단지",
                      "DisplayValue": "경기 라성단지",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.DealerShipNm.경기 라성단지.)",
                      "Count": 4,
                      "Expression": "DealerShipNm.경기 라성단지.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "경기 마트단지",
                      "DisplayValue": "경기 마트단지",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.DealerShipNm.경기 마트단지.)",
                      "Count": 11,
                      "Expression": "DealerShipNm.경기 마트단지.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "경기 오토돔",
                      "DisplayValue": "경기 오토돔",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.DealerShipNm.경기 오토돔.)",
                      "Count": 6,
                      "Expression": "DealerShipNm.경기 오토돔.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "경기 오토허브",
                      "DisplayValue": "경기 오토허브",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.DealerShipNm.경기 오토허브.)",
                      "Count": 9,
                      "Expression": "DealerShipNm.경기 오토허브.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "경기 일산풍동오토갤러리",
                      "DisplayValue": "경기 일산풍동오토갤러리",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.DealerShipNm.경기 일산풍동오토갤러리.)",
                      "Count": 2,
                      "Expression": "DealerShipNm.경기 일산풍동오토갤러리.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "경남 KC월드카프라자",
                      "DisplayValue": "경남 KC월드카프라자",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.DealerShipNm.경남 KC월드카프라자.)",
                      "Count": 0,
                      "Expression": "DealerShipNm.경남 KC월드카프라자.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "대구 오토월드",
                      "DisplayValue": "대구 오토월드",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.DealerShipNm.대구 오토월드.)",
                      "Count": 0,
                      "Expression": "DealerShipNm.대구 오토월드.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "부산 1001",
                      "DisplayValue": "부산 1001",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.DealerShipNm.부산 1001.)",
                      "Count": 0,
                      "Expression": "DealerShipNm.부산 1001.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "부산 KC오토월드",
                      "DisplayValue": "부산 KC오토월드",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.DealerShipNm.부산 KC오토월드.)",
                      "Count": 0,
                      "Expression": "DealerShipNm.부산 KC오토월드.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "부산 반여강변 매매단지",
                      "DisplayValue": "부산 반여강변 매매단지",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.DealerShipNm.부산 반여강변 매매단지.)",
                      "Count": 0,
                      "Expression": "DealerShipNm.부산 반여강변 매매단지.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "부산 부산감만단지",
                      "DisplayValue": "부산 부산감만단지",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.DealerShipNm.부산 부산감만단지.)",
                      "Count": 0,
                      "Expression": "DealerShipNm.부산 부산감만단지.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "부산 사직오토랜드",
                      "DisplayValue": "부산 사직오토랜드",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.DealerShipNm.부산 사직오토랜드.)",
                      "Count": 0,
                      "Expression": "DealerShipNm.부산 사직오토랜드.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "인천 엠파크타워",
                      "DisplayValue": "인천 엠파크타워",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.DealerShipNm.인천 엠파크타워.)",
                      "Count": 0,
                      "Expression": "DealerShipNm.인천 엠파크타워.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "인천 엠파크허브",
                      "DisplayValue": "인천 엠파크허브",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.DealerShipNm.인천 엠파크허브.)",
                      "Count": 0,
                      "Expression": "DealerShipNm.인천 엠파크허브.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "인천 오토드림",
                      "DisplayValue": "인천 오토드림",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.DealerShipNm.인천 오토드림.)",
                      "Count": 0,
                      "Expression": "DealerShipNm.인천 오토드림.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "인천 주안매매단지",
                      "DisplayValue": "인천 주안매매단지",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.DealerShipNm.인천 주안매매단지.)",
                      "Count": 0,
                      "Expression": "DealerShipNm.인천 주안매매단지.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "인천 청라 오토플러스",
                      "DisplayValue": "인천 청라 오토플러스",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.DealerShipNm.인천 청라 오토플러스.)",
                      "Count": 0,
                      "Expression": "DealerShipNm.인천 청라 오토플러스.",
                      "Metadata": {}
                  }
              ],
              "Metadata": {},
              "Name": "DealerShipNm",
              "DisplayName": "제휴단지",
              "Type": "Aspect"
          },
          {
              "IsSelected": false,
              "PlaceholderExpression": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(<!>))",
              "MultiSelectMode": "None",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "ORIGINAL",
                      "DisplayValue": "ORIGINAL",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.ServiceCopyCar.ORIGINAL.)",
                      "Count": 163,
                      "Expression": "ServiceCopyCar.ORIGINAL.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "DUPLICATION",
                      "DisplayValue": "DUPLICATION",
                      "Action": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.ServiceCopyCar.DUPLICATION.)",
                      "Count": 42,
                      "Expression": "ServiceCopyCar.DUPLICATION.",
                      "Metadata": {}
                  }
              ],
              "Metadata": {},
              "Name": "ServiceCopyCar",
              "DisplayName": "복제여부",
              "Type": "Aspect"
          },
          {
              "LowerPlaceholder": "<!lower>",
              "UpperPlaceholder": "<!upper>",
              "QueryWithPlaceholder": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Year.range(<!lower>..<!upper>).)",
              "IsSelected": false,
              "Name": "Year",
              "DisplayName": "연식",
              "Type": "RangeAction"
          },
          {
              "LowerPlaceholder": "<!lower>",
              "UpperPlaceholder": "<!upper>",
              "QueryWithPlaceholder": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.AcceptanceCharge.range(<!lower>..<!upper>).)",
              "IsSelected": false,
              "Name": "AcceptanceCharge",
              "DisplayName": "인수비용",
              "Type": "RangeAction"
          },
          {
              "LowerPlaceholder": "<!lower>",
              "UpperPlaceholder": "<!upper>",
              "QueryWithPlaceholder": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.MonthLeasePrice.range(<!lower>..<!upper>).)",
              "IsSelected": false,
              "Name": "MonthLeasePrice",
              "DisplayName": "월리스료",
              "Type": "RangeAction"
          },
          {
              "LowerPlaceholder": "<!lower>",
              "UpperPlaceholder": "<!upper>",
              "QueryWithPlaceholder": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.MonthLeaseRest.range(<!lower>..<!upper>).)",
              "IsSelected": false,
              "Name": "MonthLeaseRest",
              "DisplayName": "잔여개월",
              "Type": "RangeAction"
          },
          {
              "LowerPlaceholder": "<!lower>",
              "UpperPlaceholder": "<!upper>",
              "QueryWithPlaceholder": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.CreatedDate.range(<!lower>..<!upper>).)",
              "IsSelected": false,
              "Name": "CreatedDate",
              "DisplayName": "등록일자",
              "Type": "RangeAction"
          },
          {
              "Placeholder": "<!>",
              "QueryWithPlaceholder": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Simple.keyword(<!>).)",
              "IsSelected": false,
              "Name": "Simple",
              "DisplayName": "Simple",
              "Type": "KeywordAction"
          },
          {
              "LatitudePlaceholder": "<!lat>",
              "LongitudePlaceholder": "<!lon>",
              "DistanceInKmsPlaceholder": "<!distInKms>",
              "QueryWithPlaceholder": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Location.location(<!lat>,<!lon>x<!distInKms>km).)",
              "IsSelected": false,
              "Name": "Location",
              "DisplayName": "Location",
              "Type": "LocationAction"
          },
          {
              "Placeholder": "<!>",
              "QueryWithPlaceholder": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.MetaData.custom(<!>).)",
              "IsSelected": false,
              "Name": "MetaData",
              "DisplayName": "MetaData",
              "Type": "CustomIndexAction"
          },
          {
              "Placeholder": "<!>",
              "QueryWithPlaceholder": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.Plate.<!>.)",
              "IsSelected": false,
              "Name": "Plate",
              "DisplayName": "Plate",
              "Type": "RefinementAction"
          },
          {
              "Placeholder": "<!>",
              "QueryWithPlaceholder": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.PlateRegistrationNumber.<!>.)",
              "IsSelected": false,
              "Name": "PlateRegistrationNumber",
              "DisplayName": "PlateRegistrationNumber",
              "Type": "RefinementAction"
          },
          {
              "Placeholder": "<!>",
              "QueryWithPlaceholder": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.DealerName.<!>.)",
              "IsSelected": false,
              "Name": "DealerName",
              "DisplayName": "DealerName",
              "Type": "RefinementAction"
          },
          {
              "Placeholder": "<!>",
              "QueryWithPlaceholder": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.UserId.<!>.)",
              "IsSelected": false,
              "Name": "UserId",
              "DisplayName": "UserId",
              "Type": "RefinementAction"
          }
      ],
      "BreadCrumbs": [
          {
              "Lower": "50000",
              "Upper": "150000",
              "IndexName": "Mileage",
              "IndexDisplayName": "주행거리",
              "Type": "RangeBreadCrumb",
              "RemoveAction": "(And.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record.)"
          },
          {
              "Lower": "1500",
              "Upper": "4000",
              "IndexName": "Price",
              "IndexDisplayName": "가격",
              "Type": "RangeBreadCrumb",
              "RemoveAction": "(And.Mileage.range(50000..150000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record.)"
          },
          {
              "Aspect": "Hidden",
              "AspectDisplay": "숨김데이터",
              "Facet": "N",
              "FacetDisplay": "N",
              "Children": [],
              "Type": "FacetBreadCrumb",
              "RemoveAction": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record.)"
          },
          {
              "Aspect": "CarType",
              "AspectDisplay": "국산여부",
              "Facet": "Y",
              "FacetDisplay": "Y",
              "Children": [
                  {
                      "Aspect": "Manufacturer",
                      "AspectDisplay": "제조사",
                      "Facet": "기아",
                      "FacetDisplay": "기아",
                      "Children": [
                          {
                              "Aspect": "ModelGroup",
                              "AspectDisplay": "모델그룹",
                              "Facet": "쏘렌토",
                              "FacetDisplay": "쏘렌토",
                              "Children": [
                                  {
                                      "Aspect": "Model",
                                      "AspectDisplay": "모델",
                                      "Facet": "더 뉴 쏘렌토",
                                      "FacetDisplay": "더 뉴 쏘렌토",
                                      "Children": [],
                                      "Type": "FacetBreadCrumb",
                                      "RemoveAction": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.(C.Manufacturer.기아._.ModelGroup.쏘렌토.)))"
                                  }
                              ],
                              "Type": "FacetBreadCrumb",
                              "RemoveAction": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.(C.CarType.Y._.Manufacturer.기아.))"
                          }
                      ],
                      "Type": "FacetBreadCrumb",
                      "RemoveAction": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record._.CarType.Y.)"
                  }
              ],
              "Type": "FacetBreadCrumb",
              "RemoveAction": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection._.Condition.Record.)"
          },
          {
              "Aspect": "OfficeCityState",
              "AspectDisplay": "지역(시도)",
              "Facet": "서울",
              "FacetDisplay": "서울",
              "Children": [],
              "Type": "FacetBreadCrumb",
              "RemoveAction": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.OfficeCityState.경기.)"
          },
          {
              "Aspect": "OfficeCityState",
              "AspectDisplay": "지역(시도)",
              "Facet": "경기",
              "FacetDisplay": "경기",
              "Children": [],
              "Type": "FacetBreadCrumb",
              "RemoveAction": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.Condition.Inspection._.Condition.Record._.OfficeCityState.서울.)"
          },
          {
              "Aspect": "Condition",
              "AspectDisplay": "성능/보험 공개",
              "Facet": "Inspection",
              "FacetDisplay": "성능기록부",
              "Children": [],
              "Type": "FacetBreadCrumb",
              "RemoveAction": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Record.)"
          },
          {
              "Aspect": "Condition",
              "AspectDisplay": "성능/보험 공개",
              "Facet": "Record",
              "FacetDisplay": "보험이력",
              "Children": [],
              "Type": "FacetBreadCrumb",
              "RemoveAction": "(And.Mileage.range(50000..150000)._.Price.range(1500..4000)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.기아._.(C.ModelGroup.쏘렌토._.Model.더 뉴 쏘렌토.)))_.(Or.OfficeCityState.서울._.OfficeCityState.경기.)_.Condition.Inspection.)"
          }
      ]
  },
  "SearchResults": [
      {
          "Id": "35294258",
          "Separation": [
              "B"
          ],
          "Trust": [
              "ExtendWarranty",
              "HomeService"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture08/pic3528/35287296_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture08/pic3528/35287296_001.jpg",
                  "updatedDate": "2023-06-16T05:44:50Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture08/pic3528/35287296_003.jpg",
                  "updatedDate": "2023-06-16T05:44:50Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture08/pic3528/35287296_004.jpg",
                  "updatedDate": "2023-06-16T05:44:50Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture08/pic3528/35287296_007.jpg",
                  "updatedDate": "2023-06-16T05:44:50Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "노블레스 스페셜",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201801.0,
          "FormYear": "2018",
          "Mileage": 90171.0,
          "AdType": [],
          "HomeServiceVerification": "Y",
          "ServiceCopyCar": "DUPLICATION",
          "Price": 2470.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/vip7701.jpg"
      },
      {
          "Id": "35393363",
          "Separation": [
              "B"
          ],
          "Trust": [
              "ExtendWarranty",
              "HomeService"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture08/pic3538/35388513_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture08/pic3538/35388513_001.jpg",
                  "updatedDate": "2023-06-30T02:43:38Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture08/pic3538/35388513_003.jpg",
                  "updatedDate": "2023-06-30T02:43:38Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture08/pic3538/35388513_004.jpg",
                  "updatedDate": "2023-06-30T02:43:38Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture08/pic3538/35388513_007.jpg",
                  "updatedDate": "2023-06-30T02:43:38Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 4WD",
          "BadgeDetail": "마스터 스페셜",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201907.0,
          "FormYear": "2020",
          "Mileage": 72998.0,
          "AdType": [],
          "ServiceCopyCar": "DUPLICATION",
          "Price": 2850.0,
          "OfficeCityState": "서울",
          "DealerPhoto": "/userdata/dealer/photo/dudals3000.jpg"
      },
      {
          "Id": "35418097",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture01/pic3541/35418097_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture01/pic3541/35418097_001.jpg",
                  "updatedDate": "2023-07-05T00:08:48Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture01/pic3541/35418097_003.jpg",
                  "updatedDate": "2023-07-05T00:08:48Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture01/pic3541/35418097_004.jpg",
                  "updatedDate": "2023-07-05T00:08:48Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture01/pic3541/35418097_007.jpg",
                  "updatedDate": "2023-07-05T00:08:48Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 4WD",
          "BadgeDetail": "프레스티지",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201812.0,
          "FormYear": "2019",
          "Mileage": 99731.0,
          "AdType": [
              "G"
          ],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2200.0,
          "OfficeCityState": "서울",
          "DealerPhoto": "/userdata/dealer/photo/dlwjddls69.jpg"
      },
      {
          "Id": "35287296",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty",
              "ExtendWarranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture08/pic3528/35287296_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture08/pic3528/35287296_001.jpg",
                  "updatedDate": "2023-06-16T05:44:50Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture08/pic3528/35287296_003.jpg",
                  "updatedDate": "2023-06-16T05:44:50Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture08/pic3528/35287296_004.jpg",
                  "updatedDate": "2023-06-16T05:44:50Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture08/pic3528/35287296_007.jpg",
                  "updatedDate": "2023-06-16T05:44:50Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "노블레스 스페셜",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201801.0,
          "FormYear": "2018",
          "Mileage": 90171.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2470.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/vip7701.jpg"
      },
      {
          "Id": "35388513",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty",
              "ExtendWarranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture08/pic3538/35388513_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture08/pic3538/35388513_001.jpg",
                  "updatedDate": "2023-06-30T02:43:38Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture08/pic3538/35388513_003.jpg",
                  "updatedDate": "2023-06-30T02:43:38Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture08/pic3538/35388513_004.jpg",
                  "updatedDate": "2023-06-30T02:43:38Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture08/pic3538/35388513_007.jpg",
                  "updatedDate": "2023-06-30T02:43:38Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 4WD",
          "BadgeDetail": "마스터 스페셜",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201907.0,
          "FormYear": "2020",
          "Mileage": 72998.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2850.0,
          "OfficeCityState": "서울",
          "DealerPhoto": "/userdata/dealer/photo/dudals3000.jpg"
      },
      {
          "Id": "35424949",
          "Separation": [
              "B"
          ],
          "Trust": [
              "HomeService"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture02/pic3542/35422006_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture02/pic3542/35422006_001.jpg",
                  "updatedDate": "2023-07-04T07:05:13Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture02/pic3542/35422006_003.jpg",
                  "updatedDate": "2023-07-04T07:05:13Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture02/pic3542/35422006_004.jpg",
                  "updatedDate": "2023-07-04T07:05:13Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture02/pic3542/35422006_007.jpg",
                  "updatedDate": "2023-07-04T07:05:13Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "프레스티지",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201806.0,
          "FormYear": "2019",
          "Mileage": 69794.0,
          "AdType": [],
          "ServiceCopyCar": "DUPLICATION",
          "Price": 2170.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/man1597.jpg"
      },
      {
          "Id": "35229972",
          "Separation": [
              "B"
          ],
          "Trust": [
              "HomeService"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture01/pic3521/35216139_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture01/pic3521/35216139_001.jpg",
                  "updatedDate": "2023-06-08T05:31:33Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture01/pic3521/35216139_003.jpg",
                  "updatedDate": "2023-06-08T05:31:33Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture01/pic3521/35216139_004.jpg",
                  "updatedDate": "2023-06-08T05:31:33Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture01/pic3521/35216139_007.jpg",
                  "updatedDate": "2023-06-08T05:31:33Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "가솔린 2.0 터보 4WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "가솔린",
          "Year": 201802.0,
          "FormYear": "2018",
          "Mileage": 69070.0,
          "AdType": [],
          "ServiceCopyCar": "DUPLICATION",
          "Price": 2790.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/cha8209.jpg"
      },
      {
          "Id": "35216139",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture01/pic3521/35216139_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture01/pic3521/35216139_001.jpg",
                  "updatedDate": "2023-06-08T05:31:33Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture01/pic3521/35216139_003.jpg",
                  "updatedDate": "2023-06-08T05:31:33Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture01/pic3521/35216139_004.jpg",
                  "updatedDate": "2023-06-08T05:31:33Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture01/pic3521/35216139_007.jpg",
                  "updatedDate": "2023-06-08T05:31:33Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "가솔린 2.0 터보 4WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "가솔린",
          "Year": 201802.0,
          "FormYear": "2018",
          "Mileage": 69070.0,
          "AdType": [
              "G"
          ],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2790.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/cha8209.jpg"
      },
      {
          "Id": "35422006",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture02/pic3542/35422006_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture02/pic3542/35422006_001.jpg",
                  "updatedDate": "2023-07-04T07:05:13Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture02/pic3542/35422006_003.jpg",
                  "updatedDate": "2023-07-04T07:05:13Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture02/pic3542/35422006_004.jpg",
                  "updatedDate": "2023-07-04T07:05:13Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture02/pic3542/35422006_007.jpg",
                  "updatedDate": "2023-07-04T07:05:13Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "프레스티지",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201806.0,
          "FormYear": "2019",
          "Mileage": 69794.0,
          "AdType": [
              "A",
              "B",
              "C",
              "D",
              "E"
          ],
          "MobileAdWords": "&#9989;스마트키&#9989;완전무사고&#9989;정품네비&#9989;통풍시트&#9989;하이패스&#9989;",
          "Hotmark": "14;20;22",
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2170.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/man1597.jpg"
      },
      {
          "Id": "35433415",
          "Separation": [
              "B"
          ],
          "Trust": [
              "ExtendWarranty",
              "HomeService"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture01/pic3541/35418447_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture01/pic3541/35418447_001.jpg",
                  "updatedDate": "2023-07-05T05:04:13Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture01/pic3541/35418447_003.jpg",
                  "updatedDate": "2023-07-05T05:04:13Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture01/pic3541/35418447_004.jpg",
                  "updatedDate": "2023-07-05T05:04:13Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture01/pic3541/35418447_007.jpg",
                  "updatedDate": "2023-07-05T05:04:13Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "노블레스 스페셜",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201810.0,
          "FormYear": "2019",
          "Mileage": 78579.0,
          "AdType": [],
          "ServiceCopyCar": "DUPLICATION",
          "Price": 2520.0,
          "OfficeCityState": "서울",
          "DealerPhoto": "/userdata/dealer/photo/ppakppak2.jpg"
      },
      {
          "Id": "35047236",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty",
              "ExtendWarranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture04/pic3504/35047236_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture04/pic3504/35047236_001.jpg",
                  "updatedDate": "2023-05-15T05:20:56Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture04/pic3504/35047236_003.jpg",
                  "updatedDate": "2023-05-15T05:20:56Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture04/pic3504/35047236_004.jpg",
                  "updatedDate": "2023-05-15T05:20:56Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture04/pic3504/35047236_007.jpg",
                  "updatedDate": "2023-05-15T05:20:56Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 2WD",
          "BadgeDetail": "마스터 스페셜",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201911.0,
          "FormYear": "2020",
          "Mileage": 76031.0,
          "AdType": [
              "G"
          ],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2700.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/danmuge11.jpg"
      },
      {
          "Id": "35143801",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture04/pic3514/35143801_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture04/pic3514/35143801_001.jpg",
                  "updatedDate": "2023-05-30T02:04:09Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture04/pic3514/35143801_003.jpg",
                  "updatedDate": "2023-05-30T02:04:09Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture04/pic3514/35143801_004.jpg",
                  "updatedDate": "2023-05-30T02:04:09Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture04/pic3514/35143801_007.jpg",
                  "updatedDate": "2023-05-30T02:04:09Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 4WD",
          "BadgeDetail": "마스터",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201911.0,
          "FormYear": "2020",
          "Mileage": 75377.0,
          "AdType": [
              "G"
          ],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2590.0,
          "OfficeCityState": "서울",
          "DealerPhoto": "/userdata/dealer/photo/autoplus1106.jpg"
      },
      {
          "Id": "35418447",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty",
              "ExtendWarranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture01/pic3541/35418447_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture01/pic3541/35418447_001.jpg",
                  "updatedDate": "2023-07-05T05:04:13Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture01/pic3541/35418447_003.jpg",
                  "updatedDate": "2023-07-05T05:04:13Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture01/pic3541/35418447_004.jpg",
                  "updatedDate": "2023-07-05T05:04:13Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture01/pic3541/35418447_007.jpg",
                  "updatedDate": "2023-07-05T05:04:13Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "노블레스 스페셜",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201810.0,
          "FormYear": "2019",
          "Mileage": 78579.0,
          "AdType": [
              "G"
          ],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2520.0,
          "OfficeCityState": "서울",
          "DealerPhoto": "/userdata/dealer/photo/ppakppak2.jpg"
      },
      {
          "Id": "35477742",
          "Separation": [
              "B"
          ],
          "Trust": [
              "ExtendWarranty",
              "HomeService"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture06/pic3546/35463797_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture06/pic3546/35463797_001.jpg",
                  "updatedDate": "2023-07-11T02:01:02Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture06/pic3546/35463797_003.jpg",
                  "updatedDate": "2023-07-11T02:01:02Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture06/pic3546/35463797_004.jpg",
                  "updatedDate": "2023-07-11T02:01:02Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture06/pic3546/35463797_007.jpg",
                  "updatedDate": "2023-07-11T02:01:02Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 4WD",
          "BadgeDetail": "마스터",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201912.0,
          "FormYear": "2020",
          "Mileage": 55880.0,
          "AdType": [],
          "ServiceCopyCar": "DUPLICATION",
          "Price": 3120.0,
          "OfficeCityState": "서울",
          "DealerPhoto": "/userdata/dealer/photo/ppakppak2.jpg"
      },
      {
          "Id": "34118364",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture01/pic3411/34118364_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture01/pic3411/34118364_001.jpg",
                  "updatedDate": "2023-01-03T05:42:43Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture01/pic3411/34118364_003.jpg",
                  "updatedDate": "2023-01-03T05:42:43Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture01/pic3411/34118364_004.jpg",
                  "updatedDate": "2023-01-03T05:42:43Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture01/pic3411/34118364_007.jpg",
                  "updatedDate": "2023-01-03T05:42:43Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 2WD",
          "BadgeDetail": "마스터 스페셜",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201903.0,
          "FormYear": "2020",
          "Mileage": 88427.0,
          "AdType": [
              "G"
          ],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2390.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/glakehtk.jpg"
      },
      {
          "Id": "35448447",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture04/pic3544/35448447_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture04/pic3544/35448447_001.jpg",
                  "updatedDate": "2023-07-07T06:27:12Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture04/pic3544/35448447_003.jpg",
                  "updatedDate": "2023-07-07T06:27:12Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture04/pic3544/35448447_004.jpg",
                  "updatedDate": "2023-07-07T06:27:12Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture04/pic3544/35448447_007.jpg",
                  "updatedDate": "2023-07-07T06:27:12Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 2WD",
          "BadgeDetail": "노블레스 스페셜",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201711.0,
          "FormYear": "2018",
          "Mileage": 61038.0,
          "AdType": [
              "G"
          ],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2220.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/glakehtk.jpg"
      },
      {
          "Id": "35463797",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty",
              "ExtendWarranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture06/pic3546/35463797_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture06/pic3546/35463797_001.jpg",
                  "updatedDate": "2023-07-11T02:01:02Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture06/pic3546/35463797_003.jpg",
                  "updatedDate": "2023-07-11T02:01:02Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture06/pic3546/35463797_004.jpg",
                  "updatedDate": "2023-07-11T02:01:02Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture06/pic3546/35463797_007.jpg",
                  "updatedDate": "2023-07-11T02:01:02Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 4WD",
          "BadgeDetail": "마스터",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201912.0,
          "FormYear": "2020",
          "Mileage": 55880.0,
          "AdType": [
              "G"
          ],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 3120.0,
          "OfficeCityState": "서울",
          "DealerPhoto": "/userdata/dealer/photo/ppakppak2.jpg"
      },
      {
          "Id": "32482190",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture08/pic3248/32482190_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture08/pic3248/32482190_001.jpg",
                  "updatedDate": "2022-05-03T07:00:19Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture08/pic3248/32482190_003.jpg",
                  "updatedDate": "2022-05-03T07:00:19Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture08/pic3248/32482190_004.jpg",
                  "updatedDate": "2022-05-03T07:00:19Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture08/pic3248/32482190_007.jpg",
                  "updatedDate": "2022-05-03T07:00:19Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "마스터",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201806.0,
          "FormYear": "2019",
          "Mileage": 105093.0,
          "AdType": [
              "A",
              "B",
              "C",
              "D",
              "E"
          ],
          "MobileAdWords": "차선이탈/후측방/개인위탁 취득세 저렴",
          "Hotmark": "09;11;28",
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2190.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/qlsdlekt1.jpg"
      },
      {
          "Id": "34611762",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture01/pic3461/34611762_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture01/pic3461/34611762_001.jpg",
                  "updatedDate": "2023-03-16T02:35:42Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture01/pic3461/34611762_003.jpg",
                  "updatedDate": "2023-03-16T02:35:42Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture01/pic3461/34611762_004.jpg",
                  "updatedDate": "2023-03-16T02:35:42Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture01/pic3461/34611762_007.jpg",
                  "updatedDate": "2023-03-16T02:35:42Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "프레스티지",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201810.0,
          "FormYear": "2019",
          "Mileage": 56912.0,
          "AdType": [
              "A",
              "B",
              "C",
              "D"
          ],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2049.0,
          "OfficeCityState": "서울",
          "DealerPhoto": "/userdata/dealer/photo/zz27.jpg"
      },
      {
          "Id": "35376891",
          "Separation": [
              "B"
          ],
          "Trust": [
              "ExtendWarranty",
              "HomeService"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture06/pic3536/35361031_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture06/pic3536/35361031_001.jpg",
                  "updatedDate": "2023-06-28T06:16:55Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture06/pic3536/35361031_003.jpg",
                  "updatedDate": "2023-06-28T06:16:55Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture06/pic3536/35361031_004.jpg",
                  "updatedDate": "2023-06-28T06:16:55Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture06/pic3536/35361031_007.jpg",
                  "updatedDate": "2023-06-28T06:16:55Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "노블레스 스페셜",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201708.0,
          "FormYear": "2018",
          "Mileage": 130932.0,
          "AdType": [],
          "ServiceCopyCar": "DUPLICATION",
          "Price": 2000.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/hayun1.jpg"
      },
      {
          "Id": "35469461",
          "Separation": [
              "B"
          ],
          "Trust": [
              "ExtendWarranty",
              "HomeService"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture06/pic3536/35361744_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture06/pic3536/35361744_001.jpg",
                  "updatedDate": "2023-06-27T07:10:06Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture06/pic3536/35361744_003.jpg",
                  "updatedDate": "2023-06-27T07:10:06Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture06/pic3536/35361744_004.jpg",
                  "updatedDate": "2023-06-27T07:10:06Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture06/pic3536/35361744_007.jpg",
                  "updatedDate": "2023-06-27T07:10:06Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "프레스티지",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201808.0,
          "FormYear": "2019",
          "Mileage": 102527.0,
          "AdType": [],
          "ServiceCopyCar": "DUPLICATION",
          "Price": 1810.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/ddashiki.jpg"
      },
      {
          "Id": "35386368",
          "Separation": [
              "B"
          ],
          "Trust": [
              "ExtendWarranty",
              "HomeService"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture07/pic3537/35371537_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture07/pic3537/35371537_001.jpg",
                  "updatedDate": "2023-06-29T06:53:22Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture07/pic3537/35371537_003.jpg",
                  "updatedDate": "2023-06-29T06:53:22Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture07/pic3537/35371537_004.jpg",
                  "updatedDate": "2023-06-29T06:53:22Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture07/pic3537/35371537_007.jpg",
                  "updatedDate": "2023-06-29T06:53:22Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 2WD",
          "BadgeDetail": "마스터",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201807.0,
          "FormYear": "2019",
          "Mileage": 59277.0,
          "AdType": [],
          "ServiceCopyCar": "DUPLICATION",
          "Price": 2690.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/sksk7075.jpg"
      },
      {
          "Id": "35422852",
          "Separation": [
              "B"
          ],
          "Trust": [
              "HomeService"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture01/pic3541/35419203_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture01/pic3541/35419203_001.jpg",
                  "updatedDate": "2023-07-04T04:59:07Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture01/pic3541/35419203_003.jpg",
                  "updatedDate": "2023-07-04T04:59:07Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture01/pic3541/35419203_004.jpg",
                  "updatedDate": "2023-07-04T04:59:07Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture01/pic3541/35419203_007.jpg",
                  "updatedDate": "2023-07-04T04:59:07Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "마스터",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201907.0,
          "FormYear": "2020",
          "Mileage": 72872.0,
          "AdType": [],
          "ServiceCopyCar": "DUPLICATION",
          "Price": 2390.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/toohot79.jpg"
      },
      {
          "Id": "35277421",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture07/pic3527/35277421_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture07/pic3527/35277421_001.jpg",
                  "updatedDate": "2023-06-15T06:03:32Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture07/pic3527/35277421_003.jpg",
                  "updatedDate": "2023-06-15T06:03:32Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture07/pic3527/35277421_004.jpg",
                  "updatedDate": "2023-06-15T06:03:32Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture07/pic3527/35277421_007.jpg",
                  "updatedDate": "2023-06-15T06:03:32Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "가솔린 2.0 터보 2WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "가솔린",
          "Year": 201803.0,
          "FormYear": "2018",
          "Mileage": 100719.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2420.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/hepis0819.jpg"
      },
      {
          "Id": "35361031",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty",
              "ExtendWarranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture06/pic3536/35361031_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture06/pic3536/35361031_001.jpg",
                  "updatedDate": "2023-06-28T06:16:55Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture06/pic3536/35361031_003.jpg",
                  "updatedDate": "2023-06-28T06:16:55Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture06/pic3536/35361031_004.jpg",
                  "updatedDate": "2023-06-28T06:16:55Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture06/pic3536/35361031_007.jpg",
                  "updatedDate": "2023-06-28T06:16:55Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "노블레스 스페셜",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201708.0,
          "FormYear": "2018",
          "Mileage": 130932.0,
          "AdType": [
              "A",
              "B",
              "C",
              "D",
              "E"
          ],
          "MobileAdWords": "&#9989;무사고&#9989;파썬&#9989;브라운시트&#9989;5인승&#9989;스마트키2개&#9989;",
          "Hotmark": "10;22;24",
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2000.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/hayun1.jpg"
      },
      {
          "Id": "35361744",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty",
              "ExtendWarranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture06/pic3536/35361744_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture06/pic3536/35361744_001.jpg",
                  "updatedDate": "2023-06-27T07:10:06Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture06/pic3536/35361744_003.jpg",
                  "updatedDate": "2023-06-27T07:10:06Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture06/pic3536/35361744_004.jpg",
                  "updatedDate": "2023-06-27T07:10:06Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture06/pic3536/35361744_007.jpg",
                  "updatedDate": "2023-06-27T07:10:06Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "프레스티지",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201808.0,
          "FormYear": "2019",
          "Mileage": 102527.0,
          "AdType": [
              "E"
          ],
          "MobileAdWords": "무사고 보험이력 無 실시간 증강내비게이션",
          "ServiceCopyCar": "ORIGINAL",
          "Price": 1810.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/ddashiki.jpg"
      },
      {
          "Id": "35419203",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture01/pic3541/35419203_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture01/pic3541/35419203_001.jpg",
                  "updatedDate": "2023-07-04T04:59:07Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture01/pic3541/35419203_003.jpg",
                  "updatedDate": "2023-07-04T04:59:07Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture01/pic3541/35419203_004.jpg",
                  "updatedDate": "2023-07-04T04:59:07Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture01/pic3541/35419203_007.jpg",
                  "updatedDate": "2023-07-04T04:59:07Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "마스터",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201907.0,
          "FormYear": "2020",
          "Mileage": 72872.0,
          "AdType": [
              "A",
              "B",
              "C",
              "D",
              "E"
          ],
          "MobileAdWords": "&#9989;전액할부&대차가능 &#9989;무사고 &#9989;브라운 시트-신차 컨디션",
          "Hotmark": "11;13;26",
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2390.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/toohot79.jpg"
      },
      {
          "Id": "34929804",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty",
              "ExtendWarranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture02/pic3492/34929804_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture02/pic3492/34929804_001.jpg",
                  "updatedDate": "2023-04-27T06:50:51Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture02/pic3492/34929804_003.jpg",
                  "updatedDate": "2023-04-27T06:50:51Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture02/pic3492/34929804_004.jpg",
                  "updatedDate": "2023-04-27T06:50:51Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture02/pic3492/34929804_007.jpg",
                  "updatedDate": "2023-04-27T06:50:51Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 4WD",
          "BadgeDetail": "마스터",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201812.0,
          "FormYear": "2019",
          "Mileage": 66521.0,
          "AdType": [
              "A",
              "B",
              "C",
              "D",
              "E"
          ],
          "MobileAdWords": "&#9989;무사고&#9989;썬루프&#9989;브라운시트&#9989;JBL+UVO 네비+HUD+SVM+SCC&#9989;",
          "Hotmark": "09;14;20",
          "ServiceCopyCar": "ORIGINAL",
          "Price": 3360.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/jack81.jpg"
      },
      {
          "Id": "35371537",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty",
              "ExtendWarranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture07/pic3537/35371537_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture07/pic3537/35371537_001.jpg",
                  "updatedDate": "2023-06-29T06:53:22Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture07/pic3537/35371537_003.jpg",
                  "updatedDate": "2023-06-29T06:53:22Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture07/pic3537/35371537_004.jpg",
                  "updatedDate": "2023-06-29T06:53:22Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture07/pic3537/35371537_007.jpg",
                  "updatedDate": "2023-06-29T06:53:22Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 2WD",
          "BadgeDetail": "마스터",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201807.0,
          "FormYear": "2019",
          "Mileage": 59277.0,
          "AdType": [
              "G"
          ],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2690.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/sksk7075.jpg"
      },
      {
          "Id": "35323072",
          "Separation": [
              "B"
          ],
          "Trust": [
              "HomeService"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture01/pic3531/35319468_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture01/pic3531/35319468_001.jpg",
                  "updatedDate": "2023-06-21T01:23:25Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture01/pic3531/35319468_003.jpg",
                  "updatedDate": "2023-06-21T01:23:25Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture01/pic3531/35319468_004.jpg",
                  "updatedDate": "2023-06-21T01:23:25Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture01/pic3531/35319468_007.jpg",
                  "updatedDate": "2023-06-21T01:23:25Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 4WD",
          "BadgeDetail": "프레스티지",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201810.0,
          "FormYear": "2019",
          "Mileage": 102846.0,
          "AdType": [],
          "ServiceCopyCar": "DUPLICATION",
          "Price": 2050.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/ysh0668.jpg"
      },
      {
          "Id": "35319468",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture01/pic3531/35319468_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture01/pic3531/35319468_001.jpg",
                  "updatedDate": "2023-06-21T01:23:25Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture01/pic3531/35319468_003.jpg",
                  "updatedDate": "2023-06-21T01:23:25Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture01/pic3531/35319468_004.jpg",
                  "updatedDate": "2023-06-21T01:23:25Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture01/pic3531/35319468_007.jpg",
                  "updatedDate": "2023-06-21T01:23:25Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 4WD",
          "BadgeDetail": "프레스티지",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201810.0,
          "FormYear": "2019",
          "Mileage": 102846.0,
          "AdType": [
              "G"
          ],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2050.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/ysh0668.jpg"
      },
      {
          "Id": "35457208",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture05/pic3545/35457208_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture05/pic3545/35457208_001.jpg",
                  "updatedDate": "2023-07-10T06:06:57Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture05/pic3545/35457208_003.jpg",
                  "updatedDate": "2023-07-10T06:06:57Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture05/pic3545/35457208_004.jpg",
                  "updatedDate": "2023-07-10T06:06:57Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture05/pic3545/35457208_007.jpg",
                  "updatedDate": "2023-07-10T06:06:57Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "프레스티지",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201910.0,
          "FormYear": "2020",
          "Mileage": 111322.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 3200.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/acelife01.jpg"
      },
      {
          "Id": "35226818",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture02/pic3522/35226818_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture02/pic3522/35226818_001.jpg",
                  "updatedDate": "2023-06-08T01:56:11Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture02/pic3522/35226818_003.jpg",
                  "updatedDate": "2023-06-08T01:56:11Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture02/pic3522/35226818_004.jpg",
                  "updatedDate": "2023-06-08T01:56:11Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture02/pic3522/35226818_007.jpg",
                  "updatedDate": "2023-06-08T01:56:11Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 4WD",
          "BadgeDetail": "프레스티지",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201806.0,
          "FormYear": "2019",
          "Mileage": 102893.0,
          "AdType": [
              "G"
          ],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 1890.0,
          "OfficeCityState": "경기"
      },
      {
          "Id": "35451077",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture05/pic3545/35451077_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture05/pic3545/35451077_001.jpg",
                  "updatedDate": "2023-07-07T00:33:01Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture05/pic3545/35451077_003.jpg",
                  "updatedDate": "2023-07-07T00:33:01Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture05/pic3545/35451077_004.jpg",
                  "updatedDate": "2023-07-07T00:33:01Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture05/pic3545/35451077_007.jpg",
                  "updatedDate": "2023-07-07T00:33:01Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201806.0,
          "FormYear": "2019",
          "Mileage": 61297.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2050.0,
          "OfficeCityState": "서울",
          "DealerPhoto": "/userdata/dealer/photo/jyans11.jpg"
      },
      {
          "Id": "31843312",
          "Separation": [
              "B"
          ],
          "Trust": [
              "HomeService"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture02/pic3182/31826159_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture02/pic3182/31826159_001.jpg",
                  "updatedDate": "2022-05-20T02:48:50Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture02/pic3182/31826159_003.jpg",
                  "updatedDate": "2022-05-20T02:48:50Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture02/pic3182/31826159_004.jpg",
                  "updatedDate": "2022-05-20T02:48:50Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture02/pic3182/31826159_007.jpg",
                  "updatedDate": "2022-05-20T02:48:50Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 2WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201804.0,
          "FormYear": "2018",
          "Mileage": 57362.0,
          "AdType": [
              "A",
              "B",
              "C",
              "D",
              "E"
          ],
          "MobileAdWords": "엔카보증 ▶무사고,전동/열선/통풍시트,정품네비,전동트렁크◀",
          "Hotmark": "19;24;26",
          "HomeServiceVerification": "Y",
          "ServiceCopyCar": "DUPLICATION",
          "Price": 2270.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/ldg0748.jpg"
      },
      {
          "Id": "35356875",
          "Separation": [
              "B"
          ],
          "Trust": [
              "ExtendWarranty",
              "HomeService"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture05/pic3535/35354226_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture05/pic3535/35354226_001.jpg",
                  "updatedDate": "2023-06-26T23:37:31Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture05/pic3535/35354226_003.jpg",
                  "updatedDate": "2023-06-26T23:37:31Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture05/pic3535/35354226_004.jpg",
                  "updatedDate": "2023-06-26T23:37:31Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture05/pic3535/35354226_007.jpg",
                  "updatedDate": "2023-06-26T23:37:31Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201806.0,
          "FormYear": "2019",
          "Mileage": 83434.0,
          "AdType": [],
          "ServiceCopyCar": "DUPLICATION",
          "Price": 2220.0,
          "OfficeCityState": "서울",
          "DealerPhoto": "/userdata/dealer/photo/equus0353.jpg"
      },
      {
          "Id": "31826159",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture02/pic3182/31826159_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture02/pic3182/31826159_001.jpg",
                  "updatedDate": "2022-05-20T02:48:50Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture02/pic3182/31826159_003.jpg",
                  "updatedDate": "2022-05-20T02:48:50Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture02/pic3182/31826159_004.jpg",
                  "updatedDate": "2022-05-20T02:48:50Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture02/pic3182/31826159_007.jpg",
                  "updatedDate": "2022-05-20T02:48:50Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 2WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201804.0,
          "FormYear": "2018",
          "Mileage": 57362.0,
          "AdType": [
              "A",
              "B",
              "C",
              "D",
              "E"
          ],
          "MobileAdWords": "엔카보증 ▶무사고,전동/열선/통풍시트,정품네비,전동트렁크◀",
          "Hotmark": "19;24;26",
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2270.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/ldg0748.jpg"
      },
      {
          "Id": "35354226",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty",
              "ExtendWarranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture05/pic3535/35354226_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture05/pic3535/35354226_001.jpg",
                  "updatedDate": "2023-06-26T23:37:31Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture05/pic3535/35354226_003.jpg",
                  "updatedDate": "2023-06-26T23:37:31Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture05/pic3535/35354226_004.jpg",
                  "updatedDate": "2023-06-26T23:37:31Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture05/pic3535/35354226_007.jpg",
                  "updatedDate": "2023-06-26T23:37:31Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201806.0,
          "FormYear": "2019",
          "Mileage": 83434.0,
          "AdType": [
              "G"
          ],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2220.0,
          "OfficeCityState": "서울",
          "DealerPhoto": "/userdata/dealer/photo/equus0353.jpg"
      },
      {
          "Id": "35487339",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture08/pic3548/35487339_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture08/pic3548/35487339_001.jpg",
                  "updatedDate": "2023-07-12T04:49:48Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture08/pic3548/35487339_003.jpg",
                  "updatedDate": "2023-07-12T04:49:48Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture08/pic3548/35487339_004.jpg",
                  "updatedDate": "2023-07-12T04:49:48Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture08/pic3548/35487339_007.jpg",
                  "updatedDate": "2023-07-12T04:49:48Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "가솔린 2.0 터보 2WD",
          "BadgeDetail": "프레스티지",
          "Transmission": "오토",
          "FuelType": "가솔린",
          "Year": 201804.0,
          "FormYear": "2018",
          "Mileage": 53130.0,
          "AdType": [
              "G"
          ],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2590.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/dlawncjf.jpg"
      },
      {
          "Id": "35314268",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture01/pic3531/35314268_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture01/pic3531/35314268_001.jpg",
                  "updatedDate": "2023-06-21T02:00:48Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture01/pic3531/35314268_003.jpg",
                  "updatedDate": "2023-06-21T02:00:48Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture01/pic3531/35314268_004.jpg",
                  "updatedDate": "2023-06-21T02:00:48Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture01/pic3531/35314268_007.jpg",
                  "updatedDate": "2023-06-21T02:00:48Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201809.0,
          "FormYear": "2019",
          "Mileage": 52575.0,
          "AdType": [
              "A",
              "B",
              "C",
              "D",
              "E"
          ],
          "MobileAdWords": "HOT~!!무사고~!!엔카진단차량~이번주이가격~!!전국최저가 급매~",
          "Hotmark": "02;14;17",
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2457.0,
          "OfficeCityState": "서울",
          "DealerPhoto": "/userdata/dealer/photo/as19876.jpg"
      },
      {
          "Id": "35395311",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture09/pic3539/35395311_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture09/pic3539/35395311_001.jpg",
                  "updatedDate": "2023-06-30T05:50:32Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture09/pic3539/35395311_003.jpg",
                  "updatedDate": "2023-06-30T05:50:32Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture09/pic3539/35395311_004.jpg",
                  "updatedDate": "2023-06-30T05:50:32Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture09/pic3539/35395311_007.jpg",
                  "updatedDate": "2023-06-30T05:50:32Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "프레스티지",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201903.0,
          "FormYear": "2020",
          "Mileage": 75071.0,
          "AdType": [
              "A",
              "B",
              "C",
              "D"
          ],
          "Hotmark": "14;15;13",
          "ServiceCopyCar": "ORIGINAL",
          "Price": 1850.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/mbw2740.jpg"
      },
      {
          "Id": "35332939",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture03/pic3533/35332939_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture03/pic3533/35332939_001.jpg",
                  "updatedDate": "2023-06-22T06:43:18Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture03/pic3533/35332939_003.jpg",
                  "updatedDate": "2023-06-22T06:43:18Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture03/pic3533/35332939_004.jpg",
                  "updatedDate": "2023-06-22T06:43:18Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture03/pic3533/35332939_007.jpg",
                  "updatedDate": "2023-06-22T06:43:18Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "마스터",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201905.0,
          "FormYear": "2020",
          "Mileage": 75723.0,
          "AdType": [
              "A",
              "B",
              "C",
              "D",
              "E"
          ],
          "MobileAdWords": "*엔카진단*무사고*브라운시트*특옵션*상태최상*최저가*",
          "Hotmark": "14;17;22",
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2350.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/purplelabe1.jpg"
      },
      {
          "Id": "35477447",
          "Separation": [
              "B"
          ],
          "Trust": [
              "ExtendWarranty",
              "HomeService"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture07/pic3547/35476609_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture07/pic3547/35476609_001.jpg",
                  "updatedDate": "2023-07-11T01:33:37Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture07/pic3547/35476609_003.jpg",
                  "updatedDate": "2023-07-11T01:33:37Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture07/pic3547/35476609_004.jpg",
                  "updatedDate": "2023-07-11T01:33:37Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture07/pic3547/35476609_007.jpg",
                  "updatedDate": "2023-07-11T01:33:37Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201906.0,
          "FormYear": "2020",
          "Mileage": 76862.0,
          "AdType": [
              "A",
              "B",
              "C",
              "D",
              "E"
          ],
          "MobileAdWords": "무사고/긴급제동/차선이탈/후측방센서/풀옵션 상태최상",
          "Hotmark": "11;13;28",
          "HomeServiceVerification": "Y",
          "ServiceCopyCar": "DUPLICATION",
          "Price": 2410.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/good8887.jpg"
      },
      {
          "Id": "35476609",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty",
              "ExtendWarranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture07/pic3547/35476609_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture07/pic3547/35476609_001.jpg",
                  "updatedDate": "2023-07-11T01:33:37Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture07/pic3547/35476609_003.jpg",
                  "updatedDate": "2023-07-11T01:33:37Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture07/pic3547/35476609_004.jpg",
                  "updatedDate": "2023-07-11T01:33:37Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture07/pic3547/35476609_007.jpg",
                  "updatedDate": "2023-07-11T01:33:37Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201906.0,
          "FormYear": "2020",
          "Mileage": 76862.0,
          "AdType": [
              "A",
              "B",
              "C",
              "D",
              "E"
          ],
          "MobileAdWords": "무사고/긴급제동/차선이탈/후측방센서/풀옵션 상태최상",
          "Hotmark": "11;13;28",
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2410.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/good8887.jpg"
      },
      {
          "Id": "35477803",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty",
              "ExtendWarranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture07/pic3547/35477803_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture07/pic3547/35477803_001.jpg",
                  "updatedDate": "2023-07-12T05:39:40Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture07/pic3547/35477803_003.jpg",
                  "updatedDate": "2023-07-12T05:39:40Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture07/pic3547/35477803_004.jpg",
                  "updatedDate": "2023-07-12T05:39:40Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture07/pic3547/35477803_007.jpg",
                  "updatedDate": "2023-07-12T05:39:40Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 2WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201801.0,
          "FormYear": "2018",
          "Mileage": 75909.0,
          "AdType": [
              "G"
          ],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2390.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/mir2373.jpg"
      },
      {
          "Id": "35251957",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture05/pic3525/35251957_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture05/pic3525/35251957_001.jpg",
                  "updatedDate": "2023-06-12T15:54:29Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture05/pic3525/35251957_003.jpg",
                  "updatedDate": "2023-06-12T15:54:29Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture05/pic3525/35251957_004.jpg",
                  "updatedDate": "2023-06-12T15:54:29Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture05/pic3525/35251957_007.jpg",
                  "updatedDate": "2023-06-12T15:54:29Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 4WD",
          "BadgeDetail": "노블레스 스페셜",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201711.0,
          "FormYear": "2018",
          "Mileage": 67631.0,
          "AdType": [
              "G"
          ],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2680.0,
          "SalesStatus": "CONTRACT",
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/abyssroma.jpg"
      },
      {
          "Id": "35138796",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture03/pic3513/35138796_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture03/pic3513/35138796_001.jpg",
                  "updatedDate": "2023-05-30T00:42:43Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture03/pic3513/35138796_003.jpg",
                  "updatedDate": "2023-05-30T00:42:43Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture03/pic3513/35138796_004.jpg",
                  "updatedDate": "2023-05-30T00:42:43Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture03/pic3513/35138796_007.jpg",
                  "updatedDate": "2023-05-30T00:42:43Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "가솔린 2.0 터보 4WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "가솔린",
          "Year": 201903.0,
          "FormYear": "2020",
          "Mileage": 87660.0,
          "AdType": [
              "A",
              "B",
              "C",
              "D"
          ],
          "Hotmark": "13;14;15",
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2430.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/qlalf4321.jpg"
      },
      {
          "Id": "35457072",
          "Separation": [
              "B"
          ],
          "Trust": [
              "HomeService"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture04/pic3544/35449701_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture04/pic3544/35449701_001.jpg",
                  "updatedDate": "2023-07-07T08:31:19Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture04/pic3544/35449701_003.jpg",
                  "updatedDate": "2023-07-07T08:31:19Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture04/pic3544/35449701_004.jpg",
                  "updatedDate": "2023-07-07T08:31:19Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture04/pic3544/35449701_007.jpg",
                  "updatedDate": "2023-07-07T08:31:19Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "프레스티지",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201901.0,
          "FormYear": "2019",
          "Mileage": 84653.0,
          "AdType": [],
          "ServiceCopyCar": "DUPLICATION",
          "Price": 1840.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/dlalsrb487.jpg"
      },
      {
          "Id": "35410295",
          "Separation": [
              "B"
          ],
          "Trust": [
              "ExtendWarranty",
              "HomeService"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture10/pic3540/35407736_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture10/pic3540/35407736_001.jpg",
                  "updatedDate": "2023-07-03T04:21:01Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture10/pic3540/35407736_003.jpg",
                  "updatedDate": "2023-07-03T04:21:01Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture10/pic3540/35407736_004.jpg",
                  "updatedDate": "2023-07-03T04:21:01Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture10/pic3540/35407736_007.jpg",
                  "updatedDate": "2023-07-03T04:21:01Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 2WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201803.0,
          "FormYear": "2018",
          "Mileage": 82242.0,
          "AdType": [],
          "ServiceCopyCar": "DUPLICATION",
          "Price": 2250.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/plusoner.jpg"
      },
      {
          "Id": "35441691",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture04/pic3544/35441691_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture04/pic3544/35441691_001.jpg",
                  "updatedDate": "2023-07-06T02:34:39Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture04/pic3544/35441691_003.jpg",
                  "updatedDate": "2023-07-06T02:34:39Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture04/pic3544/35441691_004.jpg",
                  "updatedDate": "2023-07-06T02:34:39Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture04/pic3544/35441691_007.jpg",
                  "updatedDate": "2023-07-06T02:34:39Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "프레스티지",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201711.0,
          "FormYear": "2018",
          "Mileage": 54000.0,
          "AdType": [
              "G"
          ],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2020.0,
          "OfficeCityState": "서울"
      },
      {
          "Id": "35222897",
          "Separation": [
              "B"
          ],
          "Trust": [
              "ExtendWarranty",
              "HomeService"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture05/pic3515/35154229_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture05/pic3515/35154229_001.jpg",
                  "updatedDate": "2023-05-31T07:40:50Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture05/pic3515/35154229_003.jpg",
                  "updatedDate": "2023-05-31T07:40:50Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture05/pic3515/35154229_004.jpg",
                  "updatedDate": "2023-05-31T07:40:50Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture05/pic3515/35154229_007.jpg",
                  "updatedDate": "2023-05-31T07:40:50Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 4WD",
          "BadgeDetail": "마스터",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201905.0,
          "FormYear": "2020",
          "Mileage": 91534.0,
          "AdType": [
              "A",
              "B",
              "C",
              "D",
              "E"
          ],
          "MobileAdWords": "전국최저가/완전무사고/비흡연/센터관리차량/소모품올교환/키2개",
          "Hotmark": "15;17;24",
          "HomeServiceVerification": "Y",
          "ServiceCopyCar": "DUPLICATION",
          "Price": 2699.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/kss9202.jpg"
      },
      {
          "Id": "35478290",
          "Separation": [
              "B"
          ],
          "Trust": [
              "ExtendWarranty",
              "HomeService"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture06/pic3546/35463830_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture06/pic3546/35463830_001.jpg",
                  "updatedDate": "2023-07-11T02:36:45Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture06/pic3546/35463830_003.jpg",
                  "updatedDate": "2023-07-11T02:36:45Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture06/pic3546/35463830_004.jpg",
                  "updatedDate": "2023-07-11T02:36:45Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture06/pic3546/35463830_007.jpg",
                  "updatedDate": "2023-07-11T02:36:45Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "가솔린 2.0 터보 2WD",
          "BadgeDetail": "프레스티지",
          "Transmission": "오토",
          "FuelType": "가솔린",
          "Year": 201910.0,
          "FormYear": "2020",
          "Mileage": 57805.0,
          "AdType": [],
          "ServiceCopyCar": "DUPLICATION",
          "Price": 2520.0,
          "OfficeCityState": "서울",
          "DealerPhoto": "/userdata/dealer/photo/ppakppak2.jpg"
      },
      {
          "Id": "35449701",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture04/pic3544/35449701_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture04/pic3544/35449701_001.jpg",
                  "updatedDate": "2023-07-07T08:31:19Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture04/pic3544/35449701_003.jpg",
                  "updatedDate": "2023-07-07T08:31:19Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture04/pic3544/35449701_004.jpg",
                  "updatedDate": "2023-07-07T08:31:19Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture04/pic3544/35449701_007.jpg",
                  "updatedDate": "2023-07-07T08:31:19Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "프레스티지",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201901.0,
          "FormYear": "2019",
          "Mileage": 84653.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 1840.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/dlalsrb487.jpg"
      },
      {
          "Id": "35254782",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture05/pic3525/35254782_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture05/pic3525/35254782_001.jpg",
                  "updatedDate": "2023-06-13T00:38:22Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture05/pic3525/35254782_003.jpg",
                  "updatedDate": "2023-06-13T00:38:22Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture05/pic3525/35254782_004.jpg",
                  "updatedDate": "2023-06-13T00:38:22Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture05/pic3525/35254782_007.jpg",
                  "updatedDate": "2023-06-13T00:38:22Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "럭셔리",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201911.0,
          "FormYear": "2020",
          "Mileage": 89745.0,
          "AdType": [
              "A",
              "B",
              "C",
              "D"
          ],
          "Hotmark": "14;15;13",
          "ServiceCopyCar": "ORIGINAL",
          "Price": 1720.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/yehazzang.jpg"
      },
      {
          "Id": "35154229",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty",
              "ExtendWarranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture05/pic3515/35154229_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture05/pic3515/35154229_001.jpg",
                  "updatedDate": "2023-05-31T07:40:50Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture05/pic3515/35154229_003.jpg",
                  "updatedDate": "2023-05-31T07:40:50Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture05/pic3515/35154229_004.jpg",
                  "updatedDate": "2023-05-31T07:40:50Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture05/pic3515/35154229_007.jpg",
                  "updatedDate": "2023-05-31T07:40:50Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 4WD",
          "BadgeDetail": "마스터",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201905.0,
          "FormYear": "2020",
          "Mileage": 91534.0,
          "AdType": [
              "A",
              "B",
              "C",
              "D",
              "E"
          ],
          "MobileAdWords": "전국최저가/완전무사고/비흡연/센터관리차량/소모품올교환/키2개",
          "Hotmark": "15;17;24",
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2699.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/kss9202.jpg"
      },
      {
          "Id": "35463830",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty",
              "ExtendWarranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture06/pic3546/35463830_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture06/pic3546/35463830_001.jpg",
                  "updatedDate": "2023-07-11T02:36:45Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture06/pic3546/35463830_003.jpg",
                  "updatedDate": "2023-07-11T02:36:45Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture06/pic3546/35463830_004.jpg",
                  "updatedDate": "2023-07-11T02:36:45Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture06/pic3546/35463830_007.jpg",
                  "updatedDate": "2023-07-11T02:36:45Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "가솔린 2.0 터보 2WD",
          "BadgeDetail": "프레스티지",
          "Transmission": "오토",
          "FuelType": "가솔린",
          "Year": 201910.0,
          "FormYear": "2020",
          "Mileage": 57805.0,
          "AdType": [
              "G"
          ],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2520.0,
          "OfficeCityState": "서울",
          "DealerPhoto": "/userdata/dealer/photo/ppakppak2.jpg"
      },
      {
          "Id": "35407736",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty",
              "ExtendWarranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture10/pic3540/35407736_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture10/pic3540/35407736_001.jpg",
                  "updatedDate": "2023-07-03T04:21:01Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture10/pic3540/35407736_003.jpg",
                  "updatedDate": "2023-07-03T04:21:01Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture10/pic3540/35407736_004.jpg",
                  "updatedDate": "2023-07-03T04:21:01Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture10/pic3540/35407736_007.jpg",
                  "updatedDate": "2023-07-03T04:21:01Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 2WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201803.0,
          "FormYear": "2018",
          "Mileage": 82242.0,
          "AdType": [
              "G"
          ],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2250.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/plusoner.jpg"
      },
      {
          "Id": "35494013",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture09/pic3549/35494013_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture09/pic3549/35494013_001.jpg",
                  "updatedDate": "2023-07-12T08:38:32Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture09/pic3549/35494013_003.jpg",
                  "updatedDate": "2023-07-12T08:38:32Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture09/pic3549/35494013_004.jpg",
                  "updatedDate": "2023-07-12T08:38:32Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture09/pic3549/35494013_007.jpg",
                  "updatedDate": "2023-07-12T08:38:32Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 4WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201907.0,
          "FormYear": "2020",
          "Mileage": 84098.0,
          "AdType": [
              "A",
              "B",
              "C",
              "D"
          ],
          "Hotmark": "09;20;22",
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2750.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/amk8939.jpg"
      },
      {
          "Id": "35262188",
          "Separation": [
              "B"
          ],
          "Trust": [
              "ExtendWarranty",
              "HomeService"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture05/pic3525/35251213_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture05/pic3525/35251213_001.jpg",
                  "updatedDate": "2023-06-13T02:32:18Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture05/pic3525/35251213_003.jpg",
                  "updatedDate": "2023-06-13T02:32:18Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture05/pic3525/35251213_004.jpg",
                  "updatedDate": "2023-06-13T02:32:18Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture05/pic3525/35251213_007.jpg",
                  "updatedDate": "2023-06-13T02:32:18Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 4WD",
          "BadgeDetail": "마스터",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201808.0,
          "FormYear": "2019",
          "Mileage": 51321.0,
          "AdType": [],
          "HomeServiceVerification": "Y",
          "ServiceCopyCar": "DUPLICATION",
          "Price": 2740.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/uiseon5664.jpg"
      },
      {
          "Id": "35251213",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty",
              "ExtendWarranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture05/pic3525/35251213_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture05/pic3525/35251213_001.jpg",
                  "updatedDate": "2023-06-13T02:32:18Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture05/pic3525/35251213_003.jpg",
                  "updatedDate": "2023-06-13T02:32:18Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture05/pic3525/35251213_004.jpg",
                  "updatedDate": "2023-06-13T02:32:18Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture05/pic3525/35251213_007.jpg",
                  "updatedDate": "2023-06-13T02:32:18Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 4WD",
          "BadgeDetail": "마스터",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201808.0,
          "FormYear": "2019",
          "Mileage": 51321.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2740.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/uiseon5664.jpg"
      },
      {
          "Id": "34903754",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty",
              "ExtendWarranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture10/pic3490/34903754_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture10/pic3490/34903754_001.jpg",
                  "updatedDate": "2023-04-24T06:45:21Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture10/pic3490/34903754_003.jpg",
                  "updatedDate": "2023-04-24T06:45:21Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture10/pic3490/34903754_004.jpg",
                  "updatedDate": "2023-04-24T06:45:21Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture10/pic3490/34903754_007.jpg",
                  "updatedDate": "2023-04-24T06:45:21Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "마스터",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 202002.0,
          "FormYear": "2020",
          "Mileage": 109218.0,
          "AdType": [
              "G"
          ],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2150.0,
          "OfficeCityState": "서울",
          "DealerPhoto": "/userdata/dealer/photo/yangtae07.jpg"
      },
      {
          "Id": "35411448",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture01/pic3541/35411448_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture01/pic3541/35411448_001.jpg",
                  "updatedDate": "2023-07-03T05:27:07Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture01/pic3541/35411448_003.jpg",
                  "updatedDate": "2023-07-03T05:27:07Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture01/pic3541/35411448_004.jpg",
                  "updatedDate": "2023-07-03T05:27:07Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture01/pic3541/35411448_007.jpg",
                  "updatedDate": "2023-07-03T05:27:07Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "노블레스 스페셜",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201709.0,
          "FormYear": "2018",
          "Mileage": 86270.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2330.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/hoonpr1122.jpg"
      },
      {
          "Id": "35130414",
          "Separation": [
              "B"
          ],
          "Trust": [
              "HomeService"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture02/pic3512/35129162_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture02/pic3512/35129162_001.jpg",
                  "updatedDate": "2023-05-25T02:33:20Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture02/pic3512/35129162_003.jpg",
                  "updatedDate": "2023-05-25T02:33:20Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture02/pic3512/35129162_004.jpg",
                  "updatedDate": "2023-05-25T02:33:20Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture02/pic3512/35129162_007.jpg",
                  "updatedDate": "2023-05-25T02:33:20Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 2WD",
          "BadgeDetail": "프레스티지",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201901.0,
          "FormYear": "2019",
          "Mileage": 60910.0,
          "AdType": [],
          "ServiceCopyCar": "DUPLICATION",
          "Price": 2140.0,
          "OfficeCityState": "서울",
          "DealerPhoto": "/userdata/dealer/photo/park2301.jpg"
      },
      {
          "Id": "35129162",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture02/pic3512/35129162_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture02/pic3512/35129162_001.jpg",
                  "updatedDate": "2023-05-25T02:33:20Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture02/pic3512/35129162_003.jpg",
                  "updatedDate": "2023-05-25T02:33:20Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture02/pic3512/35129162_004.jpg",
                  "updatedDate": "2023-05-25T02:33:20Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture02/pic3512/35129162_007.jpg",
                  "updatedDate": "2023-05-25T02:33:20Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 2WD",
          "BadgeDetail": "프레스티지",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201901.0,
          "FormYear": "2019",
          "Mileage": 60910.0,
          "AdType": [
              "G"
          ],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2140.0,
          "OfficeCityState": "서울",
          "DealerPhoto": "/userdata/dealer/photo/park2301.jpg"
      },
      {
          "Id": "33466477",
          "Separation": [
              "B"
          ],
          "Trust": [
              "HomeService"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture04/pic3344/33449492_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture04/pic3344/33449492_001.jpg",
                  "updatedDate": "2022-10-06T07:18:25Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture04/pic3344/33449492_003.jpg",
                  "updatedDate": "2022-10-06T07:18:25Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture04/pic3344/33449492_004.jpg",
                  "updatedDate": "2022-10-06T07:18:25Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture04/pic3344/33449492_007.jpg",
                  "updatedDate": "2022-10-06T07:18:25Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201708.0,
          "FormYear": "2018",
          "Mileage": 62703.0,
          "AdType": [],
          "ServiceCopyCar": "DUPLICATION",
          "Price": 2139.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/tewon9898.jpg"
      },
      {
          "Id": "33449492",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture04/pic3344/33449492_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture04/pic3344/33449492_001.jpg",
                  "updatedDate": "2022-10-06T07:18:25Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture04/pic3344/33449492_003.jpg",
                  "updatedDate": "2022-10-06T07:18:25Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture04/pic3344/33449492_004.jpg",
                  "updatedDate": "2022-10-06T07:18:25Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture04/pic3344/33449492_007.jpg",
                  "updatedDate": "2022-10-06T07:18:25Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201708.0,
          "FormYear": "2018",
          "Mileage": 62703.0,
          "AdType": [
              "G"
          ],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2139.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/tewon9898.jpg"
      },
      {
          "Id": "33447189",
          "Separation": [
              "B"
          ],
          "Trust": [
              "HomeService"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture02/pic3342/33425985_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture02/pic3342/33425985_001.jpg",
                  "updatedDate": "2022-10-04T07:24:29Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture02/pic3342/33425985_003.jpg",
                  "updatedDate": "2022-10-04T07:24:29Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture02/pic3342/33425985_004.jpg",
                  "updatedDate": "2022-10-04T07:24:29Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture02/pic3342/33425985_007.jpg",
                  "updatedDate": "2022-10-04T07:24:29Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201905.0,
          "FormYear": "2020",
          "Mileage": 59940.0,
          "AdType": [],
          "ServiceCopyCar": "DUPLICATION",
          "Price": 2389.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/tewon9898.jpg"
      },
      {
          "Id": "35357261",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture05/pic3535/35357261_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture05/pic3535/35357261_001.jpg",
                  "updatedDate": "2023-06-26T06:29:32Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture05/pic3535/35357261_003.jpg",
                  "updatedDate": "2023-06-26T06:29:32Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture05/pic3535/35357261_004.jpg",
                  "updatedDate": "2023-06-26T06:29:32Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture05/pic3535/35357261_007.jpg",
                  "updatedDate": "2023-06-26T06:29:32Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 4WD",
          "BadgeDetail": "마스터",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201904.0,
          "FormYear": "2020",
          "Mileage": 55294.0,
          "AdType": [
              "A",
              "B",
              "C",
              "D"
          ],
          "Hotmark": "10;12;20",
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2850.0,
          "OfficeCityState": "서울",
          "DealerPhoto": "/userdata/dealer/photo/rlagudwls111.jpg"
      },
      {
          "Id": "33425985",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture02/pic3342/33425985_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture02/pic3342/33425985_001.jpg",
                  "updatedDate": "2022-10-04T07:24:29Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture02/pic3342/33425985_003.jpg",
                  "updatedDate": "2022-10-04T07:24:29Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture02/pic3342/33425985_004.jpg",
                  "updatedDate": "2022-10-04T07:24:29Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture02/pic3342/33425985_007.jpg",
                  "updatedDate": "2022-10-04T07:24:29Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201905.0,
          "FormYear": "2020",
          "Mileage": 59940.0,
          "AdType": [
              "G"
          ],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2389.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/tewon9898.jpg"
      },
      {
          "Id": "35363072",
          "Separation": [
              "B"
          ],
          "Trust": [
              "HomeService"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture01/pic3471/34719799_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture01/pic3471/34719799_001.jpg",
                  "updatedDate": "2023-03-31T00:47:10Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture01/pic3471/34719799_003.jpg",
                  "updatedDate": "2023-03-31T00:47:10Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture01/pic3471/34719799_004.jpg",
                  "updatedDate": "2023-03-31T00:47:10Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture01/pic3471/34719799_007.jpg",
                  "updatedDate": "2023-03-31T00:47:10Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "가솔린 2.0 터보 2WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "가솔린",
          "Year": 201811.0,
          "FormYear": "2019",
          "Mileage": 71820.0,
          "AdType": [],
          "ServiceCopyCar": "DUPLICATION",
          "Price": 2290.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/kjklove019.jpg"
      },
      {
          "Id": "34719799",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture01/pic3471/34719799_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture01/pic3471/34719799_001.jpg",
                  "updatedDate": "2023-03-31T00:47:10Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture01/pic3471/34719799_003.jpg",
                  "updatedDate": "2023-03-31T00:47:10Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture01/pic3471/34719799_004.jpg",
                  "updatedDate": "2023-03-31T00:47:10Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture01/pic3471/34719799_007.jpg",
                  "updatedDate": "2023-03-31T00:47:10Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "가솔린 2.0 터보 2WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "가솔린",
          "Year": 201811.0,
          "FormYear": "2019",
          "Mileage": 71820.0,
          "AdType": [
              "A",
              "B",
              "C",
              "D",
              "E"
          ],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2290.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/kjklove019.jpg"
      },
      {
          "Id": "35270108",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Compensate"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture07/pic3527/35270108_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture07/pic3527/35270108_001.jpg",
                  "updatedDate": "2023-06-15T07:27:10Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture07/pic3527/35270108_003.jpg",
                  "updatedDate": "2023-06-15T07:27:10Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture07/pic3527/35270108_004.jpg",
                  "updatedDate": "2023-06-15T07:27:10Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture07/pic3527/35270108_007.jpg",
                  "updatedDate": "2023-06-15T07:27:10Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 2WD",
          "BadgeDetail": "넘버원 에디션",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201804.0,
          "FormYear": "2018",
          "Mileage": 85219.0,
          "AdType": [
              "A",
              "B",
              "C",
              "D"
          ],
          "Hotmark": "14;15;13",
          "ServiceCopyCar": "ORIGINAL",
          "Price": 1680.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/sy69c.jpg"
      },
      {
          "Id": "35208589",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture10/pic3520/35208589_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture10/pic3520/35208589_001.jpg",
                  "updatedDate": "2023-06-07T00:23:11Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture10/pic3520/35208589_003.jpg",
                  "updatedDate": "2023-06-07T00:23:11Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture10/pic3520/35208589_004.jpg",
                  "updatedDate": "2023-06-07T00:23:11Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture10/pic3520/35208589_007.jpg",
                  "updatedDate": "2023-06-07T00:23:11Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "프레스티지",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201907.0,
          "FormYear": "2020",
          "Mileage": 130385.0,
          "AdType": [
              "A",
              "B",
              "C",
              "D"
          ],
          "Hotmark": "14;15;13",
          "ServiceCopyCar": "ORIGINAL",
          "Price": 1590.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/mbw2740.jpg"
      },
      {
          "Id": "35337291",
          "Separation": [
              "B"
          ],
          "Trust": [
              "ExtendWarranty",
              "HomeService"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture03/pic3533/35335041_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture03/pic3533/35335041_001.jpg",
                  "updatedDate": "2023-07-07T02:13:35Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture03/pic3533/35335041_003.jpg",
                  "updatedDate": "2023-07-07T02:13:35Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture03/pic3533/35335041_004.jpg",
                  "updatedDate": "2023-07-07T02:13:35Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture03/pic3533/35335041_007.jpg",
                  "updatedDate": "2023-07-07T02:13:35Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "프레스티지",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201905.0,
          "FormYear": "2020",
          "Mileage": 93972.0,
          "AdType": [],
          "ServiceCopyCar": "DUPLICATION",
          "Price": 1950.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/autohands.jpg"
      },
      {
          "Id": "35459609",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture05/pic3545/35459609_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture05/pic3545/35459609_001.jpg",
                  "updatedDate": "2023-07-08T05:37:00Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture05/pic3545/35459609_003.jpg",
                  "updatedDate": "2023-07-08T05:37:00Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture05/pic3545/35459609_004.jpg",
                  "updatedDate": "2023-07-08T05:37:00Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture05/pic3545/35459609_007.jpg",
                  "updatedDate": "2023-07-08T05:37:00Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "가솔린 2.0 터보 2WD",
          "BadgeDetail": "마스터 스페셜",
          "Transmission": "오토",
          "FuelType": "가솔린",
          "Year": 201903.0,
          "FormYear": "2020",
          "Mileage": 52999.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2699.0,
          "OfficeCityState": "경기"
      },
      {
          "Id": "35405830",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture10/pic3540/35405830_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture10/pic3540/35405830_001.jpg",
                  "updatedDate": "2023-07-02T08:23:07Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture10/pic3540/35405830_003.jpg",
                  "updatedDate": "2023-07-02T08:23:07Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture10/pic3540/35405830_004.jpg",
                  "updatedDate": "2023-07-02T08:23:07Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture10/pic3540/35405830_007.jpg",
                  "updatedDate": "2023-07-02T08:23:07Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "마스터",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 202001.0,
          "FormYear": "2020",
          "Mileage": 51419.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 1829.0,
          "OfficeCityState": "경기"
      },
      {
          "Id": "35326223",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture02/pic3532/35326223_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture02/pic3532/35326223_001.jpg",
                  "updatedDate": "2023-06-30T05:00:35Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture02/pic3532/35326223_003.jpg",
                  "updatedDate": "2023-06-30T05:00:35Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture02/pic3532/35326223_004.jpg",
                  "updatedDate": "2023-06-30T05:00:35Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture02/pic3532/35326223_007.jpg",
                  "updatedDate": "2023-06-30T05:00:35Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "프레스티지",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201907.0,
          "FormYear": "2020",
          "Mileage": 94850.0,
          "AdType": [
              "G"
          ],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 1950.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/autohands.jpg"
      },
      {
          "Id": "35335041",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty",
              "ExtendWarranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture03/pic3533/35335041_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture03/pic3533/35335041_001.jpg",
                  "updatedDate": "2023-07-07T02:13:35Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture03/pic3533/35335041_003.jpg",
                  "updatedDate": "2023-07-07T02:13:35Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture03/pic3533/35335041_004.jpg",
                  "updatedDate": "2023-07-07T02:13:35Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture03/pic3533/35335041_007.jpg",
                  "updatedDate": "2023-07-07T02:13:35Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "프레스티지",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201905.0,
          "FormYear": "2020",
          "Mileage": 93972.0,
          "AdType": [
              "G"
          ],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 1950.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/autohands.jpg"
      },
      {
          "Id": "35268187",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture06/pic3526/35268187_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture06/pic3526/35268187_001.jpg",
                  "updatedDate": "2023-06-14T04:10:10Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture06/pic3526/35268187_003.jpg",
                  "updatedDate": "2023-06-14T04:10:10Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture06/pic3526/35268187_004.jpg",
                  "updatedDate": "2023-06-14T04:10:10Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture06/pic3526/35268187_007.jpg",
                  "updatedDate": "2023-06-14T04:10:10Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201804.0,
          "FormYear": "2018",
          "Mileage": 52538.0,
          "AdType": [
              "A",
              "B",
              "C",
              "D"
          ],
          "Hotmark": "14;15;13",
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2360.0,
          "OfficeCityState": "서울"
      },
      {
          "Id": "35316870",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture01/pic3531/35316870_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture01/pic3531/35316870_001.jpg",
                  "updatedDate": "2023-06-20T07:20:09Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture01/pic3531/35316870_003.jpg",
                  "updatedDate": "2023-06-20T07:20:09Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture01/pic3531/35316870_004.jpg",
                  "updatedDate": "2023-06-20T07:20:09Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture01/pic3531/35316870_007.jpg",
                  "updatedDate": "2023-06-20T07:20:09Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "럭셔리",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201905.0,
          "FormYear": "2020",
          "Mileage": 116696.0,
          "AdType": [
              "G"
          ],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 1760.0,
          "SalesStatus": "CONTRACT",
          "OfficeCityState": "경기"
      },
      {
          "Id": "35249824",
          "Separation": [
              "B"
          ],
          "Trust": [
              "ExtendWarranty",
              "HomeService"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture04/pic3524/35249478_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture04/pic3524/35249478_001.jpg",
                  "updatedDate": "2023-06-12T00:16:15Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture04/pic3524/35249478_003.jpg",
                  "updatedDate": "2023-06-12T00:16:15Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture04/pic3524/35249478_004.jpg",
                  "updatedDate": "2023-06-12T00:16:15Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture04/pic3524/35249478_007.jpg",
                  "updatedDate": "2023-06-12T00:16:15Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "가솔린 2.0 터보 2WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "가솔린",
          "Year": 201801.0,
          "FormYear": "2018",
          "Mileage": 50170.0,
          "AdType": [],
          "ServiceCopyCar": "DUPLICATION",
          "Price": 2750.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/ksmj2008.jpg"
      },
      {
          "Id": "35483536",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture08/pic3548/35483536_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture08/pic3548/35483536_001.jpg",
                  "updatedDate": "2023-07-12T01:34:52Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture08/pic3548/35483536_003.jpg",
                  "updatedDate": "2023-07-12T01:34:52Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture08/pic3548/35483536_004.jpg",
                  "updatedDate": "2023-07-12T01:34:52Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture08/pic3548/35483536_007.jpg",
                  "updatedDate": "2023-07-12T01:34:52Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 4WD",
          "BadgeDetail": "프레스티지",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201806.0,
          "FormYear": "2019",
          "Mileage": 66324.0,
          "AdType": [
              "A",
              "B",
              "C",
              "D",
              "E"
          ],
          "MobileAdWords": "★★선루프, 유보 풀오토 에어컨, 우수한 실내관리★★",
          "Hotmark": "13;14;15",
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2450.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/hj0523.jpg"
      },
      {
          "Id": "35249478",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty",
              "ExtendWarranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture04/pic3524/35249478_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture04/pic3524/35249478_001.jpg",
                  "updatedDate": "2023-06-12T00:16:15Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture04/pic3524/35249478_003.jpg",
                  "updatedDate": "2023-06-12T00:16:15Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture04/pic3524/35249478_004.jpg",
                  "updatedDate": "2023-06-12T00:16:15Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture04/pic3524/35249478_007.jpg",
                  "updatedDate": "2023-06-12T00:16:15Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "가솔린 2.0 터보 2WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "가솔린",
          "Year": 201801.0,
          "FormYear": "2018",
          "Mileage": 50170.0,
          "AdType": [
              "G"
          ],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2750.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/ksmj2008.jpg"
      },
      {
          "Id": "35455999",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture05/pic3545/35455999_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture05/pic3545/35455999_001.jpg",
                  "updatedDate": "2023-07-07T07:08:53Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture05/pic3545/35455999_003.jpg",
                  "updatedDate": "2023-07-07T07:08:53Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture05/pic3545/35455999_004.jpg",
                  "updatedDate": "2023-07-07T07:08:53Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture05/pic3545/35455999_007.jpg",
                  "updatedDate": "2023-07-07T07:08:53Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "노블레스 스페셜",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201708.0,
          "FormYear": "2018",
          "Mileage": 108230.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2030.0,
          "OfficeCityState": "경기"
      },
      {
          "Id": "34587034",
          "Separation": [
              "B"
          ],
          "Trust": [
              "HomeService"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture08/pic3458/34586461_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture08/pic3458/34586461_001.jpg",
                  "updatedDate": "2023-03-14T01:26:55Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture08/pic3458/34586461_003.jpg",
                  "updatedDate": "2023-03-14T01:26:55Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture08/pic3458/34586461_004.jpg",
                  "updatedDate": "2023-03-14T01:26:55Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture08/pic3458/34586461_007.jpg",
                  "updatedDate": "2023-03-14T01:26:55Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 4WD",
          "BadgeDetail": "노블레스 스페셜",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201803.0,
          "FormYear": "2018",
          "Mileage": 136909.0,
          "AdType": [],
          "HomeServiceVerification": "Y",
          "ServiceCopyCar": "DUPLICATION",
          "Price": 2130.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/wook3377.jpg"
      },
      {
          "Id": "33286586",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Compensate"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture08/pic3328/33286586_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture08/pic3328/33286586_001.jpg",
                  "updatedDate": "2022-09-08T06:07:21Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture08/pic3328/33286586_003.jpg",
                  "updatedDate": "2022-09-08T06:07:21Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture08/pic3328/33286586_004.jpg",
                  "updatedDate": "2022-09-08T06:07:21Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture08/pic3328/33286586_007.jpg",
                  "updatedDate": "2022-09-08T06:07:21Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "프레스티지",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201710.0,
          "FormYear": "2018",
          "Mileage": 88131.0,
          "AdType": [
              "A",
              "B",
              "C",
              "D"
          ],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 1620.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/papa281520.jpg"
      },
      {
          "Id": "34586461",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture08/pic3458/34586461_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture08/pic3458/34586461_001.jpg",
                  "updatedDate": "2023-03-14T01:26:55Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture08/pic3458/34586461_003.jpg",
                  "updatedDate": "2023-03-14T01:26:55Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture08/pic3458/34586461_004.jpg",
                  "updatedDate": "2023-03-14T01:26:55Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture08/pic3458/34586461_007.jpg",
                  "updatedDate": "2023-03-14T01:26:55Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 4WD",
          "BadgeDetail": "노블레스 스페셜",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201803.0,
          "FormYear": "2018",
          "Mileage": 136909.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2130.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/wook3377.jpg"
      },
      {
          "Id": "35490378",
          "Separation": [
              "B"
          ],
          "Trust": [
              "HomeService"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture08/pic3548/35482398_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture08/pic3548/35482398_001.jpg",
                  "updatedDate": "2023-07-12T05:03:19Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture08/pic3548/35482398_003.jpg",
                  "updatedDate": "2023-07-12T05:03:19Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture08/pic3548/35482398_004.jpg",
                  "updatedDate": "2023-07-12T05:03:19Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture08/pic3548/35482398_007.jpg",
                  "updatedDate": "2023-07-12T05:03:19Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 2WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201903.0,
          "FormYear": "2020",
          "Mileage": 119541.0,
          "AdType": [],
          "ServiceCopyCar": "DUPLICATION",
          "Price": 2100.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/dbalove.jpg"
      },
      {
          "Id": "35491362",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Compensate"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture09/pic3549/35491362_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture09/pic3549/35491362_001.jpg",
                  "updatedDate": "2023-07-12T06:14:12Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture09/pic3549/35491362_003.jpg",
                  "updatedDate": "2023-07-12T06:14:12Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture09/pic3549/35491362_004.jpg",
                  "updatedDate": "2023-07-12T06:14:12Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture09/pic3549/35491362_007.jpg",
                  "updatedDate": "2023-07-12T06:14:12Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "럭셔리",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201906.0,
          "FormYear": "2020",
          "Mileage": 111794.0,
          "AdType": [
              "G"
          ],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 1790.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/tedd19.jpg"
      },
      {
          "Id": "35482398",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture08/pic3548/35482398_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture08/pic3548/35482398_001.jpg",
                  "updatedDate": "2023-07-12T05:03:19Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture08/pic3548/35482398_003.jpg",
                  "updatedDate": "2023-07-12T05:03:19Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture08/pic3548/35482398_004.jpg",
                  "updatedDate": "2023-07-12T05:03:19Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture08/pic3548/35482398_007.jpg",
                  "updatedDate": "2023-07-12T05:03:19Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 2WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201903.0,
          "FormYear": "2020",
          "Mileage": 119541.0,
          "AdType": [
              "A",
              "B",
              "C",
              "D",
              "E"
          ],
          "MobileAdWords": "&#9989;추가옵션361만원&#9989;관리상태최상&#9989;HUD&#9989;반자율&#9989;키2EA&#9989;",
          "Hotmark": "09;10;13",
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2100.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/dbalove.jpg"
      },
      {
          "Id": "35201701",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture10/pic3520/35201701_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture10/pic3520/35201701_001.jpg",
                  "updatedDate": "2023-06-07T06:12:16Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture10/pic3520/35201701_003.jpg",
                  "updatedDate": "2023-06-07T06:12:16Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture10/pic3520/35201701_004.jpg",
                  "updatedDate": "2023-06-07T06:12:16Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture10/pic3520/35201701_007.jpg",
                  "updatedDate": "2023-06-07T06:12:16Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "프레스티지",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201711.0,
          "FormYear": "2018",
          "Mileage": 84240.0,
          "AdType": [
              "G"
          ],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 1829.0,
          "OfficeCityState": "서울",
          "DealerPhoto": "/userdata/dealer/photo/junchoi-44.jpg"
      },
      {
          "Id": "35304196",
          "Separation": [
              "B"
          ],
          "Trust": [
              "HomeService"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture08/pic3528/35289449_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture08/pic3528/35289449_001.jpg",
                  "updatedDate": "2023-06-19T01:11:00Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture08/pic3528/35289449_003.jpg",
                  "updatedDate": "2023-06-19T01:11:00Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture08/pic3528/35289449_004.jpg",
                  "updatedDate": "2023-06-19T01:11:00Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture08/pic3528/35289449_007.jpg",
                  "updatedDate": "2023-06-19T01:11:00Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 4WD",
          "BadgeDetail": "마스터",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201901.0,
          "FormYear": "2019",
          "Mileage": 69470.0,
          "AdType": [],
          "ServiceCopyCar": "DUPLICATION",
          "Price": 3190.0,
          "OfficeCityState": "서울",
          "DealerPhoto": "/userdata/dealer/photo/hooni_75.jpg"
      },
      {
          "Id": "35228539",
          "Separation": [
              "B"
          ],
          "Trust": [
              "ExtendWarranty",
              "HomeService"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture02/pic3522/35223760_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture02/pic3522/35223760_001.jpg",
                  "updatedDate": "2023-06-08T06:36:30Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture02/pic3522/35223760_003.jpg",
                  "updatedDate": "2023-06-08T06:36:30Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture02/pic3522/35223760_004.jpg",
                  "updatedDate": "2023-06-08T06:36:30Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture02/pic3522/35223760_007.jpg",
                  "updatedDate": "2023-06-08T06:36:30Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 4WD",
          "BadgeDetail": "마스터",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201806.0,
          "FormYear": "2019",
          "Mileage": 67830.0,
          "AdType": [],
          "ServiceCopyCar": "DUPLICATION",
          "Price": 3050.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/senbul80.jpg"
      },
      {
          "Id": "35290161",
          "Separation": [
              "B"
          ],
          "Trust": [
              "HomeService"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture08/pic3528/35287395_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture08/pic3528/35287395_001.jpg",
                  "updatedDate": "2023-06-16T00:11:11Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture08/pic3528/35287395_003.jpg",
                  "updatedDate": "2023-06-16T00:11:11Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture08/pic3528/35287395_004.jpg",
                  "updatedDate": "2023-06-16T00:11:11Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture08/pic3528/35287395_007.jpg",
                  "updatedDate": "2023-06-16T00:11:11Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 4WD",
          "BadgeDetail": "넘버원 에디션",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201803.0,
          "FormYear": "2018",
          "Mileage": 70587.0,
          "AdType": [
              "A",
              "B",
              "C",
              "D",
              "E"
          ],
          "MobileAdWords": "&#9989;네비게이션&#9989;FullLED 전조&#9989;타이어상태 양호&#9989;실내청결&#9989;",
          "Hotmark": "02;17;20",
          "HomeServiceVerification": "Y",
          "ServiceCopyCar": "DUPLICATION",
          "Price": 2420.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/jack81.jpg"
      },
      {
          "Id": "35289449",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture08/pic3528/35289449_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture08/pic3528/35289449_001.jpg",
                  "updatedDate": "2023-06-19T01:11:00Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture08/pic3528/35289449_003.jpg",
                  "updatedDate": "2023-06-19T01:11:00Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture08/pic3528/35289449_004.jpg",
                  "updatedDate": "2023-06-19T01:11:00Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture08/pic3528/35289449_007.jpg",
                  "updatedDate": "2023-06-19T01:11:00Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 4WD",
          "BadgeDetail": "마스터",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201901.0,
          "FormYear": "2019",
          "Mileage": 69470.0,
          "AdType": [
              "G"
          ],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 3190.0,
          "OfficeCityState": "서울",
          "DealerPhoto": "/userdata/dealer/photo/hooni_75.jpg"
      },
      {
          "Id": "35223760",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty",
              "ExtendWarranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture02/pic3522/35223760_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture02/pic3522/35223760_001.jpg",
                  "updatedDate": "2023-06-08T06:36:30Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture02/pic3522/35223760_003.jpg",
                  "updatedDate": "2023-06-08T06:36:30Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture02/pic3522/35223760_004.jpg",
                  "updatedDate": "2023-06-08T06:36:30Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture02/pic3522/35223760_007.jpg",
                  "updatedDate": "2023-06-08T06:36:30Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 4WD",
          "BadgeDetail": "마스터",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201806.0,
          "FormYear": "2019",
          "Mileage": 67830.0,
          "AdType": [
              "E",
              "G"
          ],
          "MobileAdWords": "엔카 실촬영",
          "ServiceCopyCar": "ORIGINAL",
          "Price": 3050.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/senbul80.jpg"
      },
      {
          "Id": "35287395",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture08/pic3528/35287395_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture08/pic3528/35287395_001.jpg",
                  "updatedDate": "2023-06-16T00:11:11Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture08/pic3528/35287395_003.jpg",
                  "updatedDate": "2023-06-16T00:11:11Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture08/pic3528/35287395_004.jpg",
                  "updatedDate": "2023-06-16T00:11:11Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture08/pic3528/35287395_007.jpg",
                  "updatedDate": "2023-06-16T00:11:11Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 4WD",
          "BadgeDetail": "넘버원 에디션",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201803.0,
          "FormYear": "2018",
          "Mileage": 70587.0,
          "AdType": [
              "A",
              "B",
              "C",
              "D",
              "E"
          ],
          "MobileAdWords": "&#9989;네비게이션&#9989;FullLED 전조&#9989;타이어상태 양호&#9989;실내청결&#9989;",
          "Hotmark": "02;17;20",
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2420.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/jack81.jpg"
      },
      {
          "Id": "35369372",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture06/pic3536/35369372_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture06/pic3536/35369372_001.jpg",
                  "updatedDate": "2023-06-27T08:33:12Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture06/pic3536/35369372_003.jpg",
                  "updatedDate": "2023-06-27T08:33:12Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture06/pic3536/35369372_004.jpg",
                  "updatedDate": "2023-06-27T08:33:12Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture06/pic3536/35369372_007.jpg",
                  "updatedDate": "2023-06-27T08:33:12Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 2WD",
          "BadgeDetail": "마스터",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201906.0,
          "FormYear": "2020",
          "Mileage": 84366.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2250.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/karl1214.jpg"
      },
      {
          "Id": "35493087",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture09/pic3549/35493087_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture09/pic3549/35493087_001.jpg",
                  "updatedDate": "2023-07-12T07:49:33Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture09/pic3549/35493087_003.jpg",
                  "updatedDate": "2023-07-12T07:49:33Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture09/pic3549/35493087_004.jpg",
                  "updatedDate": "2023-07-12T07:49:33Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture09/pic3549/35493087_007.jpg",
                  "updatedDate": "2023-07-12T07:49:33Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 4WD",
          "BadgeDetail": "노블레스 스페셜",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201712.0,
          "FormYear": "2018",
          "Mileage": 109752.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2530.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/fkeldj123.jpg"
      },
      {
          "Id": "35280323",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture08/pic3528/35280323_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture08/pic3528/35280323_001.jpg",
                  "updatedDate": "2023-06-15T02:49:18Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture08/pic3528/35280323_003.jpg",
                  "updatedDate": "2023-06-15T02:49:18Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture08/pic3528/35280323_004.jpg",
                  "updatedDate": "2023-06-15T02:49:18Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture08/pic3528/35280323_007.jpg",
                  "updatedDate": "2023-06-15T02:49:18Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "가솔린 2.0 터보 2WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "가솔린",
          "Year": 201809.0,
          "FormYear": "2019",
          "Mileage": 81085.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2500.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/jjoon9179.jpg"
      },
      {
          "Id": "35359833",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty",
              "ExtendWarranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture05/pic3535/35359833_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture05/pic3535/35359833_001.jpg",
                  "updatedDate": "2023-06-27T08:51:11Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture05/pic3535/35359833_003.jpg",
                  "updatedDate": "2023-06-27T08:51:11Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture05/pic3535/35359833_004.jpg",
                  "updatedDate": "2023-06-27T08:51:11Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture05/pic3535/35359833_007.jpg",
                  "updatedDate": "2023-06-27T08:51:11Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "가솔린 2.0 터보 4WD",
          "BadgeDetail": "마스터 스페셜",
          "Transmission": "오토",
          "FuelType": "가솔린",
          "Year": 201904.0,
          "FormYear": "2020",
          "Mileage": 64974.0,
          "AdType": [
              "G"
          ],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 3040.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/geologysong.jpg"
      },
      {
          "Id": "35281154",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty",
              "ExtendWarranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture08/pic3528/35281154_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture08/pic3528/35281154_001.jpg",
                  "updatedDate": "2023-06-15T05:08:56Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture08/pic3528/35281154_003.jpg",
                  "updatedDate": "2023-06-15T05:08:56Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture08/pic3528/35281154_004.jpg",
                  "updatedDate": "2023-06-15T05:08:56Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture08/pic3528/35281154_007.jpg",
                  "updatedDate": "2023-06-15T05:08:56Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 4WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201904.0,
          "FormYear": "2020",
          "Mileage": 74981.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2500.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/tlgud0409.jpg"
      },
      {
          "Id": "35487741",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture08/pic3548/35487741_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture08/pic3548/35487741_001.jpg",
                  "updatedDate": "2023-07-12T02:39:44Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture08/pic3548/35487741_003.jpg",
                  "updatedDate": "2023-07-12T02:39:44Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture08/pic3548/35487741_004.jpg",
                  "updatedDate": "2023-07-12T02:39:44Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture08/pic3548/35487741_007.jpg",
                  "updatedDate": "2023-07-12T02:39:44Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "프레스티지",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201801.0,
          "FormYear": "2018",
          "Mileage": 106746.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 1939.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/kongdk.jpg"
      },
      {
          "Id": "35467856",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture06/pic3546/35467856_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture06/pic3546/35467856_001.jpg",
                  "updatedDate": "2023-07-10T03:53:48Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture06/pic3546/35467856_003.jpg",
                  "updatedDate": "2023-07-10T03:53:48Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture06/pic3546/35467856_004.jpg",
                  "updatedDate": "2023-07-10T03:53:48Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture06/pic3546/35467856_007.jpg",
                  "updatedDate": "2023-07-10T03:53:48Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "마스터",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 202001.0,
          "FormYear": "2020",
          "Mileage": 93876.0,
          "AdType": [
              "H"
          ],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2150.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/bjsabc1000.jpg"
      },
      {
          "Id": "35455692",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture05/pic3545/35455692_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture05/pic3545/35455692_001.jpg",
                  "updatedDate": "2023-07-10T03:04:52Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture05/pic3545/35455692_003.jpg",
                  "updatedDate": "2023-07-10T03:04:52Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture05/pic3545/35455692_004.jpg",
                  "updatedDate": "2023-07-10T03:04:52Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture05/pic3545/35455692_007.jpg",
                  "updatedDate": "2023-07-10T03:04:52Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 4WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201906.0,
          "FormYear": "2020",
          "Mileage": 51190.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 3380.0,
          "OfficeCityState": "경기"
      },
      {
          "Id": "35394884",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture09/pic3539/35394884_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture09/pic3539/35394884_001.jpg",
                  "updatedDate": "2023-06-30T05:28:11Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture09/pic3539/35394884_003.jpg",
                  "updatedDate": "2023-06-30T05:28:11Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture09/pic3539/35394884_004.jpg",
                  "updatedDate": "2023-06-30T05:28:11Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture09/pic3539/35394884_007.jpg",
                  "updatedDate": "2023-06-30T05:28:11Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 4WD",
          "BadgeDetail": "마스터",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201905.0,
          "FormYear": "2020",
          "Mileage": 68446.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2950.0,
          "OfficeCityState": "서울",
          "DealerPhoto": "/userdata/dealer/photo/babu7476.jpg"
      },
      {
          "Id": "35325372",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture02/pic3532/35325372_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture02/pic3532/35325372_001.jpg",
                  "updatedDate": "2023-06-22T00:49:32Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture02/pic3532/35325372_003.jpg",
                  "updatedDate": "2023-06-22T00:49:32Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture02/pic3532/35325372_004.jpg",
                  "updatedDate": "2023-06-22T00:49:32Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture02/pic3532/35325372_007.jpg",
                  "updatedDate": "2023-06-22T00:49:32Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 2WD",
          "BadgeDetail": "마스터",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201806.0,
          "FormYear": "2019",
          "Mileage": 75466.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2350.0,
          "OfficeCityState": "서울",
          "DealerPhoto": "/userdata/dealer/photo/wooki75.jpg"
      },
      {
          "Id": "35429600",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture02/pic3542/35429600_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture02/pic3542/35429600_001.jpg",
                  "updatedDate": "2023-07-05T01:02:55Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture02/pic3542/35429600_003.jpg",
                  "updatedDate": "2023-07-05T01:02:55Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture02/pic3542/35429600_004.jpg",
                  "updatedDate": "2023-07-05T01:02:55Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture02/pic3542/35429600_007.jpg",
                  "updatedDate": "2023-07-05T01:02:55Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "노블레스 스페셜",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201707.0,
          "FormYear": "2018",
          "Mileage": 110000.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 1990.0,
          "OfficeCityState": "서울",
          "DealerPhoto": "/userdata/dealer/photo/dmsrja20.jpg"
      },
      {
          "Id": "35234842",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture03/pic3523/35234842_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture03/pic3523/35234842_001.jpg",
                  "updatedDate": "2023-06-12T08:12:51Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture03/pic3523/35234842_003.jpg",
                  "updatedDate": "2023-06-12T08:12:51Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture03/pic3523/35234842_004.jpg",
                  "updatedDate": "2023-06-12T08:12:51Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture03/pic3523/35234842_007.jpg",
                  "updatedDate": "2023-06-12T08:12:51Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "럭셔리",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201904.0,
          "FormYear": "2020",
          "Mileage": 140399.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 1520.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/yjh3717.jpg"
      },
      {
          "Id": "35226494",
          "Separation": [
              "B"
          ],
          "Trust": [
              "HomeService"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture01/pic3521/35213753_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture01/pic3521/35213753_001.jpg",
                  "updatedDate": "2023-06-08T01:03:31Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture01/pic3521/35213753_003.jpg",
                  "updatedDate": "2023-06-08T01:03:31Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture01/pic3521/35213753_004.jpg",
                  "updatedDate": "2023-06-08T01:03:31Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture01/pic3521/35213753_007.jpg",
                  "updatedDate": "2023-06-08T01:03:31Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 2WD",
          "BadgeDetail": "마스터 스페셜",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201909.0,
          "FormYear": "2020",
          "Mileage": 57158.0,
          "AdType": [],
          "HomeServiceVerification": "Y",
          "ServiceCopyCar": "DUPLICATION",
          "Price": 2950.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/hse13410608.jpg"
      },
      {
          "Id": "35213753",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture01/pic3521/35213753_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture01/pic3521/35213753_001.jpg",
                  "updatedDate": "2023-06-08T01:03:31Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture01/pic3521/35213753_003.jpg",
                  "updatedDate": "2023-06-08T01:03:31Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture01/pic3521/35213753_004.jpg",
                  "updatedDate": "2023-06-08T01:03:31Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture01/pic3521/35213753_007.jpg",
                  "updatedDate": "2023-06-08T01:03:31Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 2WD",
          "BadgeDetail": "마스터 스페셜",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201909.0,
          "FormYear": "2020",
          "Mileage": 57158.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2950.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/hse13410608.jpg"
      },
      {
          "Id": "35486732",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture08/pic3548/35486732_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture08/pic3548/35486732_001.jpg",
                  "updatedDate": "2023-07-12T01:48:08Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture08/pic3548/35486732_003.jpg",
                  "updatedDate": "2023-07-12T01:48:08Z",
                  "ordering": 3.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 4WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201709.0,
          "FormYear": "2018",
          "Mileage": 78615.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2670.0,
          "OfficeCityState": "경기"
      },
      {
          "Id": "34498788",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture09/pic3449/34498788_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture09/pic3449/34498788_001.jpg",
                  "updatedDate": "2023-03-02T01:42:49Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture09/pic3449/34498788_003.jpg",
                  "updatedDate": "2023-03-02T01:42:49Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture09/pic3449/34498788_004.jpg",
                  "updatedDate": "2023-03-02T01:42:49Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture09/pic3449/34498788_007.jpg",
                  "updatedDate": "2023-03-02T01:42:49Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 2WD",
          "BadgeDetail": "노블레스 스페셜",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201805.0,
          "FormYear": "2018",
          "Mileage": 53391.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2299.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/rla7910aa.jpg"
      },
      {
          "Id": "35337962",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture03/pic3533/35337962_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture03/pic3533/35337962_001.jpg",
                  "updatedDate": "2023-06-22T09:44:57Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture03/pic3533/35337962_003.jpg",
                  "updatedDate": "2023-06-22T09:44:57Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture03/pic3533/35337962_004.jpg",
                  "updatedDate": "2023-06-22T09:44:57Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture03/pic3533/35337962_007.jpg",
                  "updatedDate": "2023-06-22T09:44:57Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 2WD",
          "BadgeDetail": "마스터",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201906.0,
          "FormYear": "2020",
          "Mileage": 61103.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2740.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/uiseon5664.jpg"
      },
      {
          "Id": "35473409",
          "Separation": [
              "B"
          ],
          "Trust": [
              "ExtendWarranty",
              "HomeService"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture07/pic3547/35472702_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture07/pic3547/35472702_001.jpg",
                  "updatedDate": "2023-07-10T08:11:06Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture07/pic3547/35472702_003.jpg",
                  "updatedDate": "2023-07-10T08:11:06Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture07/pic3547/35472702_004.jpg",
                  "updatedDate": "2023-07-10T08:11:06Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture07/pic3547/35472702_007.jpg",
                  "updatedDate": "2023-07-10T08:11:06Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 2WD",
          "BadgeDetail": "마스터",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201906.0,
          "FormYear": "2020",
          "Mileage": 105445.0,
          "AdType": [],
          "HomeServiceVerification": "Y",
          "ServiceCopyCar": "DUPLICATION",
          "Price": 2270.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/dbsxodyd777.jpg"
      },
      {
          "Id": "35472702",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty",
              "ExtendWarranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture07/pic3547/35472702_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture07/pic3547/35472702_001.jpg",
                  "updatedDate": "2023-07-10T08:11:06Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture07/pic3547/35472702_003.jpg",
                  "updatedDate": "2023-07-10T08:11:06Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture07/pic3547/35472702_004.jpg",
                  "updatedDate": "2023-07-10T08:11:06Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture07/pic3547/35472702_007.jpg",
                  "updatedDate": "2023-07-10T08:11:06Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 2WD",
          "BadgeDetail": "마스터",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201906.0,
          "FormYear": "2020",
          "Mileage": 105445.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2270.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/dbsxodyd777.jpg"
      },
      {
          "Id": "35448547",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture04/pic3544/35448547_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture04/pic3544/35448547_001.jpg",
                  "updatedDate": "2023-07-06T08:56:55Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture04/pic3544/35448547_003.jpg",
                  "updatedDate": "2023-07-06T08:56:55Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture04/pic3544/35448547_004.jpg",
                  "updatedDate": "2023-07-06T08:56:55Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture04/pic3544/35448547_007.jpg",
                  "updatedDate": "2023-07-06T08:56:55Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "마스터 스페셜",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201908.0,
          "FormYear": "2020",
          "Mileage": 114000.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2490.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/readyace.jpg"
      },
      {
          "Id": "35455000",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture05/pic3545/35455000_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture05/pic3545/35455000_001.jpg",
                  "updatedDate": "2023-07-10T01:48:06Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture05/pic3545/35455000_003.jpg",
                  "updatedDate": "2023-07-10T01:48:06Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture05/pic3545/35455000_004.jpg",
                  "updatedDate": "2023-07-10T01:48:06Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture05/pic3545/35455000_007.jpg",
                  "updatedDate": "2023-07-10T01:48:06Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 2WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201712.0,
          "FormYear": "2018",
          "Mileage": 124501.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2080.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/jinjian0819.jpg"
      },
      {
          "Id": "34795165",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture09/pic3479/34795165_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture09/pic3479/34795165_001.jpg",
                  "updatedDate": "2023-04-09T04:53:05Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture09/pic3479/34795165_003.jpg",
                  "updatedDate": "2023-04-09T04:53:05Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture09/pic3479/34795165_004.jpg",
                  "updatedDate": "2023-04-09T04:53:05Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture09/pic3479/34795165_007.jpg",
                  "updatedDate": "2023-04-09T04:53:05Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 4WD",
          "BadgeDetail": "노블레스 스페셜",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201801.0,
          "FormYear": "2018",
          "Mileage": 107378.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2280.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/rwh8000.jpg"
      },
      {
          "Id": "35364663",
          "Separation": [
              "B"
          ],
          "Trust": [
              "HomeService"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture02/pic3202/32022764_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture02/pic3202/32022764_001.jpg",
                  "updatedDate": "2022-02-22T07:17:35Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture02/pic3202/32022764_003.jpg",
                  "updatedDate": "2022-02-22T07:17:35Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture02/pic3202/32022764_004.jpg",
                  "updatedDate": "2022-02-22T07:17:35Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture02/pic3202/32022764_007.jpg",
                  "updatedDate": "2022-02-22T07:17:35Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "프레스티지",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201709.0,
          "FormYear": "2018",
          "Mileage": 90885.0,
          "AdType": [],
          "HomeServiceVerification": "Y",
          "ServiceCopyCar": "DUPLICATION",
          "Price": 1840.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/reijigen.jpg"
      },
      {
          "Id": "32022764",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture02/pic3202/32022764_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture02/pic3202/32022764_001.jpg",
                  "updatedDate": "2022-02-22T07:17:35Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture02/pic3202/32022764_003.jpg",
                  "updatedDate": "2022-02-22T07:17:35Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture02/pic3202/32022764_004.jpg",
                  "updatedDate": "2022-02-22T07:17:35Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture02/pic3202/32022764_007.jpg",
                  "updatedDate": "2022-02-22T07:17:35Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "프레스티지",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201709.0,
          "FormYear": "2018",
          "Mileage": 90885.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 1840.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/reijigen.jpg"
      },
      {
          "Id": "35485599",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture08/pic3548/35485599_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture08/pic3548/35485599_001.jpg",
                  "updatedDate": "2023-07-12T00:28:27Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture08/pic3548/35485599_003.jpg",
                  "updatedDate": "2023-07-12T00:28:27Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture08/pic3548/35485599_004.jpg",
                  "updatedDate": "2023-07-12T00:28:27Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture08/pic3548/35485599_007.jpg",
                  "updatedDate": "2023-07-12T00:28:27Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 4WD",
          "BadgeDetail": "마스터",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 202001.0,
          "FormYear": "2020",
          "Mileage": 77961.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2870.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/gjrudtjs00.jpg"
      },
      {
          "Id": "34721460",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture02/pic3472/34721460_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture02/pic3472/34721460_001.jpg",
                  "updatedDate": "2023-03-30T02:15:19Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture02/pic3472/34721460_003.jpg",
                  "updatedDate": "2023-03-30T02:15:19Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture02/pic3472/34721460_004.jpg",
                  "updatedDate": "2023-03-30T02:15:19Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture02/pic3472/34721460_007.jpg",
                  "updatedDate": "2023-03-30T02:15:19Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "가솔린 2.0 터보 4WD",
          "BadgeDetail": "프레스티지",
          "Transmission": "오토",
          "FuelType": "가솔린",
          "Year": 201711.0,
          "FormYear": "2018",
          "Mileage": 118024.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 1950.0,
          "OfficeCityState": "경기"
      },
      {
          "Id": "35243710",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture04/pic3524/35243710_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture04/pic3524/35243710_001.jpg",
                  "updatedDate": "2023-06-09T10:02:02Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture04/pic3524/35243710_003.jpg",
                  "updatedDate": "2023-06-09T10:02:02Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture04/pic3524/35243710_004.jpg",
                  "updatedDate": "2023-06-09T10:02:02Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture04/pic3524/35243710_007.jpg",
                  "updatedDate": "2023-06-09T10:02:02Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 2WD",
          "BadgeDetail": "프레스티지",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201709.0,
          "FormYear": "2018",
          "Mileage": 60218.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2190.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/qhdod747.jpg"
      },
      {
          "Id": "35422195",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Compensate"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture02/pic3542/35422195_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture02/pic3542/35422195_001.jpg",
                  "updatedDate": "2023-07-04T04:40:44Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture02/pic3542/35422195_003.jpg",
                  "updatedDate": "2023-07-04T04:40:44Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture02/pic3542/35422195_004.jpg",
                  "updatedDate": "2023-07-04T04:40:44Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture02/pic3542/35422195_007.jpg",
                  "updatedDate": "2023-07-04T04:40:44Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "프레스티지",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201906.0,
          "FormYear": "2020",
          "Mileage": 77133.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2250.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/refugee4.jpg"
      },
      {
          "Id": "35487490",
          "Separation": [
              "B"
          ],
          "Trust": [
              "ExtendWarranty",
              "HomeService"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture07/pic3547/35478115_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture07/pic3547/35478115_001.jpg",
                  "updatedDate": "2023-07-12T02:21:07Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture07/pic3547/35478115_003.jpg",
                  "updatedDate": "2023-07-12T02:21:07Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture07/pic3547/35478115_004.jpg",
                  "updatedDate": "2023-07-12T02:21:07Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture07/pic3547/35478115_007.jpg",
                  "updatedDate": "2023-07-12T02:21:07Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "마스터 스페셜",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201912.0,
          "FormYear": "2020",
          "Mileage": 60979.0,
          "AdType": [],
          "HomeServiceVerification": "Y",
          "ServiceCopyCar": "DUPLICATION",
          "Price": 2750.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/jinhee6279.jpg"
      },
      {
          "Id": "35478115",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty",
              "ExtendWarranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture07/pic3547/35478115_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture07/pic3547/35478115_001.jpg",
                  "updatedDate": "2023-07-12T02:21:07Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture07/pic3547/35478115_003.jpg",
                  "updatedDate": "2023-07-12T02:21:07Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture07/pic3547/35478115_004.jpg",
                  "updatedDate": "2023-07-12T02:21:07Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture07/pic3547/35478115_007.jpg",
                  "updatedDate": "2023-07-12T02:21:07Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "마스터 스페셜",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201912.0,
          "FormYear": "2020",
          "Mileage": 60979.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2750.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/jinhee6279.jpg"
      },
      {
          "Id": "35231811",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture03/pic3523/35231811_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture03/pic3523/35231811_001.jpg",
                  "updatedDate": "2023-06-12T05:55:11Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture03/pic3523/35231811_003.jpg",
                  "updatedDate": "2023-06-12T05:55:11Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture03/pic3523/35231811_004.jpg",
                  "updatedDate": "2023-06-12T05:55:11Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture03/pic3523/35231811_007.jpg",
                  "updatedDate": "2023-06-12T05:55:11Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "가솔린 2.0 터보 2WD",
          "BadgeDetail": "프레스티지",
          "Transmission": "오토",
          "FuelType": "가솔린",
          "Year": 201905.0,
          "FormYear": "2020",
          "Mileage": 112688.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2030.0,
          "OfficeCityState": "서울",
          "DealerPhoto": "/userdata/dealer/photo/yimtb1070.jpg"
      },
      {
          "Id": "35326235",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty",
              "ExtendWarranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture02/pic3532/35326235_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture02/pic3532/35326235_001.jpg",
                  "updatedDate": "2023-06-22T10:53:12Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture02/pic3532/35326235_003.jpg",
                  "updatedDate": "2023-06-22T10:53:12Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture02/pic3532/35326235_004.jpg",
                  "updatedDate": "2023-06-22T10:53:12Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture02/pic3532/35326235_007.jpg",
                  "updatedDate": "2023-06-22T10:53:12Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "마스터",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201905.0,
          "FormYear": "2020",
          "Mileage": 65220.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2530.0,
          "OfficeCityState": "서울",
          "DealerPhoto": "/userdata/dealer/photo/yimtb1070.jpg"
      },
      {
          "Id": "35375934",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture07/pic3537/35375934_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture07/pic3537/35375934_001.jpg",
                  "updatedDate": "2023-06-28T06:06:42Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture07/pic3537/35375934_003.jpg",
                  "updatedDate": "2023-06-28T06:06:42Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture07/pic3537/35375934_004.jpg",
                  "updatedDate": "2023-06-28T06:06:42Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture07/pic3537/35375934_007.jpg",
                  "updatedDate": "2023-06-28T06:06:42Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201906.0,
          "FormYear": "2020",
          "Mileage": 82089.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2226.0,
          "SalesStatus": "CONTRACT",
          "OfficeCityState": "경기"
      },
      {
          "Id": "35476784",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture07/pic3547/35476784_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture07/pic3547/35476784_001.jpg",
                  "updatedDate": "2023-07-11T01:17:13Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture07/pic3547/35476784_003.jpg",
                  "updatedDate": "2023-07-11T01:17:13Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture07/pic3547/35476784_004.jpg",
                  "updatedDate": "2023-07-11T01:17:13Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture07/pic3547/35476784_007.jpg",
                  "updatedDate": "2023-07-11T01:17:13Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 4WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 202001.0,
          "FormYear": "2020",
          "Mileage": 117393.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2899.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/com777e.jpg"
      },
      {
          "Id": "35363046",
          "Separation": [
              "B"
          ],
          "Trust": [
              "HomeService"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture02/pic3192/31921617_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture02/pic3192/31921617_001.jpg",
                  "updatedDate": "2022-12-29T04:10:42Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture02/pic3192/31921617_003.jpg",
                  "updatedDate": "2022-12-29T04:10:42Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture02/pic3192/31921617_004.jpg",
                  "updatedDate": "2022-12-29T04:10:42Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture02/pic3192/31921617_007.jpg",
                  "updatedDate": "2022-12-29T04:10:42Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "노블레스 스페셜",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201707.0,
          "FormYear": "2018",
          "Mileage": 60960.0,
          "AdType": [],
          "ServiceCopyCar": "DUPLICATION",
          "Price": 2450.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/zxcv369.jpg"
      },
      {
          "Id": "31921617",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture02/pic3192/31921617_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture02/pic3192/31921617_001.jpg",
                  "updatedDate": "2022-12-29T04:10:42Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture02/pic3192/31921617_003.jpg",
                  "updatedDate": "2022-12-29T04:10:42Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture02/pic3192/31921617_004.jpg",
                  "updatedDate": "2022-12-29T04:10:42Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture02/pic3192/31921617_007.jpg",
                  "updatedDate": "2022-12-29T04:10:42Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "노블레스 스페셜",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201707.0,
          "FormYear": "2018",
          "Mileage": 60960.0,
          "AdType": [
              "A",
              "B",
              "C",
              "D",
              "E"
          ],
          "MobileAdWords": "★완무/마스터그릴/마스터휠/올정비/★전국출장판매가능★",
          "Hotmark": "09;12;26",
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2450.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/zxcv369.jpg"
      },
      {
          "Id": "35488667",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture08/pic3548/35488667_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture08/pic3548/35488667_001.jpg",
                  "updatedDate": "2023-07-12T03:28:23Z",
                  "ordering": 1.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 2WD",
          "BadgeDetail": "마스터",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201807.0,
          "FormYear": "2019",
          "Mileage": 50059.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2720.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/sjsj612.jpg"
      },
      {
          "Id": "35258157",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture05/pic3525/35258157_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture05/pic3525/35258157_001.jpg",
                  "updatedDate": "2023-06-12T11:42:34Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture05/pic3525/35258157_003.jpg",
                  "updatedDate": "2023-06-12T11:42:34Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture05/pic3525/35258157_004.jpg",
                  "updatedDate": "2023-06-12T11:42:34Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture05/pic3525/35258157_007.jpg",
                  "updatedDate": "2023-06-12T11:42:34Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "가솔린 2.0 터보 2WD",
          "BadgeDetail": "마스터 스페셜",
          "Transmission": "오토",
          "FuelType": "가솔린",
          "Year": 201903.0,
          "FormYear": "2020",
          "Mileage": 53284.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2760.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/qudwlsglffld.jpg"
      },
      {
          "Id": "35320591",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture02/pic3532/35320591_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture02/pic3532/35320591_001.jpg",
                  "updatedDate": "2023-06-20T10:40:06Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture02/pic3532/35320591_003.jpg",
                  "updatedDate": "2023-06-20T10:40:06Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture02/pic3532/35320591_004.jpg",
                  "updatedDate": "2023-06-20T10:40:06Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture02/pic3532/35320591_007.jpg",
                  "updatedDate": "2023-06-20T10:40:06Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "프레스티지",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201908.0,
          "FormYear": "2020",
          "Mileage": 137731.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 1720.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/beatfive.jpg"
      },
      {
          "Id": "35106020",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture10/pic3510/35106020_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture10/pic3510/35106020_001.jpg",
                  "updatedDate": "2023-05-22T08:56:22Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture10/pic3510/35106020_003.jpg",
                  "updatedDate": "2023-05-22T08:56:22Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture10/pic3510/35106020_004.jpg",
                  "updatedDate": "2023-05-22T08:56:22Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture10/pic3510/35106020_007.jpg",
                  "updatedDate": "2023-05-22T08:56:22Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 2WD",
          "BadgeDetail": "마스터",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201904.0,
          "FormYear": "2020",
          "Mileage": 93231.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 1999.0,
          "OfficeCityState": "경기"
      },
      {
          "Id": "35205741",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture10/pic3520/35205741_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture10/pic3520/35205741_001.jpg",
                  "updatedDate": "2023-06-05T03:35:41Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture10/pic3520/35205741_003.jpg",
                  "updatedDate": "2023-06-05T03:35:41Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture10/pic3520/35205741_004.jpg",
                  "updatedDate": "2023-06-05T03:35:41Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture10/pic3520/35205741_007.jpg",
                  "updatedDate": "2023-06-05T03:35:41Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "프레스티지",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201805.0,
          "FormYear": "2019",
          "Mileage": 95388.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 1950.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/rlwjgo.jpg"
      },
      {
          "Id": "35361475",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture06/pic3536/35361475_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture06/pic3536/35361475_001.jpg",
                  "updatedDate": "2023-06-27T08:08:54Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture06/pic3536/35361475_003.jpg",
                  "updatedDate": "2023-06-27T08:08:54Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture06/pic3536/35361475_004.jpg",
                  "updatedDate": "2023-06-27T08:08:54Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture06/pic3536/35361475_007.jpg",
                  "updatedDate": "2023-06-27T08:08:54Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "노블레스 스페셜",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201901.0,
          "FormYear": "2019",
          "Mileage": 120286.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 1970.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/artky.jpg"
      },
      {
          "Id": "35324197",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture02/pic3532/35324197_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture02/pic3532/35324197_001.jpg",
                  "updatedDate": "2023-06-21T03:40:31Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture02/pic3532/35324197_003.jpg",
                  "updatedDate": "2023-06-21T03:40:31Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture02/pic3532/35324197_004.jpg",
                  "updatedDate": "2023-06-21T03:40:31Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture02/pic3532/35324197_007.jpg",
                  "updatedDate": "2023-06-21T03:40:31Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 4WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201905.0,
          "FormYear": "2020",
          "Mileage": 78948.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2499.0,
          "OfficeCityState": "경기"
      },
      {
          "Id": "35466181",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture06/pic3546/35466181_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture06/pic3546/35466181_001.jpg",
                  "updatedDate": "2023-07-10T01:55:18Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture06/pic3546/35466181_003.jpg",
                  "updatedDate": "2023-07-10T01:55:18Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture06/pic3546/35466181_004.jpg",
                  "updatedDate": "2023-07-10T01:55:18Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture06/pic3546/35466181_007.jpg",
                  "updatedDate": "2023-07-10T01:55:18Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201910.0,
          "FormYear": "2020",
          "Mileage": 116026.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2199.0,
          "OfficeCityState": "경기"
      },
      {
          "Id": "35486250",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture08/pic3548/35486250_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture08/pic3548/35486250_001.jpg",
                  "updatedDate": "2023-07-12T01:18:20Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture08/pic3548/35486250_003.jpg",
                  "updatedDate": "2023-07-12T01:18:20Z",
                  "ordering": 3.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "럭셔리",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201911.0,
          "FormYear": "2020",
          "Mileage": 97400.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 1900.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/yjnr0918.jpg"
      },
      {
          "Id": "35486370",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture08/pic3548/35486370_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture08/pic3548/35486370_001.jpg",
                  "updatedDate": "2023-07-12T01:22:28Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture08/pic3548/35486370_003.jpg",
                  "updatedDate": "2023-07-12T01:22:28Z",
                  "ordering": 3.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "럭셔리",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201911.0,
          "FormYear": "2020",
          "Mileage": 77700.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 1930.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/yjnr0918.jpg"
      },
      {
          "Id": "35486110",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture08/pic3548/35486110_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture08/pic3548/35486110_001.jpg",
                  "updatedDate": "2023-07-12T01:07:55Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture08/pic3548/35486110_003.jpg",
                  "updatedDate": "2023-07-12T01:07:55Z",
                  "ordering": 3.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 2WD",
          "BadgeDetail": "마스터 스페셜",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201907.0,
          "FormYear": "2020",
          "Mileage": 64500.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2600.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/yjnr0918.jpg"
      },
      {
          "Id": "35490245",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture09/pic3549/35490245_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture09/pic3549/35490245_001.jpg",
                  "updatedDate": "2023-07-12T05:12:31Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture09/pic3549/35490245_003.jpg",
                  "updatedDate": "2023-07-12T05:12:31Z",
                  "ordering": 3.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 2WD",
          "BadgeDetail": "노블레스 스페셜",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201711.0,
          "FormYear": "2018",
          "Mileage": 102500.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2180.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/yjnr0918.jpg"
      },
      {
          "Id": "35286956",
          "Separation": [
              "B"
          ],
          "Trust": [
              "HomeService"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture08/pic3528/35283521_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture08/pic3528/35283521_001.jpg",
                  "updatedDate": "2023-06-15T07:30:14Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture08/pic3528/35283521_003.jpg",
                  "updatedDate": "2023-06-15T07:30:14Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture08/pic3528/35283521_004.jpg",
                  "updatedDate": "2023-06-15T07:30:14Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture08/pic3528/35283521_007.jpg",
                  "updatedDate": "2023-06-15T07:30:14Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "마스터 스페셜",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201912.0,
          "FormYear": "2020",
          "Mileage": 102865.0,
          "AdType": [],
          "HomeServiceVerification": "Y",
          "ServiceCopyCar": "DUPLICATION",
          "Price": 2430.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/english117.jpg"
      },
      {
          "Id": "35283521",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture08/pic3528/35283521_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture08/pic3528/35283521_001.jpg",
                  "updatedDate": "2023-06-15T07:30:14Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture08/pic3528/35283521_003.jpg",
                  "updatedDate": "2023-06-15T07:30:14Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture08/pic3528/35283521_004.jpg",
                  "updatedDate": "2023-06-15T07:30:14Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture08/pic3528/35283521_007.jpg",
                  "updatedDate": "2023-06-15T07:30:14Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "마스터 스페셜",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201912.0,
          "FormYear": "2020",
          "Mileage": 102865.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2430.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/english117.jpg"
      },
      {
          "Id": "35301514",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture10/pic3530/35301514_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture10/pic3530/35301514_001.jpg",
                  "updatedDate": "2023-06-18T05:32:52Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture10/pic3530/35301514_003.jpg",
                  "updatedDate": "2023-06-18T05:32:52Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture10/pic3530/35301514_004.jpg",
                  "updatedDate": "2023-06-18T05:32:52Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture10/pic3530/35301514_007.jpg",
                  "updatedDate": "2023-06-18T05:32:52Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "가솔린 2.0 터보 2WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "가솔린",
          "Year": 201806.0,
          "FormYear": "2019",
          "Mileage": 93366.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2250.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/solomon557.jpg"
      },
      {
          "Id": "35396657",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture09/pic3539/35396657_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture09/pic3539/35396657_001.jpg",
                  "updatedDate": "2023-06-30T09:13:58Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture09/pic3539/35396657_003.jpg",
                  "updatedDate": "2023-06-30T09:13:58Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture09/pic3539/35396657_004.jpg",
                  "updatedDate": "2023-06-30T09:13:58Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture09/pic3539/35396657_007.jpg",
                  "updatedDate": "2023-06-30T09:13:58Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201906.0,
          "FormYear": "2020",
          "Mileage": 137609.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 1950.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/lim9502.jpg"
      },
      {
          "Id": "35139754",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture03/pic3513/35139754_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture03/pic3513/35139754_001.jpg",
                  "updatedDate": "2023-06-01T02:40:03Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture03/pic3513/35139754_003.jpg",
                  "updatedDate": "2023-06-01T02:40:03Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture03/pic3513/35139754_004.jpg",
                  "updatedDate": "2023-06-01T02:40:03Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture03/pic3513/35139754_007.jpg",
                  "updatedDate": "2023-06-01T02:40:03Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 4WD",
          "BadgeDetail": "마스터",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201805.0,
          "FormYear": "2019",
          "Mileage": 92909.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2720.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/ych1281.jpg"
      },
      {
          "Id": "35487456",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture08/pic3548/35487456_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture08/pic3548/35487456_001.jpg",
                  "updatedDate": "2023-07-12T02:24:34Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture08/pic3548/35487456_003.jpg",
                  "updatedDate": "2023-07-12T02:24:34Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture08/pic3548/35487456_004.jpg",
                  "updatedDate": "2023-07-12T02:24:34Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture08/pic3548/35487456_007.jpg",
                  "updatedDate": "2023-07-12T02:24:34Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 4WD",
          "BadgeDetail": "마스터",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201908.0,
          "FormYear": "2020",
          "Mileage": 83584.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2950.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/ych1281.jpg"
      },
      {
          "Id": "35466448",
          "Separation": [
              "B"
          ],
          "Trust": [
              "ExtendWarranty",
              "HomeService"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture05/pic3545/35450172_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture05/pic3545/35450172_001.jpg",
                  "updatedDate": "2023-07-10T02:01:21Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture05/pic3545/35450172_003.jpg",
                  "updatedDate": "2023-07-10T02:01:21Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture05/pic3545/35450172_004.jpg",
                  "updatedDate": "2023-07-10T02:01:21Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture05/pic3545/35450172_007.jpg",
                  "updatedDate": "2023-07-10T02:01:21Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "노블레스 스페셜",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201806.0,
          "FormYear": "2019",
          "Mileage": 57529.0,
          "AdType": [],
          "HomeServiceVerification": "Y",
          "ServiceCopyCar": "DUPLICATION",
          "Price": 2650.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/capsul09.jpg"
      },
      {
          "Id": "35450172",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty",
              "ExtendWarranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture05/pic3545/35450172_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture05/pic3545/35450172_001.jpg",
                  "updatedDate": "2023-07-10T02:01:21Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture05/pic3545/35450172_003.jpg",
                  "updatedDate": "2023-07-10T02:01:21Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture05/pic3545/35450172_004.jpg",
                  "updatedDate": "2023-07-10T02:01:21Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture05/pic3545/35450172_007.jpg",
                  "updatedDate": "2023-07-10T02:01:21Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "노블레스 스페셜",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201806.0,
          "FormYear": "2019",
          "Mileage": 57529.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2650.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/capsul09.jpg"
      },
      {
          "Id": "35471159",
          "Separation": [
              "B"
          ],
          "Trust": [
              "HomeService"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture06/pic3546/35466028_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture06/pic3546/35466028_001.jpg",
                  "updatedDate": "2023-07-10T05:57:25Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture06/pic3546/35466028_003.jpg",
                  "updatedDate": "2023-07-10T05:57:25Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture06/pic3546/35466028_004.jpg",
                  "updatedDate": "2023-07-10T05:57:25Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture06/pic3546/35466028_007.jpg",
                  "updatedDate": "2023-07-10T05:57:25Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "가솔린 2.0 터보 2WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "가솔린",
          "Year": 201811.0,
          "FormYear": "2019",
          "Mileage": 61950.0,
          "AdType": [],
          "HomeServiceVerification": "Y",
          "ServiceCopyCar": "DUPLICATION",
          "Price": 2850.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/hyeon6209.jpg"
      },
      {
          "Id": "35466028",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture06/pic3546/35466028_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture06/pic3546/35466028_001.jpg",
                  "updatedDate": "2023-07-10T05:57:25Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture06/pic3546/35466028_003.jpg",
                  "updatedDate": "2023-07-10T05:57:25Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture06/pic3546/35466028_004.jpg",
                  "updatedDate": "2023-07-10T05:57:25Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture06/pic3546/35466028_007.jpg",
                  "updatedDate": "2023-07-10T05:57:25Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "가솔린 2.0 터보 2WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "가솔린",
          "Year": 201811.0,
          "FormYear": "2019",
          "Mileage": 61950.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2850.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/hyeon6209.jpg"
      },
      {
          "Id": "35452218",
          "Separation": [
              "B"
          ],
          "Trust": [
              "ExtendWarranty",
              "HomeService"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture04/pic3544/35444050_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture04/pic3544/35444050_001.jpg",
                  "updatedDate": "2023-07-07T01:41:00Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture04/pic3544/35444050_003.jpg",
                  "updatedDate": "2023-07-07T01:41:00Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture04/pic3544/35444050_004.jpg",
                  "updatedDate": "2023-07-07T01:41:00Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture04/pic3544/35444050_007.jpg",
                  "updatedDate": "2023-07-07T01:41:00Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201801.0,
          "FormYear": "2018",
          "Mileage": 94451.0,
          "AdType": [],
          "HomeServiceVerification": "Y",
          "ServiceCopyCar": "DUPLICATION",
          "Price": 2190.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/wovos99.jpg"
      },
      {
          "Id": "35444050",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty",
              "ExtendWarranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture04/pic3544/35444050_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture04/pic3544/35444050_001.jpg",
                  "updatedDate": "2023-07-07T01:41:00Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture04/pic3544/35444050_003.jpg",
                  "updatedDate": "2023-07-07T01:41:00Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture04/pic3544/35444050_004.jpg",
                  "updatedDate": "2023-07-07T01:41:00Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture04/pic3544/35444050_007.jpg",
                  "updatedDate": "2023-07-07T01:41:00Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201801.0,
          "FormYear": "2018",
          "Mileage": 94451.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2190.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/wovos99.jpg"
      },
      {
          "Id": "35183788",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Compensate"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture08/pic3518/35183788_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture08/pic3518/35183788_001.jpg",
                  "updatedDate": "2023-06-01T06:17:09Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture08/pic3518/35183788_003.jpg",
                  "updatedDate": "2023-06-01T06:17:09Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture08/pic3518/35183788_004.jpg",
                  "updatedDate": "2023-06-01T06:17:09Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture08/pic3518/35183788_007.jpg",
                  "updatedDate": "2023-06-01T06:17:09Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201711.0,
          "FormYear": "2018",
          "Mileage": 53283.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2200.0,
          "OfficeCityState": "서울",
          "DealerPhoto": "/userdata/dealer/photo/klkk6108.jpg"
      },
      {
          "Id": "35443355",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture04/pic3544/35443355_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture04/pic3544/35443355_001.jpg",
                  "updatedDate": "2023-07-06T04:14:55Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture04/pic3544/35443355_003.jpg",
                  "updatedDate": "2023-07-06T04:14:55Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture04/pic3544/35443355_004.jpg",
                  "updatedDate": "2023-07-06T04:14:55Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture04/pic3544/35443355_007.jpg",
                  "updatedDate": "2023-07-06T04:14:55Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201808.0,
          "FormYear": "2019",
          "Mileage": 74665.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2280.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/sjsj612.jpg"
      },
      {
          "Id": "35308561",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture10/pic3530/35308561_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture10/pic3530/35308561_001.jpg",
                  "updatedDate": "2023-06-19T06:35:22Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture10/pic3530/35308561_003.jpg",
                  "updatedDate": "2023-06-19T06:35:22Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture10/pic3530/35308561_004.jpg",
                  "updatedDate": "2023-06-19T06:35:22Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture10/pic3530/35308561_007.jpg",
                  "updatedDate": "2023-06-19T06:35:22Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "프레스티지",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201808.0,
          "FormYear": "2019",
          "Mileage": 54172.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2180.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/sjsj612.jpg"
      },
      {
          "Id": "35267784",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture06/pic3526/35267784_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture06/pic3526/35267784_001.jpg",
                  "updatedDate": "2023-06-13T08:04:15Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture06/pic3526/35267784_003.jpg",
                  "updatedDate": "2023-06-13T08:04:15Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture06/pic3526/35267784_004.jpg",
                  "updatedDate": "2023-06-13T08:04:15Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture06/pic3526/35267784_007.jpg",
                  "updatedDate": "2023-06-13T08:04:15Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 2WD",
          "BadgeDetail": "노블레스 스페셜",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201801.0,
          "FormYear": "2018",
          "Mileage": 75574.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2260.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/sjsj612.jpg"
      },
      {
          "Id": "35457410",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture05/pic3545/35457410_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture05/pic3545/35457410_001.jpg",
                  "updatedDate": "2023-07-07T09:13:40Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture05/pic3545/35457410_003.jpg",
                  "updatedDate": "2023-07-07T09:13:40Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture05/pic3545/35457410_004.jpg",
                  "updatedDate": "2023-07-07T09:13:40Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture05/pic3545/35457410_007.jpg",
                  "updatedDate": "2023-07-07T09:13:40Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 4WD",
          "BadgeDetail": "마스터",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201806.0,
          "FormYear": "2019",
          "Mileage": 85742.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2750.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/kkt4698.jpg"
      },
      {
          "Id": "35126107",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture02/pic3512/35126107_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture02/pic3512/35126107_001.jpg",
                  "updatedDate": "2023-05-24T09:56:15Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture02/pic3512/35126107_003.jpg",
                  "updatedDate": "2023-05-24T09:56:15Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture02/pic3512/35126107_004.jpg",
                  "updatedDate": "2023-05-24T09:56:15Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture02/pic3512/35126107_007.jpg",
                  "updatedDate": "2023-05-24T09:56:15Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 2WD",
          "BadgeDetail": "노블레스 스페셜",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201802.0,
          "FormYear": "2018",
          "Mileage": 94052.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2090.0,
          "OfficeCityState": "경기"
      },
      {
          "Id": "35452008",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture05/pic3545/35452008_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture05/pic3545/35452008_001.jpg",
                  "updatedDate": "2023-07-07T04:46:09Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture05/pic3545/35452008_003.jpg",
                  "updatedDate": "2023-07-07T04:46:09Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture05/pic3545/35452008_004.jpg",
                  "updatedDate": "2023-07-07T04:46:09Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture05/pic3545/35452008_007.jpg",
                  "updatedDate": "2023-07-07T04:46:09Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 2WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201805.0,
          "FormYear": "2019",
          "Mileage": 93199.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2200.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/jinshixi123.jpg"
      },
      {
          "Id": "35232651",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture03/pic3523/35232651_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture03/pic3523/35232651_001.jpg",
                  "updatedDate": "2023-06-08T08:07:24Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture03/pic3523/35232651_003.jpg",
                  "updatedDate": "2023-06-08T08:07:24Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture03/pic3523/35232651_004.jpg",
                  "updatedDate": "2023-06-08T08:07:24Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture03/pic3523/35232651_007.jpg",
                  "updatedDate": "2023-06-08T08:07:24Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "가솔린 2.0 터보 4WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "가솔린",
          "Year": 201805.0,
          "FormYear": "2019",
          "Mileage": 52022.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2930.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/cjs885500.jpg"
      },
      {
          "Id": "35470798",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture07/pic3547/35470798_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture07/pic3547/35470798_001.jpg",
                  "updatedDate": "2023-07-10T06:15:58Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture07/pic3547/35470798_003.jpg",
                  "updatedDate": "2023-07-10T06:15:58Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture07/pic3547/35470798_004.jpg",
                  "updatedDate": "2023-07-10T06:15:58Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture07/pic3547/35470798_007.jpg",
                  "updatedDate": "2023-07-10T06:15:58Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 2WD",
          "BadgeDetail": "마스터 스페셜",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201902.0,
          "FormYear": "2020",
          "Mileage": 110305.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2250.0,
          "OfficeCityState": "경기"
      },
      {
          "Id": "35376501",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture07/pic3537/35376501_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture07/pic3537/35376501_001.jpg",
                  "updatedDate": "2023-07-07T01:07:38Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture07/pic3537/35376501_003.jpg",
                  "updatedDate": "2023-07-07T01:07:38Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture07/pic3537/35376501_004.jpg",
                  "updatedDate": "2023-07-07T01:07:38Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture07/pic3537/35376501_007.jpg",
                  "updatedDate": "2023-07-07T01:07:38Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201901.0,
          "FormYear": "2019",
          "Mileage": 106916.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 1950.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/longlong92.jpg"
      },
      {
          "Id": "35487585",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture08/pic3548/35487585_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture08/pic3548/35487585_001.jpg",
                  "updatedDate": "2023-07-12T02:29:32Z",
                  "ordering": 1.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 2WD",
          "BadgeDetail": "마스터",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201907.0,
          "FormYear": "2020",
          "Mileage": 58175.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2890.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/kito6565.jpg"
      },
      {
          "Id": "35081983",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture08/pic3508/35081983_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture08/pic3508/35081983_001.jpg",
                  "updatedDate": "2023-05-20T09:18:48Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture08/pic3508/35081983_003.jpg",
                  "updatedDate": "2023-05-20T09:18:48Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture08/pic3508/35081983_004.jpg",
                  "updatedDate": "2023-05-20T09:18:48Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture08/pic3508/35081983_007.jpg",
                  "updatedDate": "2023-05-20T09:18:48Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 4WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201803.0,
          "FormYear": "2018",
          "Mileage": 96260.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2130.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/ehcldywjd.jpg"
      },
      {
          "Id": "35486868",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture08/pic3548/35486868_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture08/pic3548/35486868_001.jpg",
                  "updatedDate": "2023-07-12T05:59:30Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture08/pic3548/35486868_003.jpg",
                  "updatedDate": "2023-07-12T05:59:30Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture08/pic3548/35486868_004.jpg",
                  "updatedDate": "2023-07-12T05:59:30Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture08/pic3548/35486868_007.jpg",
                  "updatedDate": "2023-07-12T05:59:30Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "가솔린 2.0 터보 2WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "가솔린",
          "Year": 201812.0,
          "FormYear": "2019",
          "Mileage": 100144.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2450.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/dud4012.jpg"
      },
      {
          "Id": "35311513",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture01/pic3531/35311513_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture01/pic3531/35311513_001.jpg",
                  "updatedDate": "2023-06-19T12:24:04Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture01/pic3531/35311513_003.jpg",
                  "updatedDate": "2023-06-19T12:24:04Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture01/pic3531/35311513_004.jpg",
                  "updatedDate": "2023-06-19T12:24:04Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture01/pic3531/35311513_007.jpg",
                  "updatedDate": "2023-06-19T12:24:04Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 2WD",
          "BadgeDetail": "노블레스 스페셜",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201811.0,
          "FormYear": "2019",
          "Mileage": 77000.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2200.0,
          "OfficeCityState": "서울"
      },
      {
          "Id": "35395575",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture09/pic3539/35395575_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture09/pic3539/35395575_001.jpg",
                  "updatedDate": "2023-06-30T05:47:31Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture09/pic3539/35395575_003.jpg",
                  "updatedDate": "2023-06-30T05:47:31Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture09/pic3539/35395575_004.jpg",
                  "updatedDate": "2023-06-30T05:47:31Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture09/pic3539/35395575_007.jpg",
                  "updatedDate": "2023-06-30T05:47:31Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "마스터",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201902.0,
          "FormYear": "2020",
          "Mileage": 109375.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2150.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/jaewoon12.jpg"
      },
      {
          "Id": "35299283",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture09/pic3529/35299283_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture09/pic3529/35299283_001.jpg",
                  "updatedDate": "2023-06-26T08:17:27Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture09/pic3529/35299283_003.jpg",
                  "updatedDate": "2023-06-26T08:17:27Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture09/pic3529/35299283_004.jpg",
                  "updatedDate": "2023-06-26T08:17:27Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture09/pic3529/35299283_007.jpg",
                  "updatedDate": "2023-06-26T08:17:27Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "가솔린 2.0 터보 4WD",
          "BadgeDetail": "마스터 스페셜",
          "Transmission": "오토",
          "FuelType": "가솔린",
          "Year": 201906.0,
          "FormYear": "2020",
          "Mileage": 122059.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2590.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/manbbang7.jpg"
      },
      {
          "Id": "35465726",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture06/pic3546/35465726_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture06/pic3546/35465726_001.jpg",
                  "updatedDate": "2023-07-10T01:40:47Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture06/pic3546/35465726_003.jpg",
                  "updatedDate": "2023-07-10T01:40:47Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture06/pic3546/35465726_004.jpg",
                  "updatedDate": "2023-07-10T01:40:47Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture06/pic3546/35465726_007.jpg",
                  "updatedDate": "2023-07-10T01:40:47Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 4WD",
          "BadgeDetail": "마스터",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201808.0,
          "FormYear": "2019",
          "Mileage": 82967.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2859.0,
          "OfficeCityState": "경기"
      },
      {
          "Id": "35442327",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture04/pic3544/35442327_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture04/pic3544/35442327_001.jpg",
                  "updatedDate": "2023-07-06T06:13:23Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture04/pic3544/35442327_003.jpg",
                  "updatedDate": "2023-07-06T06:13:23Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture04/pic3544/35442327_004.jpg",
                  "updatedDate": "2023-07-06T06:13:23Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture04/pic3544/35442327_007.jpg",
                  "updatedDate": "2023-07-06T06:13:23Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201904.0,
          "FormYear": "2019",
          "Mileage": 90551.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2230.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/fyt0303.jpg"
      },
      {
          "Id": "35143818",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture04/pic3514/35143818_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture04/pic3514/35143818_001.jpg",
                  "updatedDate": "2023-06-02T05:46:28Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture04/pic3514/35143818_003.jpg",
                  "updatedDate": "2023-06-02T05:46:28Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture04/pic3514/35143818_004.jpg",
                  "updatedDate": "2023-06-02T05:46:28Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture04/pic3514/35143818_007.jpg",
                  "updatedDate": "2023-06-02T05:46:28Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "럭셔리",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201901.0,
          "FormYear": "2019",
          "Mileage": 90930.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 1749.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/aoslwj481.jpg"
      },
      {
          "Id": "35251714",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty",
              "ExtendWarranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture05/pic3525/35251714_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture05/pic3525/35251714_001.jpg",
                  "updatedDate": "2023-06-12T05:11:32Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture05/pic3525/35251714_003.jpg",
                  "updatedDate": "2023-06-12T05:11:32Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture05/pic3525/35251714_004.jpg",
                  "updatedDate": "2023-06-12T05:11:32Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture05/pic3525/35251714_007.jpg",
                  "updatedDate": "2023-06-12T05:11:32Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "프레스티지",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201812.0,
          "FormYear": "2018",
          "Mileage": 79719.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 1850.0,
          "OfficeCityState": "서울",
          "DealerPhoto": "/userdata/dealer/photo/neomiz.jpg"
      },
      {
          "Id": "35339783",
          "Separation": [
              "B"
          ],
          "Trust": [
              "HomeService"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture03/pic3533/35330266_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture03/pic3533/35330266_001.jpg",
                  "updatedDate": "2023-06-23T00:35:01Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture03/pic3533/35330266_003.jpg",
                  "updatedDate": "2023-06-23T00:35:01Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture03/pic3533/35330266_004.jpg",
                  "updatedDate": "2023-06-23T00:35:01Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture03/pic3533/35330266_007.jpg",
                  "updatedDate": "2023-06-23T00:35:01Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201911.0,
          "FormYear": "2020",
          "Mileage": 94348.0,
          "AdType": [],
          "ServiceCopyCar": "DUPLICATION",
          "Price": 2190.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/miuchia9.jpg"
      },
      {
          "Id": "35330266",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture03/pic3533/35330266_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture03/pic3533/35330266_001.jpg",
                  "updatedDate": "2023-06-23T00:35:01Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture03/pic3533/35330266_003.jpg",
                  "updatedDate": "2023-06-23T00:35:01Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture03/pic3533/35330266_004.jpg",
                  "updatedDate": "2023-06-23T00:35:01Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture03/pic3533/35330266_007.jpg",
                  "updatedDate": "2023-06-23T00:35:01Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201911.0,
          "FormYear": "2020",
          "Mileage": 94348.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2190.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/miuchia9.jpg"
      },
      {
          "Id": "35448382",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture04/pic3544/35448382_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture04/pic3544/35448382_001.jpg",
                  "updatedDate": "2023-07-06T08:46:16Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture04/pic3544/35448382_003.jpg",
                  "updatedDate": "2023-07-06T08:46:16Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture04/pic3544/35448382_004.jpg",
                  "updatedDate": "2023-07-06T08:46:16Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture04/pic3544/35448382_007.jpg",
                  "updatedDate": "2023-07-06T08:46:16Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201904.0,
          "FormYear": "2020",
          "Mileage": 100000.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 1899.0,
          "OfficeCityState": "경기"
      },
      {
          "Id": "35286065",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture08/pic3528/35286065_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture08/pic3528/35286065_001.jpg",
                  "updatedDate": "2023-06-22T05:54:19Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture08/pic3528/35286065_003.jpg",
                  "updatedDate": "2023-06-22T05:54:19Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture08/pic3528/35286065_004.jpg",
                  "updatedDate": "2023-06-22T05:54:19Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture08/pic3528/35286065_007.jpg",
                  "updatedDate": "2023-06-22T05:54:19Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 4WD",
          "BadgeDetail": "프레스티지",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201812.0,
          "FormYear": "2019",
          "Mileage": 93000.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2299.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/jyrom.jpg"
      },
      {
          "Id": "35449684",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture04/pic3544/35449684_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture04/pic3544/35449684_001.jpg",
                  "updatedDate": "2023-07-06T12:55:49Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture04/pic3544/35449684_003.jpg",
                  "updatedDate": "2023-07-06T12:55:49Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture04/pic3544/35449684_004.jpg",
                  "updatedDate": "2023-07-06T12:55:49Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture04/pic3544/35449684_007.jpg",
                  "updatedDate": "2023-07-06T12:55:49Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 4WD",
          "BadgeDetail": "프레스티지",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201805.0,
          "FormYear": "2019",
          "Mileage": 93000.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2250.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/jyrom.jpg"
      },
      {
          "Id": "35449655",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture04/pic3544/35449655_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture04/pic3544/35449655_001.jpg",
                  "updatedDate": "2023-07-11T21:58:34Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture04/pic3544/35449655_003.jpg",
                  "updatedDate": "2023-07-11T21:58:34Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture04/pic3544/35449655_004.jpg",
                  "updatedDate": "2023-07-11T21:58:34Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture04/pic3544/35449655_007.jpg",
                  "updatedDate": "2023-07-11T21:58:34Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 4WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201906.0,
          "FormYear": "2020",
          "Mileage": 79000.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2700.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/jyrom.jpg"
      },
      {
          "Id": "35466243",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture06/pic3546/35466243_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture06/pic3546/35466243_001.jpg",
                  "updatedDate": "2023-07-12T06:55:46Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture06/pic3546/35466243_003.jpg",
                  "updatedDate": "2023-07-12T06:55:46Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture06/pic3546/35466243_004.jpg",
                  "updatedDate": "2023-07-12T06:55:46Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture06/pic3546/35466243_007.jpg",
                  "updatedDate": "2023-07-12T06:55:46Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 4WD",
          "BadgeDetail": "마스터",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201906.0,
          "FormYear": "2019",
          "Mileage": 110000.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 3099.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/jyrom.jpg"
      },
      {
          "Id": "35426113",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture02/pic3542/35426113_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture02/pic3542/35426113_001.jpg",
                  "updatedDate": "2023-07-11T09:09:25Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture02/pic3542/35426113_003.jpg",
                  "updatedDate": "2023-07-11T09:09:25Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture02/pic3542/35426113_004.jpg",
                  "updatedDate": "2023-07-11T09:09:25Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture02/pic3542/35426113_007.jpg",
                  "updatedDate": "2023-07-11T09:09:25Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201802.0,
          "FormYear": "2018",
          "Mileage": 81965.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2150.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/gmdma11.jpg"
      },
      {
          "Id": "35364485",
          "Separation": [
              "B"
          ],
          "Trust": [
              "HomeService"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture09/pic3519/35190836_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture09/pic3519/35190836_001.jpg",
                  "updatedDate": "2023-06-05T00:28:45Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture09/pic3519/35190836_003.jpg",
                  "updatedDate": "2023-06-05T00:28:45Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture09/pic3519/35190836_004.jpg",
                  "updatedDate": "2023-06-05T00:28:45Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture09/pic3519/35190836_007.jpg",
                  "updatedDate": "2023-06-05T00:28:45Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "가솔린 2.0 터보 4WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "가솔린",
          "Year": 201709.0,
          "FormYear": "2018",
          "Mileage": 124935.0,
          "AdType": [],
          "HomeServiceVerification": "Y",
          "ServiceCopyCar": "DUPLICATION",
          "Price": 2180.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/akrnd.jpg"
      },
      {
          "Id": "35190836",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture09/pic3519/35190836_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture09/pic3519/35190836_001.jpg",
                  "updatedDate": "2023-06-05T00:28:45Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture09/pic3519/35190836_003.jpg",
                  "updatedDate": "2023-06-05T00:28:45Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture09/pic3519/35190836_004.jpg",
                  "updatedDate": "2023-06-05T00:28:45Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture09/pic3519/35190836_007.jpg",
                  "updatedDate": "2023-06-05T00:28:45Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "가솔린 2.0 터보 4WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "가솔린",
          "Year": 201709.0,
          "FormYear": "2018",
          "Mileage": 124935.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2180.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/akrnd.jpg"
      },
      {
          "Id": "35482676",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture08/pic3548/35482676_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture08/pic3548/35482676_001.jpg",
                  "updatedDate": "2023-07-11T08:07:52Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture08/pic3548/35482676_003.jpg",
                  "updatedDate": "2023-07-11T08:07:52Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture08/pic3548/35482676_004.jpg",
                  "updatedDate": "2023-07-11T08:07:52Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture08/pic3548/35482676_007.jpg",
                  "updatedDate": "2023-07-11T08:07:52Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 4WD",
          "BadgeDetail": "노블레스 스페셜",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201903.0,
          "FormYear": "2019",
          "Mileage": 52014.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2700.0,
          "OfficeCityState": "경기"
      },
      {
          "Id": "35101520",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture10/pic3510/35101520_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture10/pic3510/35101520_001.jpg",
                  "updatedDate": "2023-05-22T03:12:57Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture10/pic3510/35101520_003.jpg",
                  "updatedDate": "2023-05-22T03:12:57Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture10/pic3510/35101520_004.jpg",
                  "updatedDate": "2023-05-22T03:12:57Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture10/pic3510/35101520_007.jpg",
                  "updatedDate": "2023-05-22T03:12:57Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 2WD",
          "BadgeDetail": "넘버원 에디션",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201802.0,
          "FormYear": "2018",
          "Mileage": 53085.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2330.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/toy7907.jpg"
      },
      {
          "Id": "35479756",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture07/pic3547/35479756_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture07/pic3547/35479756_001.jpg",
                  "updatedDate": "2023-07-11T04:59:40Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture07/pic3547/35479756_003.jpg",
                  "updatedDate": "2023-07-11T04:59:40Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture07/pic3547/35479756_004.jpg",
                  "updatedDate": "2023-07-11T04:59:40Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture07/pic3547/35479756_007.jpg",
                  "updatedDate": "2023-07-11T04:59:40Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "마스터 스페셜",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201906.0,
          "FormYear": "2020",
          "Mileage": 116194.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2299.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/yousuk74.jpg"
      },
      {
          "Id": "35259838",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty",
              "ExtendWarranty",
              "HomeService",
              "Meetgo"
          ],
          "Condition": [
              "Inspection",
              "InspectionDirect",
              "Record"
          ],
          "Photo": "/carpicture05/pic3525/35259838_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture05/pic3525/35259838_001.jpg",
                  "updatedDate": "2023-06-13T02:00:28Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture05/pic3525/35259838_003.jpg",
                  "updatedDate": "2023-06-13T02:00:28Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture05/pic3525/35259838_004.jpg",
                  "updatedDate": "2023-06-13T02:00:28Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture05/pic3525/35259838_007.jpg",
                  "updatedDate": "2023-06-13T02:00:28Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 2WD",
          "BadgeDetail": "마스터",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201805.0,
          "FormYear": "2019",
          "Mileage": 102105.0,
          "AdType": [
              "A",
              "B",
              "E"
          ],
          "MobileAdWords": "방문예약 신청이 가능한 믿고 차량입니다.",
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2040.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/doleye95.jpg"
      },
      {
          "Id": "34360635",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty",
              "HomeService",
              "Meetgo"
          ],
          "Condition": [
              "Inspection",
              "InspectionDirect",
              "Record"
          ],
          "Photo": "/carpicture06/pic3436/34360635_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture06/pic3436/34360635_001.jpg",
                  "updatedDate": "2023-03-08T07:12:17Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture06/pic3436/34360635_003.jpg",
                  "updatedDate": "2023-03-08T07:12:17Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture06/pic3436/34360635_004.jpg",
                  "updatedDate": "2023-03-08T07:12:17Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture06/pic3436/34360635_007.jpg",
                  "updatedDate": "2023-03-08T07:12:17Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 4WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201801.0,
          "FormYear": "2018",
          "Mileage": 68921.0,
          "AdType": [
              "A",
              "B",
              "E"
          ],
          "MobileAdWords": "방문예약 신청이 가능한 믿고 차량입니다.",
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2240.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/doleye95.jpg"
      },
      {
          "Id": "35144673",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Meetgo"
          ],
          "Condition": [
              "Inspection",
              "InspectionDirect",
              "Record"
          ],
          "Photo": "/carpicture04/pic3514/35144673_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture04/pic3514/35144673_001.jpg",
                  "updatedDate": "2023-05-26T08:04:27Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture04/pic3514/35144673_003.jpg",
                  "updatedDate": "2023-05-26T08:04:27Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture04/pic3514/35144673_004.jpg",
                  "updatedDate": "2023-05-26T08:04:27Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture04/pic3514/35144673_007.jpg",
                  "updatedDate": "2023-05-26T08:04:27Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 4WD",
          "BadgeDetail": "마스터 스페셜",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201910.0,
          "FormYear": "2020",
          "Mileage": 83339.0,
          "AdType": [
              "A",
              "B",
              "E"
          ],
          "MobileAdWords": "방문예약 신청이 가능한 믿고 차량입니다.",
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2500.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/doleye95.jpg"
      },
      {
          "Id": "34808456",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Meetgo"
          ],
          "Condition": [
              "Inspection",
              "InspectionDirect",
              "Record"
          ],
          "Photo": "/carpicture10/pic3480/34808456_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture10/pic3480/34808456_001.jpg",
                  "updatedDate": "2023-04-11T06:40:57Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture10/pic3480/34808456_003.jpg",
                  "updatedDate": "2023-04-11T06:40:57Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture10/pic3480/34808456_004.jpg",
                  "updatedDate": "2023-04-11T06:40:57Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture10/pic3480/34808456_007.jpg",
                  "updatedDate": "2023-04-11T06:40:57Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "프레스티지",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201903.0,
          "FormYear": "2020",
          "Mileage": 60846.0,
          "AdType": [
              "A",
              "B",
              "E"
          ],
          "MobileAdWords": "방문예약 신청이 가능한 믿고 차량입니다.",
          "ServiceCopyCar": "ORIGINAL",
          "Price": 1880.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/doleye95.jpg"
      },
      {
          "Id": "35173060",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture07/pic3517/35173060_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture07/pic3517/35173060_001.jpg",
                  "updatedDate": "2023-05-31T06:16:14Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture07/pic3517/35173060_003.jpg",
                  "updatedDate": "2023-05-31T06:16:14Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture07/pic3517/35173060_004.jpg",
                  "updatedDate": "2023-05-31T06:16:14Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture07/pic3517/35173060_007.jpg",
                  "updatedDate": "2023-05-31T06:16:14Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "가솔린 2.0 터보 4WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "가솔린",
          "Year": 201710.0,
          "FormYear": "2018",
          "Mileage": 58011.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2690.0,
          "OfficeCityState": "경기"
      },
      {
          "Id": "35465839",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture06/pic3546/35465839_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture06/pic3546/35465839_001.jpg",
                  "updatedDate": "2023-07-10T01:35:16Z",
                  "ordering": 1.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.0 2WD",
          "BadgeDetail": "노블레스",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201803.0,
          "FormYear": "2018",
          "Mileage": 134673.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 1920.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/kykim215.jpg"
      },
      {
          "Id": "35465688",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture06/pic3546/35465688_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture06/pic3546/35465688_001.jpg",
                  "updatedDate": "2023-07-10T01:29:25Z",
                  "ordering": 1.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 2WD",
          "BadgeDetail": "노블레스 스페셜",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201709.0,
          "FormYear": "2018",
          "Mileage": 63093.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2350.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/kykim215.jpg"
      },
      {
          "Id": "35376034",
          "Separation": [
              "B"
          ],
          "Trust": [
              "ExtendWarranty",
              "HomeService"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture07/pic3537/35375403_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture07/pic3537/35375403_001.jpg",
                  "updatedDate": "2023-06-28T05:14:10Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture07/pic3537/35375403_003.jpg",
                  "updatedDate": "2023-06-28T05:14:10Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture07/pic3537/35375403_004.jpg",
                  "updatedDate": "2023-06-28T05:14:10Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture07/pic3537/35375403_007.jpg",
                  "updatedDate": "2023-06-28T05:14:10Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 2WD",
          "BadgeDetail": "마스터",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201901.0,
          "FormYear": "2019",
          "Mileage": 96628.0,
          "AdType": [],
          "HomeServiceVerification": "Y",
          "ServiceCopyCar": "DUPLICATION",
          "Price": 2299.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/wjsaudgk.jpg"
      },
      {
          "Id": "35375403",
          "Separation": [
              "B"
          ],
          "Trust": [
              "Warranty",
              "ExtendWarranty"
          ],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture07/pic3537/35375403_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture07/pic3537/35375403_001.jpg",
                  "updatedDate": "2023-06-28T05:14:10Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture07/pic3537/35375403_003.jpg",
                  "updatedDate": "2023-06-28T05:14:10Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture07/pic3537/35375403_004.jpg",
                  "updatedDate": "2023-06-28T05:14:10Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture07/pic3537/35375403_007.jpg",
                  "updatedDate": "2023-06-28T05:14:10Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 2WD",
          "BadgeDetail": "마스터",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201901.0,
          "FormYear": "2019",
          "Mileage": 96628.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2299.0,
          "OfficeCityState": "경기",
          "DealerPhoto": "/userdata/dealer/photo/wjsaudgk.jpg"
      },
      {
          "Id": "35456273",
          "Separation": [
              "B"
          ],
          "Trust": [],
          "Condition": [
              "Inspection",
              "Record"
          ],
          "Photo": "/carpicture05/pic3545/35456273_",
          "Photos": [
              {
                  "type": "001",
                  "location": "/carpicture05/pic3545/35456273_001.jpg",
                  "updatedDate": "2023-07-07T07:26:28Z",
                  "ordering": 1.0
              },
              {
                  "type": "003",
                  "location": "/carpicture05/pic3545/35456273_003.jpg",
                  "updatedDate": "2023-07-07T07:26:28Z",
                  "ordering": 3.0
              },
              {
                  "type": "004",
                  "location": "/carpicture05/pic3545/35456273_004.jpg",
                  "updatedDate": "2023-07-07T07:26:28Z",
                  "ordering": 4.0
              },
              {
                  "type": "007",
                  "location": "/carpicture05/pic3545/35456273_007.jpg",
                  "updatedDate": "2023-07-07T07:26:28Z",
                  "ordering": 7.0
              }
          ],
          "Manufacturer": "기아",
          "Model": "더 뉴 쏘렌토",
          "ModelGroup": "쏘렌토",
          "Badge": "디젤 2.2 4WD",
          "BadgeDetail": "노블레스 스페셜",
          "Transmission": "오토",
          "FuelType": "디젤",
          "Year": 201803.0,
          "FormYear": "2018",
          "Mileage": 56665.0,
          "AdType": [],
          "ServiceCopyCar": "ORIGINAL",
          "Price": 2750.0,
          "OfficeCityState": "경기"
      }
  ]
}