'https://api.encar.com/search/car/list/mobile?count=true&q=(And.Hidden.N._.(C.CarType.Y._.Manufacturer.%ED%98%84%EB%8C%80.))&inav=%7CMetadata%7CSort'
iNav.Nodes[1].Facets[0].Refinements.Nodes[0].Facets.filter((data)=> data.IsSelected === true)
{
  "Count": 33715,
  "iNav": {
      "Nodes": [
          {
              "IsSelected": true,
              "PlaceholderExpression": "(And.(C.CarType.Y._.Manufacturer.현대.)_.(<!>))",
              "MultiSelectMode": "None",
              "RemoveAction": "(C.CarType.Y._.Manufacturer.현대.)",
              "Facets": [
                  {
                      "IsSelected": true,
                      "Value": "N",
                      "DisplayValue": "N",
                      "Action": "(C.CarType.Y._.Manufacturer.현대.)",
                      "Count": 33715,
                      "Expression": "Hidden.N.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "Y",
                      "DisplayValue": "Y",
                      "Action": "(And.(C.CarType.Y._.Manufacturer.현대.)_.Hidden.Y.)",
                      "Count": 2602,
                      "Expression": "Hidden.Y.",
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
              "PlaceholderExpression": "(And.Hidden.N._.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "Hidden.N.",
              "Facets": [
                  {
                      "IsSelected": true,
                      "Value": "Y",
                      "DisplayValue": "Y",
                      "Action": "Hidden.N.",
                      "Count": 92755,
                      "Refinements": {
                          "Nodes": [
                              {
                                  "IsSelected": true,
                                  "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.Y._.(<!>)))",
                                  "MultiSelectMode": "None",
                                  "RemoveAction": "(And.Hidden.N._.CarType.Y.)",
                                  "Facets": [
                                      {
                                          "IsSelected": true,
                                          "Value": "현대",
                                          "DisplayValue": "현대",
                                          "Action": "(And.Hidden.N._.CarType.Y.)",
                                          "Count": 33715,
                                          "Refinements": {
                                              "Nodes": [
                                                  {
                                                      "IsSelected": false,
                                                      "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.현대._.(<!>))))",
                                                      "MultiSelectMode": "None",
                                                      "RemoveAction": "",
                                                      "Facets": [
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "i30",
                                                              "DisplayValue": "i30",
                                                              "Action": "(And.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.현대._.ModelGroup.i30.)))",
                                                              "Count": 361,
                                                              "Expression": "ModelGroup.i30.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      1.0
                                                                  ],
                                                                  "EngName": [
                                                                      "i30"
                                                                  ],
                                                                  "Code": [
                                                                      "001"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 208.0,
                                                                          "Max": 1928.0
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
                                                              "Value": "i40",
                                                              "DisplayValue": "i40",
                                                              "Action": "(And.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.현대._.ModelGroup.i40.)))",
                                                              "Count": 235,
                                                              "Expression": "ModelGroup.i40.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      2.0
                                                                  ],
                                                                  "EngName": [
                                                                      "i40"
                                                                  ],
                                                                  "Code": [
                                                                      "049"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 532.0,
                                                                          "Max": 1611.0
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
                                                              "Value": "갤로퍼",
                                                              "DisplayValue": "갤로퍼",
                                                              "Action": "(And.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.현대._.ModelGroup.갤로퍼.)))",
                                                              "Count": 67,
                                                              "Expression": "ModelGroup.갤로퍼.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      3.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Galloper"
                                                                  ],
                                                                  "Code": [
                                                                      "002"
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
                                                              "Value": "그라나다",
                                                              "DisplayValue": "그라나다",
                                                              "Action": "(And.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.현대._.ModelGroup.그라나다.)))",
                                                              "Count": 0,
                                                              "Expression": "ModelGroup.그라나다.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      4.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Granada"
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
                                                                          "대형차"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "그랜저",
                                                              "DisplayValue": "그랜저",
                                                              "Action": "(And.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.현대._.ModelGroup.그랜저.)))",
                                                              "Count": 7875,
                                                              "Expression": "ModelGroup.그랜저.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      5.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Grandeur"
                                                                  ],
                                                                  "Code": [
                                                                      "004"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 80.0,
                                                                          "Max": 5663.0
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
                                                              "Value": "그레이스",
                                                              "DisplayValue": "그레이스",
                                                              "Action": "(And.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.현대._.ModelGroup.그레이스.)))",
                                                              "Count": 2,
                                                              "Expression": "ModelGroup.그레이스.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      6.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Grace"
                                                                  ],
                                                                  "Code": [
                                                                      "005"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": null,
                                                                          "Max": null
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "승합차",
                                                                          "화물차"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "넥쏘",
                                                              "DisplayValue": "넥쏘",
                                                              "Action": "(And.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.현대._.ModelGroup.넥쏘.)))",
                                                              "Count": 108,
                                                              "Expression": "ModelGroup.넥쏘.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      7.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Nexo"
                                                                  ],
                                                                  "Code": [
                                                                      "056"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 2001.0,
                                                                          "Max": 3495.0
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
                                                              "Value": "다이너스티",
                                                              "DisplayValue": "다이너스티",
                                                              "Action": "(And.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.현대._.ModelGroup.다이너스티.)))",
                                                              "Count": 14,
                                                              "Expression": "ModelGroup.다이너스티.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      8.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Dynasty"
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
                                                                          "대형차"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "라비타",
                                                              "DisplayValue": "라비타",
                                                              "Action": "(And.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.현대._.ModelGroup.라비타.)))",
                                                              "Count": 0,
                                                              "Expression": "ModelGroup.라비타.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      9.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Lavita"
                                                                  ],
                                                                  "Code": [
                                                                      "007"
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
                                                              "Value": "마르샤",
                                                              "DisplayValue": "마르샤",
                                                              "Action": "(And.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.현대._.ModelGroup.마르샤.)))",
                                                              "Count": 3,
                                                              "Expression": "ModelGroup.마르샤.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      10.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Marcia"
                                                                  ],
                                                                  "Code": [
                                                                      "009"
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
                                                              "Value": "맥스크루즈",
                                                              "DisplayValue": "맥스크루즈",
                                                              "Action": "(And.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.현대._.ModelGroup.맥스크루즈.)))",
                                                              "Count": 243,
                                                              "Expression": "ModelGroup.맥스크루즈.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      11.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Maxcruz"
                                                                  ],
                                                                  "Code": [
                                                                      "050"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 1110.0,
                                                                          "Max": 2703.0
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
                                                              "Value": "베뉴",
                                                              "DisplayValue": "베뉴",
                                                              "Action": "(And.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.현대._.ModelGroup.베뉴.)))",
                                                              "Count": 176,
                                                              "Expression": "ModelGroup.베뉴.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      12.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Venue"
                                                                  ],
                                                                  "Code": [
                                                                      "059"
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
                                                              "Value": "베라크루즈",
                                                              "DisplayValue": "베라크루즈",
                                                              "Action": "(And.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.현대._.ModelGroup.베라크루즈.)))",
                                                              "Count": 256,
                                                              "Expression": "ModelGroup.베라크루즈.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      13.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Veracruz"
                                                                  ],
                                                                  "Code": [
                                                                      "011"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 399.0,
                                                                          "Max": 1559.0
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
                                                              "Value": "베르나",
                                                              "DisplayValue": "베르나",
                                                              "Action": "(And.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.현대._.ModelGroup.베르나.)))",
                                                              "Count": 27,
                                                              "Expression": "ModelGroup.베르나.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      14.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Verna"
                                                                  ],
                                                                  "Code": [
                                                                      "012"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 80.0,
                                                                          "Max": 280.0
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
                                                              "Value": "벨로스터",
                                                              "DisplayValue": "벨로스터",
                                                              "Action": "(And.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.현대._.ModelGroup.벨로스터.)))",
                                                              "Count": 440,
                                                              "Expression": "ModelGroup.벨로스터.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      15.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Veloster"
                                                                  ],
                                                                  "Code": [
                                                                      "048"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 385.0,
                                                                          "Max": 3382.0
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
                                                              "Value": "블루온",
                                                              "DisplayValue": "블루온",
                                                              "Action": "(And.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.현대._.ModelGroup.블루온.)))",
                                                              "Count": 1,
                                                              "Expression": "ModelGroup.블루온.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      16.0
                                                                  ],
                                                                  "EngName": [
                                                                      "BlueOn"
                                                                  ],
                                                                  "Code": [
                                                                      "057"
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
                                                              "Value": "산타모",
                                                              "DisplayValue": "산타모",
                                                              "Action": "(And.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.현대._.ModelGroup.산타모.)))",
                                                              "Count": 1,
                                                              "Expression": "ModelGroup.산타모.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      17.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Santamo"
                                                                  ],
                                                                  "Code": [
                                                                      "013"
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
                                                              "Value": "스쿠프",
                                                              "DisplayValue": "스쿠프",
                                                              "Action": "(And.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.현대._.ModelGroup.스쿠프.)))",
                                                              "Count": 5,
                                                              "Expression": "ModelGroup.스쿠프.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      18.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Scoupe"
                                                                  ],
                                                                  "Code": [
                                                                      "014"
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
                                                              "Value": "스타렉스",
                                                              "DisplayValue": "스타렉스",
                                                              "Action": "(And.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.현대._.ModelGroup.스타렉스.)))",
                                                              "Count": 3276,
                                                              "Expression": "ModelGroup.스타렉스.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      19.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Starex"
                                                                  ],
                                                                  "Code": [
                                                                      "015"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 85.0,
                                                                          "Max": 2847.0
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
                                                              "Value": "스타리아",
                                                              "DisplayValue": "스타리아",
                                                              "Action": "(And.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.현대._.ModelGroup.스타리아.)))",
                                                              "Count": 369,
                                                              "Expression": "ModelGroup.스타리아.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      20.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Staria"
                                                                  ],
                                                                  "Code": [
                                                                      "060"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 2957.0,
                                                                          "Max": 6622.0
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
                                                              "Value": "스텔라",
                                                              "DisplayValue": "스텔라",
                                                              "Action": "(And.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.현대._.ModelGroup.스텔라.)))",
                                                              "Count": 0,
                                                              "Expression": "ModelGroup.스텔라.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      21.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Stella"
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
                                                                          "준중형차"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "싼타페",
                                                              "DisplayValue": "싼타페",
                                                              "Action": "(And.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.현대._.ModelGroup.싼타페.)))",
                                                              "Count": 2661,
                                                              "Expression": "ModelGroup.싼타페.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      22.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Santafe"
                                                                  ],
                                                                  "Code": [
                                                                      "017"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 138.0,
                                                                          "Max": 4798.0
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
                                                              "Value": "쏘나타",
                                                              "DisplayValue": "쏘나타",
                                                              "Action": "(And.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.현대._.ModelGroup.쏘나타.)))",
                                                              "Count": 4747,
                                                              "Expression": "ModelGroup.쏘나타.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      23.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Sonata"
                                                                  ],
                                                                  "Code": [
                                                                      "018"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 169.0,
                                                                          "Max": 3389.0
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
                                                              "Value": "쏠라티",
                                                              "DisplayValue": "쏠라티",
                                                              "Action": "(And.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.현대._.ModelGroup.쏠라티.)))",
                                                              "Count": 62,
                                                              "Expression": "ModelGroup.쏠라티.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      24.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Solati"
                                                                  ],
                                                                  "Code": [
                                                                      "052"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 3301.0,
                                                                          "Max": 4303.0
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
                                                              "Value": "아반떼",
                                                              "DisplayValue": "아반떼",
                                                              "Action": "(And.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.현대._.ModelGroup.아반떼.)))",
                                                              "Count": 4416,
                                                              "Expression": "ModelGroup.아반떼.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      25.0
                                                                  ],
                                                                  "EngName": [
                                                                      "AVANTE"
                                                                  ],
                                                                  "Code": [
                                                                      "019"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 80.0,
                                                                          "Max": 3392.0
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
                                                              "Value": "아슬란",
                                                              "DisplayValue": "아슬란",
                                                              "Action": "(And.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.현대._.ModelGroup.아슬란.)))",
                                                              "Count": 103,
                                                              "Expression": "ModelGroup.아슬란.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      26.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Aslan"
                                                                  ],
                                                                  "Code": [
                                                                      "051"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 1099.0,
                                                                          "Max": 1872.0
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
                                                              "Value": "아이오닉5",
                                                              "DisplayValue": "아이오닉5",
                                                              "Action": "(And.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.현대._.ModelGroup.아이오닉5.)))",
                                                              "Count": 154,
                                                              "Expression": "ModelGroup.아이오닉5.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      27.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Ioniq5"
                                                                  ],
                                                                  "Code": [
                                                                      "061"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 3452.0,
                                                                          "Max": 5270.0
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
                                                              "Value": "아이오닉6",
                                                              "DisplayValue": "아이오닉6",
                                                              "Action": "(And.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.현대._.ModelGroup.아이오닉6.)))",
                                                              "Count": 100,
                                                              "Expression": "ModelGroup.아이오닉6.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      28.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Ioniq6"
                                                                  ],
                                                                  "Code": [
                                                                      "063"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 3728.0,
                                                                          "Max": 5738.0
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
                                                              "Value": "아이오닉",
                                                              "DisplayValue": "아이오닉",
                                                              "Action": "(And.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.현대._.ModelGroup.아이오닉.)))",
                                                              "Count": 251,
                                                              "Expression": "ModelGroup.아이오닉.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      29.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Ioniq"
                                                                  ],
                                                                  "Code": [
                                                                      "053"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 1127.0,
                                                                          "Max": 3379.0
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
                                                              "Value": "아토스",
                                                              "DisplayValue": "아토스",
                                                              "Action": "(And.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.현대._.ModelGroup.아토스.)))",
                                                              "Count": 0,
                                                              "Expression": "ModelGroup.아토스.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      30.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Atoz"
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
                                                              "Value": "에쿠스",
                                                              "DisplayValue": "에쿠스",
                                                              "Action": "(And.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.현대._.ModelGroup.에쿠스.)))",
                                                              "Count": 746,
                                                              "Expression": "ModelGroup.에쿠스.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      31.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Equus"
                                                                  ],
                                                                  "Code": [
                                                                      "021"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 191.0,
                                                                          "Max": 2529.0
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
                                                              "Value": "엑센트",
                                                              "DisplayValue": "엑센트",
                                                              "Action": "(And.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.현대._.ModelGroup.엑센트.)))",
                                                              "Count": 506,
                                                              "Expression": "ModelGroup.엑센트.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      32.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Accent"
                                                                  ],
                                                                  "Code": [
                                                                      "022"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 326.0,
                                                                          "Max": 892.0
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
                                                              "Value": "엑셀",
                                                              "DisplayValue": "엑셀",
                                                              "Action": "(And.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.현대._.ModelGroup.엑셀.)))",
                                                              "Count": 6,
                                                              "Expression": "ModelGroup.엑셀.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      33.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Excel"
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
                                                                          "소형차"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "엘란트라",
                                                              "DisplayValue": "엘란트라",
                                                              "Action": "(And.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.현대._.ModelGroup.엘란트라.)))",
                                                              "Count": 6,
                                                              "Expression": "ModelGroup.엘란트라.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      34.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Elantra"
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
                                                              "Value": "제네시스",
                                                              "DisplayValue": "제네시스",
                                                              "Action": "(And.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.현대._.ModelGroup.제네시스.)))",
                                                              "Count": 1593,
                                                              "Expression": "ModelGroup.제네시스.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      35.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Genesis"
                                                                  ],
                                                                  "Code": [
                                                                      "025"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 335.0,
                                                                          "Max": 2561.0
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "대형차",
                                                                          "스포츠카"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "캐스퍼",
                                                              "DisplayValue": "캐스퍼",
                                                              "Action": "(And.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.현대._.ModelGroup.캐스퍼.)))",
                                                              "Count": 348,
                                                              "Expression": "ModelGroup.캐스퍼.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      36.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Casper"
                                                                  ],
                                                                  "Code": [
                                                                      "062"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 1188.0,
                                                                          "Max": 1823.0
                                                                      }
                                                                  ],
                                                                  "Category": [
                                                                      [
                                                                          "경차",
                                                                          "소형차"
                                                                      ]
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "IsSelected": false,
                                                              "Value": "코나",
                                                              "DisplayValue": "코나",
                                                              "Action": "(And.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.현대._.ModelGroup.코나.)))",
                                                              "Count": 1082,
                                                              "Expression": "ModelGroup.코나.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      37.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Kona"
                                                                  ],
                                                                  "Code": [
                                                                      "055"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 1147.0,
                                                                          "Max": 3237.0
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
                                                              "Value": "코티나",
                                                              "DisplayValue": "코티나",
                                                              "Action": "(And.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.현대._.ModelGroup.코티나.)))",
                                                              "Count": 0,
                                                              "Expression": "ModelGroup.코티나.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      38.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Cotina"
                                                                  ],
                                                                  "Code": [
                                                                      "028"
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
                                                              "Value": "클릭",
                                                              "DisplayValue": "클릭",
                                                              "Action": "(And.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.현대._.ModelGroup.클릭.)))",
                                                              "Count": 5,
                                                              "Expression": "ModelGroup.클릭.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      39.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Click"
                                                                  ],
                                                                  "Code": [
                                                                      "029"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 92.0,
                                                                          "Max": 258.0
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
                                                              "Value": "테라칸",
                                                              "DisplayValue": "테라칸",
                                                              "Action": "(And.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.현대._.ModelGroup.테라칸.)))",
                                                              "Count": 33,
                                                              "Expression": "ModelGroup.테라칸.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      40.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Terracan"
                                                                  ],
                                                                  "Code": [
                                                                      "030"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 141.0,
                                                                          "Max": 422.0
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
                                                              "Value": "투스카니",
                                                              "DisplayValue": "투스카니",
                                                              "Action": "(And.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.현대._.ModelGroup.투스카니.)))",
                                                              "Count": 24,
                                                              "Expression": "ModelGroup.투스카니.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      41.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Tuscani"
                                                                  ],
                                                                  "Code": [
                                                                      "031"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 110.0,
                                                                          "Max": 333.0
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
                                                              "Value": "투싼",
                                                              "DisplayValue": "투싼",
                                                              "Action": "(And.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.현대._.ModelGroup.투싼.)))",
                                                              "Count": 1840,
                                                              "Expression": "ModelGroup.투싼.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      42.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Tucson"
                                                                  ],
                                                                  "Code": [
                                                                      "032"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 140.0,
                                                                          "Max": 3863.0
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
                                                              "Value": "트라제 XG",
                                                              "DisplayValue": "트라제 XG",
                                                              "Action": "(And.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.현대._.ModelGroup.트라제 XG.)))",
                                                              "Count": 15,
                                                              "Expression": "ModelGroup.트라제 XG.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      43.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Traget XG"
                                                                  ],
                                                                  "Code": [
                                                                      "034"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 122.0,
                                                                          "Max": 250.0
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
                                                              "Value": "티뷰론",
                                                              "DisplayValue": "티뷰론",
                                                              "Action": "(And.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.현대._.ModelGroup.티뷰론.)))",
                                                              "Count": 5,
                                                              "Expression": "ModelGroup.티뷰론.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      44.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Tiburon"
                                                                  ],
                                                                  "Code": [
                                                                      "035"
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
                                                              "Value": "팰리세이드",
                                                              "DisplayValue": "팰리세이드",
                                                              "Action": "(And.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.현대._.ModelGroup.팰리세이드.)))",
                                                              "Count": 1545,
                                                              "Expression": "ModelGroup.팰리세이드.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      45.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Palisade"
                                                                  ],
                                                                  "Code": [
                                                                      "058"
                                                                  ],
                                                                  "Price": [
                                                                      {
                                                                          "Min": 2591.0,
                                                                          "Max": 6602.0
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
                                                              "Value": "포니",
                                                              "DisplayValue": "포니",
                                                              "Action": "(And.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.현대._.ModelGroup.포니.)))",
                                                              "Count": 8,
                                                              "Expression": "ModelGroup.포니.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      46.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Pony"
                                                                  ],
                                                                  "Code": [
                                                                      "036"
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
                                                              "Value": "프레스토",
                                                              "DisplayValue": "프레스토",
                                                              "Action": "(And.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.현대._.ModelGroup.프레스토.)))",
                                                              "Count": 0,
                                                              "Expression": "ModelGroup.프레스토.",
                                                              "Metadata": {
                                                                  "Ordering": [
                                                                      47.0
                                                                  ],
                                                                  "EngName": [
                                                                      "Presto"
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
                                              "BreadCrumbs": []
                                          },
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
                                                      "Max": 6622.0
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
                                          "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.제네시스.))",
                                          "Count": 6728,
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
                                                      "Min": 1956.0,
                                                      "Max": 17133.0
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
                                          "IsSelected": false,
                                          "Value": "기아",
                                          "DisplayValue": "기아",
                                          "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.기아.))",
                                          "Count": 31062,
                                          "Expression": "Manufacturer.기아.",
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
                                                      "Min": 81.0,
                                                      "Max": 8473.0
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
                                          "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.쉐보레(GM대우_).))",
                                          "Count": 8638,
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
                                                      "Max": 5074.0
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
                                          "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.르노코리아(삼성_).))",
                                          "Count": 6668,
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
                                                      "Min": 94.0,
                                                      "Max": 3409.0
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
                                          "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.KG모빌리티(쌍용_).))",
                                          "Count": 5887,
                                          "Expression": "Manufacturer.KG모빌리티(쌍용_).",
                                          "Metadata": {
                                              "Ordering": [
                                                  50.0
                                              ],
                                              "EngName": [
                                                  "KG_Mobility_Ssangyong"
                                              ],
                                              "Code": [
                                                  "004"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": 81.0,
                                                      "Max": 4443.0
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
                                          "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.기타 제조사.))",
                                          "Count": 57,
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
                                  "Facet": "현대",
                                  "FacetDisplay": "현대",
                                  "Children": [],
                                  "Type": "FacetBreadCrumb",
                                  "RemoveAction": "(And.Hidden.N._.CarType.Y.)"
                              }
                          ]
                      },
                      "Expression": "(C.CarType.Y._.Manufacturer.현대.)",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "A",
                      "DisplayValue": "A",
                      "Action": "(And.Hidden.N._.(Or.(C.CarType.Y._.Manufacturer.현대.)_.CarType.A.))",
                      "Count": 134932,
                      "Expression": "CarType.A.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "N",
                      "DisplayValue": "N",
                      "Action": "(And.Hidden.N._.(Or.(C.CarType.Y._.Manufacturer.현대.)_.CarType.N.))",
                      "Count": 42177,
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
              "IsSelected": false,
              "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "경차",
                      "DisplayValue": "경차",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Category.경차.)",
                      "Count": 349,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Category.소형차.)",
                      "Count": 552,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Category.준중형차.)",
                      "Count": 5621,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Category.중형차.)",
                      "Count": 5085,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Category.대형차.)",
                      "Count": 10104,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Category.스포츠카.)",
                      "Count": 268,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Category.SUV.)",
                      "Count": 8011,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Category.RV.)",
                      "Count": 16,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Category.경승합차.)",
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Category.승합차.)",
                      "Count": 3709,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Category.화물차.)",
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Category.기타.)",
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
              "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.(<!>))",
              "MultiSelectMode": "None",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "경차",
                      "DisplayValue": "경차",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.CategoryPath.경차.)",
                      "Count": 349,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.CategoryPath.소형차.)",
                      "Count": 552,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.CategoryPath.준중형차.)",
                      "Count": 5621,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.CategoryPath.중형차.)",
                      "Count": 5085,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.CategoryPath.대형차.)",
                      "Count": 10104,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.CategoryPath.스포츠카.)",
                      "Count": 268,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.CategoryPath.SUV.)",
                      "Count": 8011,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.CategoryPath.RV.)",
                      "Count": 16,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.CategoryPath.경승합차.)",
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.CategoryPath.승합차.)",
                      "Count": 3709,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.CategoryPath.화물차.)",
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.CategoryPath.기타.)",
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
              "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "N",
                      "DisplayValue": "N",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.GreenType.N.)",
                      "Count": 28509,
                      "Expression": "GreenType.N.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "Y",
                      "DisplayValue": "Y",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.GreenType.Y.)",
                      "Count": 5206,
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
              "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.(<!>))",
              "MultiSelectMode": "None",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "A",
                      "DisplayValue": "A",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.ModelCarType.A.)",
                      "Count": 33715,
                      "Expression": "ModelCarType.A.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "Y",
                      "DisplayValue": "Y",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.ModelCarType.Y.)",
                      "Count": 33715,
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
              "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "Green",
                      "DisplayValue": "Green",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.AttributeType.Green.)",
                      "Count": 5206,
                      "Expression": "AttributeType.Green.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "Lease",
                      "DisplayValue": "Lease",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.AttributeType.Lease.)",
                      "Count": 324,
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
              "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "일반",
                      "DisplayValue": "일반",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.SellType.일반.)",
                      "Count": 33391,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.SellType.리스승계.)",
                      "Count": 89,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.SellType.렌트.)",
                      "Count": 235,
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
              "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "운용리스",
                      "DisplayValue": "운용리스",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.LeaseType.운용리스.)",
                      "Count": 73,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.LeaseType.금융리스.)",
                      "Count": 16,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.LeaseType.렌트승계.)",
                      "Count": 235,
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
              "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "승계지원금 포함",
                      "DisplayValue": "승계지원금 포함",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.LeaseBenefits.승계지원금 포함.)",
                      "Count": 75,
                      "Expression": "LeaseBenefits.승계지원금 포함.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "자동차세 포함",
                      "DisplayValue": "자동차세 포함",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.LeaseBenefits.자동차세 포함.)",
                      "Count": 247,
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
              "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "오토",
                      "DisplayValue": "오토",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Transmission.오토.)",
                      "Count": 33122,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Transmission.수동.)",
                      "Count": 575,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Transmission.세미오토.)",
                      "Count": 5,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Transmission.CVT.)",
                      "Count": 13,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Transmission.기타.)",
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
              "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "p0005",
                      "DisplayValue": "500만원 미만",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Price.p0005.)",
                      "Count": 2872,
                      "Expression": "Price.p0005.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "p0510",
                      "DisplayValue": "500 ~ 1,000만원 미만",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Price.p0510.)",
                      "Count": 7856,
                      "Expression": "Price.p0510.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "p1015",
                      "DisplayValue": "1,000 ~ 1,500만원 미만",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Price.p1015.)",
                      "Count": 6842,
                      "Expression": "Price.p1015.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "p1520",
                      "DisplayValue": "1,500 ~ 2,000만원 미만",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Price.p1520.)",
                      "Count": 5649,
                      "Expression": "Price.p1520.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "p2025",
                      "DisplayValue": "2,000 ~ 2,500만원 미만",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Price.p2025.)",
                      "Count": 3459,
                      "Expression": "Price.p2025.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "p2530",
                      "DisplayValue": "2,500 ~ 3,000만원 미만",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Price.p2530.)",
                      "Count": 2340,
                      "Expression": "Price.p2530.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "p3035",
                      "DisplayValue": "3,000 ~ 3,500만원 미만",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Price.p3035.)",
                      "Count": 1727,
                      "Expression": "Price.p3035.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "p3540",
                      "DisplayValue": "3,500 ~ 4,000만원 미만",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Price.p3540.)",
                      "Count": 1174,
                      "Expression": "Price.p3540.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "p4045",
                      "DisplayValue": "4,000 ~ 4,500만원 미만",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Price.p4045.)",
                      "Count": 650,
                      "Expression": "Price.p4045.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "p4550",
                      "DisplayValue": "4,500 ~ 5,000만원 미만",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Price.p4550.)",
                      "Count": 366,
                      "Expression": "Price.p4550.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "p5099",
                      "DisplayValue": "5,000만원 이상",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Price.p5099.)",
                      "Count": 780,
                      "Expression": "Price.p5099.",
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
              "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "경기",
                      "DisplayValue": "경기",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.OfficeCityState.경기.)",
                      "Count": 11993,
                      "Expression": "OfficeCityState.경기.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "대구",
                      "DisplayValue": "대구",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.OfficeCityState.대구.)",
                      "Count": 4419,
                      "Expression": "OfficeCityState.대구.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "부산",
                      "DisplayValue": "부산",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.OfficeCityState.부산.)",
                      "Count": 2993,
                      "Expression": "OfficeCityState.부산.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "서울",
                      "DisplayValue": "서울",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.OfficeCityState.서울.)",
                      "Count": 2992,
                      "Expression": "OfficeCityState.서울.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "인천",
                      "DisplayValue": "인천",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.OfficeCityState.인천.)",
                      "Count": 1757,
                      "Expression": "OfficeCityState.인천.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "대전",
                      "DisplayValue": "대전",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.OfficeCityState.대전.)",
                      "Count": 1756,
                      "Expression": "OfficeCityState.대전.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "광주",
                      "DisplayValue": "광주",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.OfficeCityState.광주.)",
                      "Count": 1505,
                      "Expression": "OfficeCityState.광주.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "전북",
                      "DisplayValue": "전북",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.OfficeCityState.전북.)",
                      "Count": 1268,
                      "Expression": "OfficeCityState.전북.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "울산",
                      "DisplayValue": "울산",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.OfficeCityState.울산.)",
                      "Count": 1207,
                      "Expression": "OfficeCityState.울산.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "경남",
                      "DisplayValue": "경남",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.OfficeCityState.경남.)",
                      "Count": 1068,
                      "Expression": "OfficeCityState.경남.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "충남",
                      "DisplayValue": "충남",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.OfficeCityState.충남.)",
                      "Count": 1047,
                      "Expression": "OfficeCityState.충남.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "충북",
                      "DisplayValue": "충북",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.OfficeCityState.충북.)",
                      "Count": 609,
                      "Expression": "OfficeCityState.충북.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "경북",
                      "DisplayValue": "경북",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.OfficeCityState.경북.)",
                      "Count": 521,
                      "Expression": "OfficeCityState.경북.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "전남",
                      "DisplayValue": "전남",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.OfficeCityState.전남.)",
                      "Count": 255,
                      "Expression": "OfficeCityState.전남.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "제주",
                      "DisplayValue": "제주",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.OfficeCityState.제주.)",
                      "Count": 163,
                      "Expression": "OfficeCityState.제주.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "강원",
                      "DisplayValue": "강원",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.OfficeCityState.강원.)",
                      "Count": 125,
                      "Expression": "OfficeCityState.강원.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "세종",
                      "DisplayValue": "세종",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.OfficeCityState.세종.)",
                      "Count": 6,
                      "Expression": "OfficeCityState.세종.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "null",
                      "DisplayValue": "null",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.OfficeCityState.null.)",
                      "Count": 0,
                      "Expression": "OfficeCityState.null.",
                      "Metadata": {}
                  }
              ],
              "Metadata": {},
              "Name": "OfficeCityState",
              "DisplayName": "지역(시도)",
              "Type": "Aspect"
          },
          {
              "IsSelected": false,
              "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "가솔린",
                      "DisplayValue": "가솔린",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.FuelType.가솔린.)",
                      "Count": 17083,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.FuelType.디젤.)",
                      "Count": 9341,
                      "Expression": "FuelType.디젤.",
                      "Metadata": {
                          "Code": [
                              "002"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "LPG(일반인 구입)",
                      "DisplayValue": "LPG(일반인 구입)",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.FuelType.LPG(일반인 구입_).)",
                      "Count": 4000,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.FuelType.가솔린+전기.)",
                      "Count": 2445,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.FuelType.디젤+전기.)",
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.FuelType.LPG+전기.)",
                      "Count": 51,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.FuelType.가솔린+LPG.)",
                      "Count": 34,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.FuelType.가솔린+CNG.)",
                      "Count": 7,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.FuelType.전기.)",
                      "Count": 638,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.FuelType.수소.)",
                      "Count": 112,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.FuelType.CNG.)",
                      "Count": 4,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.FuelType.기타.)",
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
              "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "Meetgo",
                      "DisplayValue": "믿고",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Trust.Meetgo.)",
                      "Count": 126,
                      "Expression": "Trust.Meetgo.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "HomeService",
                      "DisplayValue": "엔카홈서비스",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Trust.HomeService.)",
                      "Count": 4717,
                      "Expression": "Trust.HomeService.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "Warranty",
                      "DisplayValue": "엔카진단",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Trust.Warranty.)",
                      "Count": 12339,
                      "Expression": "Trust.Warranty.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "ExtendWarranty",
                      "DisplayValue": "엔카보증",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Trust.ExtendWarranty.)",
                      "Count": 7007,
                      "Expression": "Trust.ExtendWarranty.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "ExtendWarrantyImported",
                      "DisplayValue": "엔카보증(수입차)",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Trust.ExtendWarrantyImported.)",
                      "Count": 0,
                      "Expression": "Trust.ExtendWarrantyImported.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "Compensate",
                      "DisplayValue": "헛걸음보상",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Trust.Compensate.)",
                      "Count": 793,
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
              "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.(<!>))",
              "MultiSelectMode": "And",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "InspectionDirect",
                      "DisplayValue": "엔카(직영) 성능점검",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Condition.InspectionDirect.)",
                      "Count": 575,
                      "Expression": "Condition.InspectionDirect.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "Inspection",
                      "DisplayValue": "성능기록부",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Condition.Inspection.)",
                      "Count": 31155,
                      "Expression": "Condition.Inspection.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "Record",
                      "DisplayValue": "보험이력",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Condition.Record.)",
                      "Count": 31672,
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
              "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "A",
                      "DisplayValue": "개인",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Separation.A.)",
                      "Count": 469,
                      "Expression": "Separation.A.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "B",
                      "DisplayValue": "딜러",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Separation.B.)",
                      "Count": 32831,
                      "Expression": "Separation.B.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "F",
                      "DisplayValue": "브랜드인증",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Separation.F.)",
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
              "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.(<!>))",
              "MultiSelectMode": "And",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "18",
                      "DisplayValue": "18",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Hotmarks.18.)",
                      "Count": 6,
                      "Expression": "Hotmarks.18.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "08",
                      "DisplayValue": "08",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Hotmarks.08.)",
                      "Count": 62,
                      "Expression": "Hotmarks.08.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "19",
                      "DisplayValue": "19",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Hotmarks.19.)",
                      "Count": 860,
                      "Expression": "Hotmarks.19.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "29",
                      "DisplayValue": "29",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Hotmarks.29.)",
                      "Count": 203,
                      "Expression": "Hotmarks.29.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "28",
                      "DisplayValue": "28",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Hotmarks.28.)",
                      "Count": 177,
                      "Expression": "Hotmarks.28.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "05",
                      "DisplayValue": "05",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Hotmarks.05.)",
                      "Count": 2,
                      "Expression": "Hotmarks.05.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "04",
                      "DisplayValue": "04",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Hotmarks.04.)",
                      "Count": 86,
                      "Expression": "Hotmarks.04.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "14",
                      "DisplayValue": "14",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Hotmarks.14.)",
                      "Count": 2563,
                      "Expression": "Hotmarks.14.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "07",
                      "DisplayValue": "07",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Hotmarks.07.)",
                      "Count": 5,
                      "Expression": "Hotmarks.07.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "27",
                      "DisplayValue": "27",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Hotmarks.27.)",
                      "Count": 1,
                      "Expression": "Hotmarks.27.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "15",
                      "DisplayValue": "15",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Hotmarks.15.)",
                      "Count": 2012,
                      "Expression": "Hotmarks.15.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "06",
                      "DisplayValue": "06",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Hotmarks.06.)",
                      "Count": 7,
                      "Expression": "Hotmarks.06.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "26",
                      "DisplayValue": "26",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Hotmarks.26.)",
                      "Count": 423,
                      "Expression": "Hotmarks.26.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "01",
                      "DisplayValue": "01",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Hotmarks.01.)",
                      "Count": 23,
                      "Expression": "Hotmarks.01.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "17",
                      "DisplayValue": "17",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Hotmarks.17.)",
                      "Count": 790,
                      "Expression": "Hotmarks.17.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "10",
                      "DisplayValue": "10",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Hotmarks.10.)",
                      "Count": 915,
                      "Expression": "Hotmarks.10.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "24",
                      "DisplayValue": "24",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Hotmarks.24.)",
                      "Count": 471,
                      "Expression": "Hotmarks.24.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "03",
                      "DisplayValue": "03",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Hotmarks.03.)",
                      "Count": 90,
                      "Expression": "Hotmarks.03.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "11",
                      "DisplayValue": "11",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Hotmarks.11.)",
                      "Count": 296,
                      "Expression": "Hotmarks.11.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "23",
                      "DisplayValue": "23",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Hotmarks.23.)",
                      "Count": 55,
                      "Expression": "Hotmarks.23.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "22",
                      "DisplayValue": "22",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Hotmarks.22.)",
                      "Count": 123,
                      "Expression": "Hotmarks.22.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "02",
                      "DisplayValue": "02",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Hotmarks.02.)",
                      "Count": 175,
                      "Expression": "Hotmarks.02.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "12",
                      "DisplayValue": "12",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Hotmarks.12.)",
                      "Count": 851,
                      "Expression": "Hotmarks.12.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "21",
                      "DisplayValue": "21",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Hotmarks.21.)",
                      "Count": 7,
                      "Expression": "Hotmarks.21.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "13",
                      "DisplayValue": "13",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Hotmarks.13.)",
                      "Count": 2268,
                      "Expression": "Hotmarks.13.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "20",
                      "DisplayValue": "20",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Hotmarks.20.)",
                      "Count": 101,
                      "Expression": "Hotmarks.20.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "09",
                      "DisplayValue": "09",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Hotmarks.09.)",
                      "Count": 1163,
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
              "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "r0002",
                      "DisplayValue": "2만 km 미만",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Mileage.r0002.)",
                      "Count": 3004,
                      "Expression": "Mileage.r0002.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "r0204",
                      "DisplayValue": "2만 ~ 4만 km 미만",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Mileage.r0204.)",
                      "Count": 3822,
                      "Expression": "Mileage.r0204.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "r0406",
                      "DisplayValue": "4만 ~ 6만 km 미만",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Mileage.r0406.)",
                      "Count": 4343,
                      "Expression": "Mileage.r0406.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "r0608",
                      "DisplayValue": "6만 ~ 8만 km 미만",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Mileage.r0608.)",
                      "Count": 4362,
                      "Expression": "Mileage.r0608.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "r0810",
                      "DisplayValue": "8만 ~ 10만 km 미만",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Mileage.r0810.)",
                      "Count": 4266,
                      "Expression": "Mileage.r0810.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "r1099",
                      "DisplayValue": "10만 km 이상",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Mileage.r1099.)",
                      "Count": 13918,
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
              "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "흰색",
                      "DisplayValue": "흰색",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Color.흰색.)",
                      "Count": 10960,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Color.검정색.)",
                      "Count": 8359,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Color.쥐색.)",
                      "Count": 5330,
                      "Expression": "Color.쥐색.",
                      "Metadata": {
                          "Expression": [
                              "#585A59;#585A59"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "은색",
                      "DisplayValue": "은색",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Color.은색.)",
                      "Count": 3919,
                      "Expression": "Color.은색.",
                      "Metadata": {
                          "Expression": [
                              "#C0C0C0;#C0C0C0"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "청색",
                      "DisplayValue": "청색",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Color.청색.)",
                      "Count": 1456,
                      "Expression": "Color.청색.",
                      "Metadata": {
                          "Expression": [
                              "#124280;#124280"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "은회색",
                      "DisplayValue": "은회색",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Color.은회색.)",
                      "Count": 1366,
                      "Expression": "Color.은회색.",
                      "Metadata": {
                          "Expression": [
                              "#D3D3D3;#D3D3D3"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "노란색",
                      "DisplayValue": "노란색",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Color.노란색.)",
                      "Count": 678,
                      "Expression": "Color.노란색.",
                      "Metadata": {
                          "Expression": [
                              "#ffff00;#ffff00"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "빨간색",
                      "DisplayValue": "빨간색",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Color.빨간색.)",
                      "Count": 351,
                      "Expression": "Color.빨간색.",
                      "Metadata": {
                          "Expression": [
                              "#ff0000;#ff0000"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "진주색",
                      "DisplayValue": "진주색",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Color.진주색.)",
                      "Count": 263,
                      "Expression": "Color.진주색.",
                      "Metadata": {
                          "Expression": [
                              "#FFFAFA;#FFFAFA"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "갈색",
                      "DisplayValue": "갈색",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Color.갈색.)",
                      "Count": 150,
                      "Expression": "Color.갈색.",
                      "Metadata": {
                          "Expression": [
                              "#3D3624;#3D3624"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "하늘색",
                      "DisplayValue": "하늘색",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Color.하늘색.)",
                      "Count": 135,
                      "Expression": "Color.하늘색.",
                      "Metadata": {
                          "Expression": [
                              "#75919C;#75919C"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "담녹색",
                      "DisplayValue": "담녹색",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Color.담녹색.)",
                      "Count": 104,
                      "Expression": "Color.담녹색.",
                      "Metadata": {
                          "Expression": [
                              "#1D444B;#1D444B"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "검정투톤",
                      "DisplayValue": "검정투톤",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Color.검정투톤.)",
                      "Count": 73,
                      "Expression": "Color.검정투톤.",
                      "Metadata": {
                          "Expression": [
                              "#000000;#464741"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "은색투톤",
                      "DisplayValue": "은색투톤",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Color.은색투톤.)",
                      "Count": 65,
                      "Expression": "Color.은색투톤.",
                      "Metadata": {
                          "Expression": [
                              "#c0c0c0;#464741"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "녹색",
                      "DisplayValue": "녹색",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Color.녹색.)",
                      "Count": 64,
                      "Expression": "Color.녹색.",
                      "Metadata": {
                          "Expression": [
                              "#00cc00;#00cc00"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "연두색",
                      "DisplayValue": "연두색",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Color.연두색.)",
                      "Count": 62,
                      "Expression": "Color.연두색.",
                      "Metadata": {
                          "Expression": [
                              "#9AB95C;#9AB95C"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "명은색",
                      "DisplayValue": "명은색",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Color.명은색.)",
                      "Count": 58,
                      "Expression": "Color.명은색.",
                      "Metadata": {
                          "Expression": [
                              "#CFD8E7;#CFD8E7"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "은하색",
                      "DisplayValue": "은하색",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Color.은하색.)",
                      "Count": 57,
                      "Expression": "Color.은하색.",
                      "Metadata": {
                          "Expression": [
                              "#A6B2B0;#A6B2B0"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "갈대색",
                      "DisplayValue": "갈대색",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Color.갈대색.)",
                      "Count": 42,
                      "Expression": "Color.갈대색.",
                      "Metadata": {
                          "Expression": [
                              "#808275;#808275"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "연금색",
                      "DisplayValue": "연금색",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Color.연금색.)",
                      "Count": 42,
                      "Expression": "Color.연금색.",
                      "Metadata": {
                          "Expression": [
                              "#8E8574;#8E8574"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "흰색투톤",
                      "DisplayValue": "흰색투톤",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Color.흰색투톤.)",
                      "Count": 41,
                      "Expression": "Color.흰색투톤.",
                      "Metadata": {
                          "Expression": [
                              "#ffffff;#464741"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "청옥색",
                      "DisplayValue": "청옥색",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Color.청옥색.)",
                      "Count": 36,
                      "Expression": "Color.청옥색.",
                      "Metadata": {
                          "Expression": [
                              "#1F7D7C;#1F7D7C"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "주황색",
                      "DisplayValue": "주황색",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Color.주황색.)",
                      "Count": 34,
                      "Expression": "Color.주황색.",
                      "Metadata": {
                          "Expression": [
                              "#A94828;#A94828"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "자주색",
                      "DisplayValue": "자주색",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Color.자주색.)",
                      "Count": 20,
                      "Expression": "Color.자주색.",
                      "Metadata": {
                          "Expression": [
                              "#800080;#800080"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "금색",
                      "DisplayValue": "금색",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Color.금색.)",
                      "Count": 18,
                      "Expression": "Color.금색.",
                      "Metadata": {
                          "Expression": [
                              "#837538;#837538"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "보라색",
                      "DisplayValue": "보라색",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Color.보라색.)",
                      "Count": 12,
                      "Expression": "Color.보라색.",
                      "Metadata": {
                          "Expression": [
                              "#46293B;#46293B"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "진주투톤",
                      "DisplayValue": "진주투톤",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Color.진주투톤.)",
                      "Count": 10,
                      "Expression": "Color.진주투톤.",
                      "Metadata": {
                          "Expression": [
                              "#F7F7F5;#464741"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "금색투톤",
                      "DisplayValue": "금색투톤",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Color.금색투톤.)",
                      "Count": 5,
                      "Expression": "Color.금색투톤.",
                      "Metadata": {
                          "Expression": [
                              "#837538;#464741"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "분홍색",
                      "DisplayValue": "분홍색",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Color.분홍색.)",
                      "Count": 3,
                      "Expression": "Color.분홍색.",
                      "Metadata": {
                          "Expression": [
                              "#EECACE;#EECACE"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "갈색투톤",
                      "DisplayValue": "갈색투톤",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Color.갈색투톤.)",
                      "Count": 2,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Color.검은색.)",
                      "Count": 0,
                      "Expression": "Color.검은색.",
                      "Metadata": {}
                  }
              ],
              "Metadata": {},
              "Name": "Color",
              "DisplayName": "색상",
              "Type": "Aspect"
          },
          {
              "IsSelected": false,
              "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.(<!>))",
              "MultiSelectMode": "And",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "선루프",
                      "DisplayValue": "선루프",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.선루프.)",
                      "Count": 7782,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.헤드램프(HID_).)",
                      "Count": 4863,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.헤드램프(LED_).)",
                      "Count": 10260,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.파워 전동 트렁크.)",
                      "Count": 7499,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.고스트 도어 클로징.)",
                      "Count": 340,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.전동접이 사이드 미러.)",
                      "Count": 32210,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.알루미늄 휠.)",
                      "Count": 32513,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.루프랙.)",
                      "Count": 7195,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.열선 스티어링 휠.)",
                      "Count": 23619,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.전동 조절 스티어링 휠.)",
                      "Count": 5725,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.패들 시프트.)",
                      "Count": 8586,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.스티어링 휠 리모컨.)",
                      "Count": 30881,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.ECM 룸미러.)",
                      "Count": 23481,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.하이패스.)",
                      "Count": 25293,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.파워 도어록.)",
                      "Count": 32734,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.파워 스티어링 휠.)",
                      "Count": 32699,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.파워 윈도우.)",
                      "Count": 32977,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.에어백(운전석_).)",
                      "Count": 33039,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.에어백(동승석_).)",
                      "Count": 32100,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.에어백(사이드_).)",
                      "Count": 29443,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.에어백(커튼_).)",
                      "Count": 27594,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.브레이크 잠김 방지(ABS_).)",
                      "Count": 32155,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.미끄럼 방지(TCS_).)",
                      "Count": 30083,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.차체자세 제어장치(ESC_).)",
                      "Count": 29681,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.타이어 공기압센서(TPMS_).)",
                      "Count": 26534,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.차선이탈 경보 시스템(LDWS_).)",
                      "Count": 13290,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.전자제어 서스펜션(ECS_).)",
                      "Count": 804,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.주차감지센서(전방_).)",
                      "Count": 17254,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.주차감지센서(후방_).)",
                      "Count": 32220,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.후측방 경보 시스템.)",
                      "Count": 11981,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.후방 카메라.)",
                      "Count": 28786,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.360도 어라운드 뷰.)",
                      "Count": 5635,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.크루즈 컨트롤(일반_).)",
                      "Count": 13524,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.크루즈 컨트롤(어댑티브_).)",
                      "Count": 9073,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.헤드업 디스플레이(HUD_).)",
                      "Count": 5040,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.전자식 주차브레이크(EPB_).)",
                      "Count": 15180,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.자동 에어컨.)",
                      "Count": 26003,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.스마트키.)",
                      "Count": 26335,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.무선도어 잠금장치.)",
                      "Count": 32229,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.레인센서.)",
                      "Count": 12387,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.오토 라이트.)",
                      "Count": 29103,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.커튼/블라인드(뒷좌석_).)",
                      "Count": 7830,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.커튼/블라인드(후방_).)",
                      "Count": 4734,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.내비게이션.)",
                      "Count": 27742,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.앞좌석 AV 모니터.)",
                      "Count": 23560,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.뒷좌석 AV 모니터.)",
                      "Count": 567,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.블루투스.)",
                      "Count": 29773,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.CD 플레이어.)",
                      "Count": 15438,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.USB 단자.)",
                      "Count": 31355,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.AUX 단자.)",
                      "Count": 23268,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.가죽시트.)",
                      "Count": 32197,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.전동시트(운전석_).)",
                      "Count": 21115,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.전동시트(동승석_).)",
                      "Count": 14753,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.전동시트(뒷좌석_).)",
                      "Count": 1066,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.열선시트(앞좌석_).)",
                      "Count": 31163,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.열선시트(뒷좌석_).)",
                      "Count": 18307,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.메모리 시트(운전석_).)",
                      "Count": 10114,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.메모리 시트(동승석_).)",
                      "Count": 68,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.통풍시트(운전석_).)",
                      "Count": 18410,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.통풍시트(동승석_).)",
                      "Count": 16207,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.통풍시트(뒷좌석_).)",
                      "Count": 1717,
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
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Options.마사지 시트.)",
                      "Count": 574,
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
              "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "E",
                      "DisplayValue": "모바일프리미엄",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.AdType.E.)",
                      "Count": 2703,
                      "Expression": "AdType.E.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "D",
                      "DisplayValue": "파워팩",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.AdType.D.)",
                      "Count": 4915,
                      "Expression": "AdType.D.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "G",
                      "DisplayValue": "자동업데이트",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.AdType.G.)",
                      "Count": 4432,
                      "Expression": "AdType.G.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "F",
                      "DisplayValue": "모바일우대",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.AdType.F.)",
                      "Count": 21,
                      "Expression": "AdType.F.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "A",
                      "DisplayValue": "사진우대",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.AdType.A.)",
                      "Count": 5070,
                      "Expression": "AdType.A.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "C",
                      "DisplayValue": "핫마크",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.AdType.C.)",
                      "Count": 5105,
                      "Expression": "AdType.C.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "B",
                      "DisplayValue": "우대등록",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.AdType.B.)",
                      "Count": 5257,
                      "Expression": "AdType.B.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "H",
                      "DisplayValue": "오토체인지",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.AdType.H.)",
                      "Count": 913,
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
              "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "F",
                      "DisplayValue": "F",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Accident.F.)",
                      "Count": 8695,
                      "Expression": "Accident.F.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "N",
                      "DisplayValue": "N",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Accident.N.)",
                      "Count": 18516,
                      "Expression": "Accident.N.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "Y",
                      "DisplayValue": "Y",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Accident.Y.)",
                      "Count": 3944,
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
              "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "1",
                      "DisplayValue": "1",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Lease.1.)",
                      "Count": 73,
                      "Expression": "Lease.1.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "2",
                      "DisplayValue": "2",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Lease.2.)",
                      "Count": 16,
                      "Expression": "Lease.2.",
                      "Metadata": {}
                  }
              ],
              "Metadata": {},
              "Name": "Lease",
              "DisplayName": "리스구분",
              "Type": "Aspect"
          },
          {
              "IsSelected": false,
              "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.(<!>))",
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
              "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "경기 SAC",
                      "DisplayValue": "경기 SAC",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.DealerShipNm.경기 SAC.)",
                      "Count": 801,
                      "Expression": "DealerShipNm.경기 SAC.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "경기 SK V1모터스",
                      "DisplayValue": "경기 SK V1모터스",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.DealerShipNm.경기 SK V1모터스.)",
                      "Count": 1786,
                      "Expression": "DealerShipNm.경기 SK V1모터스.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "경기 경기매매단지",
                      "DisplayValue": "경기 경기매매단지",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.DealerShipNm.경기 경기매매단지.)",
                      "Count": 444,
                      "Expression": "DealerShipNm.경기 경기매매단지.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "경기 김포 국민차매매단지",
                      "DisplayValue": "경기 김포 국민차매매단지",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.DealerShipNm.경기 김포 국민차매매단지.)",
                      "Count": 438,
                      "Expression": "DealerShipNm.경기 김포 국민차매매단지.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "경기 도이치오토월드",
                      "DisplayValue": "경기 도이치오토월드",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.DealerShipNm.경기 도이치오토월드.)",
                      "Count": 2084,
                      "Expression": "DealerShipNm.경기 도이치오토월드.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "경기 라성단지",
                      "DisplayValue": "경기 라성단지",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.DealerShipNm.경기 라성단지.)",
                      "Count": 285,
                      "Expression": "DealerShipNm.경기 라성단지.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "경기 마트단지",
                      "DisplayValue": "경기 마트단지",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.DealerShipNm.경기 마트단지.)",
                      "Count": 437,
                      "Expression": "DealerShipNm.경기 마트단지.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "경기 오토돔",
                      "DisplayValue": "경기 오토돔",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.DealerShipNm.경기 오토돔.)",
                      "Count": 767,
                      "Expression": "DealerShipNm.경기 오토돔.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "경기 오토허브",
                      "DisplayValue": "경기 오토허브",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.DealerShipNm.경기 오토허브.)",
                      "Count": 924,
                      "Expression": "DealerShipNm.경기 오토허브.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "경기 일산풍동오토갤러리",
                      "DisplayValue": "경기 일산풍동오토갤러리",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.DealerShipNm.경기 일산풍동오토갤러리.)",
                      "Count": 40,
                      "Expression": "DealerShipNm.경기 일산풍동오토갤러리.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "경남 KC월드카프라자",
                      "DisplayValue": "경남 KC월드카프라자",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.DealerShipNm.경남 KC월드카프라자.)",
                      "Count": 233,
                      "Expression": "DealerShipNm.경남 KC월드카프라자.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "대구 오토월드",
                      "DisplayValue": "대구 오토월드",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.DealerShipNm.대구 오토월드.)",
                      "Count": 412,
                      "Expression": "DealerShipNm.대구 오토월드.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "부산 1001",
                      "DisplayValue": "부산 1001",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.DealerShipNm.부산 1001.)",
                      "Count": 118,
                      "Expression": "DealerShipNm.부산 1001.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "부산 KC오토월드",
                      "DisplayValue": "부산 KC오토월드",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.DealerShipNm.부산 KC오토월드.)",
                      "Count": 116,
                      "Expression": "DealerShipNm.부산 KC오토월드.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "부산 반여강변 매매단지",
                      "DisplayValue": "부산 반여강변 매매단지",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.DealerShipNm.부산 반여강변 매매단지.)",
                      "Count": 351,
                      "Expression": "DealerShipNm.부산 반여강변 매매단지.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "부산 부산감만단지",
                      "DisplayValue": "부산 부산감만단지",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.DealerShipNm.부산 부산감만단지.)",
                      "Count": 202,
                      "Expression": "DealerShipNm.부산 부산감만단지.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "부산 사직오토랜드",
                      "DisplayValue": "부산 사직오토랜드",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.DealerShipNm.부산 사직오토랜드.)",
                      "Count": 491,
                      "Expression": "DealerShipNm.부산 사직오토랜드.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "인천 엠파크타워",
                      "DisplayValue": "인천 엠파크타워",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.DealerShipNm.인천 엠파크타워.)",
                      "Count": 473,
                      "Expression": "DealerShipNm.인천 엠파크타워.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "인천 엠파크허브",
                      "DisplayValue": "인천 엠파크허브",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.DealerShipNm.인천 엠파크허브.)",
                      "Count": 716,
                      "Expression": "DealerShipNm.인천 엠파크허브.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "인천 오토드림",
                      "DisplayValue": "인천 오토드림",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.DealerShipNm.인천 오토드림.)",
                      "Count": 3,
                      "Expression": "DealerShipNm.인천 오토드림.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "인천 주안매매단지",
                      "DisplayValue": "인천 주안매매단지",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.DealerShipNm.인천 주안매매단지.)",
                      "Count": 57,
                      "Expression": "DealerShipNm.인천 주안매매단지.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "인천 청라 오토플러스",
                      "DisplayValue": "인천 청라 오토플러스",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.DealerShipNm.인천 청라 오토플러스.)",
                      "Count": 177,
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
              "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.(<!>))",
              "MultiSelectMode": "None",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "ORIGINAL",
                      "DisplayValue": "ORIGINAL",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.ServiceCopyCar.ORIGINAL.)",
                      "Count": 29089,
                      "Expression": "ServiceCopyCar.ORIGINAL.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "DUPLICATION",
                      "DisplayValue": "DUPLICATION",
                      "Action": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.ServiceCopyCar.DUPLICATION.)",
                      "Count": 4626,
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
              "QueryWithPlaceholder": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Year.range(<!lower>..<!upper>).)",
              "IsSelected": false,
              "Name": "Year",
              "DisplayName": "연식",
              "Type": "RangeAction"
          },
          {
              "LowerPlaceholder": "<!lower>",
              "UpperPlaceholder": "<!upper>",
              "QueryWithPlaceholder": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Price.range(<!lower>..<!upper>).)",
              "IsSelected": false,
              "Name": "Price",
              "DisplayName": "가격",
              "Type": "RangeAction"
          },
          {
              "LowerPlaceholder": "<!lower>",
              "UpperPlaceholder": "<!upper>",
              "QueryWithPlaceholder": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Mileage.range(<!lower>..<!upper>).)",
              "IsSelected": false,
              "Name": "Mileage",
              "DisplayName": "주행거리",
              "Type": "RangeAction"
          },
          {
              "LowerPlaceholder": "<!lower>",
              "UpperPlaceholder": "<!upper>",
              "QueryWithPlaceholder": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.AcceptanceCharge.range(<!lower>..<!upper>).)",
              "IsSelected": false,
              "Name": "AcceptanceCharge",
              "DisplayName": "인수비용",
              "Type": "RangeAction"
          },
          {
              "LowerPlaceholder": "<!lower>",
              "UpperPlaceholder": "<!upper>",
              "QueryWithPlaceholder": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.MonthLeasePrice.range(<!lower>..<!upper>).)",
              "IsSelected": false,
              "Name": "MonthLeasePrice",
              "DisplayName": "월리스료",
              "Type": "RangeAction"
          },
          {
              "LowerPlaceholder": "<!lower>",
              "UpperPlaceholder": "<!upper>",
              "QueryWithPlaceholder": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.MonthLeaseRest.range(<!lower>..<!upper>).)",
              "IsSelected": false,
              "Name": "MonthLeaseRest",
              "DisplayName": "잔여개월",
              "Type": "RangeAction"
          },
          {
              "LowerPlaceholder": "<!lower>",
              "UpperPlaceholder": "<!upper>",
              "QueryWithPlaceholder": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.CreatedDate.range(<!lower>..<!upper>).)",
              "IsSelected": false,
              "Name": "CreatedDate",
              "DisplayName": "등록일자",
              "Type": "RangeAction"
          },
          {
              "Placeholder": "<!>",
              "QueryWithPlaceholder": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Simple.keyword(<!>).)",
              "IsSelected": false,
              "Name": "Simple",
              "DisplayName": "Simple",
              "Type": "KeywordAction"
          },
          {
              "LatitudePlaceholder": "<!lat>",
              "LongitudePlaceholder": "<!lon>",
              "DistanceInKmsPlaceholder": "<!distInKms>",
              "QueryWithPlaceholder": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Location.location(<!lat>,<!lon>x<!distInKms>km).)",
              "IsSelected": false,
              "Name": "Location",
              "DisplayName": "Location",
              "Type": "LocationAction"
          },
          {
              "Placeholder": "<!>",
              "QueryWithPlaceholder": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.MetaData.custom(<!>).)",
              "IsSelected": false,
              "Name": "MetaData",
              "DisplayName": "MetaData",
              "Type": "CustomIndexAction"
          },
          {
              "Placeholder": "<!>",
              "QueryWithPlaceholder": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.Plate.<!>.)",
              "IsSelected": false,
              "Name": "Plate",
              "DisplayName": "Plate",
              "Type": "RefinementAction"
          },
          {
              "Placeholder": "<!>",
              "QueryWithPlaceholder": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.PlateRegistrationNumber.<!>.)",
              "IsSelected": false,
              "Name": "PlateRegistrationNumber",
              "DisplayName": "PlateRegistrationNumber",
              "Type": "RefinementAction"
          },
          {
              "Placeholder": "<!>",
              "QueryWithPlaceholder": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.DealerName.<!>.)",
              "IsSelected": false,
              "Name": "DealerName",
              "DisplayName": "DealerName",
              "Type": "RefinementAction"
          },
          {
              "Placeholder": "<!>",
              "QueryWithPlaceholder": "(And.Hidden.N._.(C.CarType.Y._.Manufacturer.현대.)_.UserId.<!>.)",
              "IsSelected": false,
              "Name": "UserId",
              "DisplayName": "UserId",
              "Type": "RefinementAction"
          }
      ],
      "BreadCrumbs": [
          {
              "Aspect": "Hidden",
              "AspectDisplay": "숨김데이터",
              "Facet": "N",
              "FacetDisplay": "N",
              "Children": [],
              "Type": "FacetBreadCrumb",
              "RemoveAction": "(C.CarType.Y._.Manufacturer.현대.)"
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
                      "Facet": "현대",
                      "FacetDisplay": "현대",
                      "Children": [],
                      "Type": "FacetBreadCrumb",
                      "RemoveAction": "(And.Hidden.N._.CarType.Y.)"
                  }
              ],
              "Type": "FacetBreadCrumb",
              "RemoveAction": "Hidden.N."
          }
      ]
  }
}