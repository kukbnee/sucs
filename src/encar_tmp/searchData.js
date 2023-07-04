i:1 > 제조사
i:2 > 차크기
result.data.iNav.Nodes[i].Facets[0].Refinements.Nodes[0].Facets
{
  "Count": 133983,
  "iNav": {
      "Nodes": [
          {
              "IsSelected": true,
              "PlaceholderExpression": "(And.(Or.CarType.Y._.CarType.N.)_.(<!>))",
              "MultiSelectMode": "None",
              "RemoveAction": "(Or.CarType.Y._.CarType.N.)",
              "Facets": [
                  {
                      "IsSelected": true,
                      "Value": "N",
                      "DisplayValue": "N",
                      "Action": "(Or.CarType.Y._.CarType.N.)",
                      "Count": 133983,
                      "Expression": "Hidden.N.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "Y",
                      "DisplayValue": "Y",
                      "Action": "(And.(Or.CarType.Y._.CarType.N.)_.Hidden.Y.)",
                      "Count": 13239,
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
                      "Action": "(And.Hidden.N._.CarType.N.)",
                      "Count": 92149,
                      "Refinements": {
                          "Nodes": [
                              {
                                  "IsSelected": false,
                                  "PlaceholderExpression": "(And.Hidden.N._.(Or.CarType.N._.(C.CarType.Y._.(<!>))))",
                                  "MultiSelectMode": "None",
                                  "RemoveAction": "",
                                  "Facets": [
                                      {
                                          "IsSelected": false,
                                          "Value": "현대",
                                          "DisplayValue": "현대",
                                          "Action": "(And.Hidden.N._.(Or.CarType.N._.(C.CarType.Y._.Manufacturer.현대.)))",
                                          "Count": 33485,
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
                                          "Action": "(And.Hidden.N._.(Or.CarType.N._.(C.CarType.Y._.Manufacturer.제네시스.)))",
                                          "Count": 6656,
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
                                          "Action": "(And.Hidden.N._.(Or.CarType.N._.(C.CarType.Y._.Manufacturer.기아.)))",
                                          "Count": 30896,
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
                                          "Action": "(And.Hidden.N._.(Or.CarType.N._.(C.CarType.Y._.Manufacturer.쉐보레(GM대우_).)))",
                                          "Count": 8577,
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
                                          "Action": "(And.Hidden.N._.(Or.CarType.N._.(C.CarType.Y._.Manufacturer.르노코리아(삼성_).)))",
                                          "Count": 6643,
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
                                          "Action": "(And.Hidden.N._.(Or.CarType.N._.(C.CarType.Y._.Manufacturer.KG모빌리티(쌍용_).)))",
                                          "Count": 5834,
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
                                          "Action": "(And.Hidden.N._.(Or.CarType.N._.(C.CarType.Y._.Manufacturer.기타 제조사.)))",
                                          "Count": 58,
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
                          "BreadCrumbs": []
                      },
                      "Expression": "CarType.Y.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": true,
                      "Value": "N",
                      "DisplayValue": "N",
                      "Action": "(And.Hidden.N._.CarType.Y.)",
                      "Count": 41834,
                      "Refinements": {
                          "Nodes": [
                              {
                                  "IsSelected": false,
                                  "PlaceholderExpression": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.(<!>))))",
                                  "MultiSelectMode": "None",
                                  "RemoveAction": "",
                                  "Facets": [
                                      {
                                          "IsSelected": false,
                                          "Value": "BMW",
                                          "DisplayValue": "BMW",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.BMW.)))",
                                          "Count": 8901,
                                          "Expression": "Manufacturer.BMW.",
                                          "Metadata": {
                                              "Ordering": [
                                                  110.0
                                              ],
                                              "EngName": [
                                                  "BMW"
                                              ],
                                              "Expression": [
                                                  "GreenType"
                                              ],
                                              "Code": [
                                                  "012"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": 86.0,
                                                      "Max": 17231.0
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "SUV",
                                                      "기타",
                                                      "대형차",
                                                      "소형차",
                                                      "스포츠카",
                                                      "준중형차",
                                                      "중형차"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "GMC",
                                          "DisplayValue": "GMC",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.GMC.)))",
                                          "Count": 27,
                                          "Expression": "Manufacturer.GMC.",
                                          "Metadata": {
                                              "Ordering": [
                                                  130.0
                                              ],
                                              "EngName": [
                                                  "GMC"
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
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "RV",
                                                      "SUV",
                                                      "기타",
                                                      "승합차",
                                                      "화물차"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "닛산",
                                          "DisplayValue": "닛산",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.닛산.)))",
                                          "Count": 373,
                                          "Expression": "Manufacturer.닛산.",
                                          "Metadata": {
                                              "Ordering": [
                                                  140.0
                                              ],
                                              "EngName": [
                                                  "Nissan"
                                              ],
                                              "Expression": [
                                                  "GreenType"
                                              ],
                                              "Code": [
                                                  "033"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": 182.0,
                                                      "Max": 8579.0
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "RV",
                                                      "SUV",
                                                      "경차",
                                                      "기타",
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
                                          "Value": "다이하쯔",
                                          "DisplayValue": "다이하쯔",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.다이하쯔.)))",
                                          "Count": 22,
                                          "Expression": "Manufacturer.다이하쯔.",
                                          "Metadata": {
                                              "Ordering": [
                                                  150.0
                                              ],
                                              "EngName": [
                                                  "Daihatsu"
                                              ],
                                              "Code": [
                                                  "051"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": null,
                                                      "Max": null
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "SUV",
                                                      "경차",
                                                      "소형차"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "닷지",
                                          "DisplayValue": "닷지",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.닷지.)))",
                                          "Count": 107,
                                          "Expression": "Manufacturer.닷지.",
                                          "Metadata": {
                                              "Ordering": [
                                                  160.0
                                              ],
                                              "EngName": [
                                                  "Dodge"
                                              ],
                                              "Code": [
                                                  "034"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": 221.0,
                                                      "Max": 726.0
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "RV",
                                                      "SUV",
                                                      "대형차",
                                                      "스포츠카",
                                                      "승합차",
                                                      "중형차",
                                                      "화물차"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "도요타",
                                          "DisplayValue": "도요타",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.도요타.)))",
                                          "Count": 597,
                                          "Expression": "Manufacturer.도요타.",
                                          "Metadata": {
                                              "Ordering": [
                                                  170.0
                                              ],
                                              "EngName": [
                                                  "Toyota"
                                              ],
                                              "Expression": [
                                                  "GreenType"
                                              ],
                                              "Code": [
                                                  "031"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": 250.0,
                                                      "Max": 6284.0
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "RV",
                                                      "SUV",
                                                      "기타",
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
                                          "Value": "동풍소콘",
                                          "DisplayValue": "동풍소콘",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.동풍소콘.)))",
                                          "Count": 20,
                                          "Expression": "Manufacturer.동풍소콘.",
                                          "Metadata": {
                                              "Ordering": [
                                                  175.0
                                              ],
                                              "EngName": [
                                                  "DFSK"
                                              ],
                                              "Code": [
                                                  "088"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": 1112.0,
                                                      "Max": 1778.0
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "RV",
                                                      "SUV",
                                                      "승합차",
                                                      "화물차"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "람보르기니",
                                          "DisplayValue": "람보르기니",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.람보르기니.)))",
                                          "Count": 184,
                                          "Expression": "Manufacturer.람보르기니.",
                                          "Metadata": {
                                              "Ordering": [
                                                  180.0
                                              ],
                                              "EngName": [
                                                  "Lamborghini"
                                              ],
                                              "Code": [
                                                  "049"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": 4620.0,
                                                      "Max": 65197.0
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "SUV",
                                                      "스포츠카"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "랜드로버",
                                          "DisplayValue": "랜드로버",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.랜드로버.)))",
                                          "Count": 1805,
                                          "Expression": "Manufacturer.랜드로버.",
                                          "Metadata": {
                                              "Ordering": [
                                                  190.0
                                              ],
                                              "EngName": [
                                                  "Land Rover"
                                              ],
                                              "Expression": [
                                                  "GreenType"
                                              ],
                                              "Code": [
                                                  "020"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": 272.0,
                                                      "Max": 19429.0
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "SUV",
                                                      "기타"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "렉서스",
                                          "DisplayValue": "렉서스",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.렉서스.)))",
                                          "Count": 974,
                                          "Expression": "Manufacturer.렉서스.",
                                          "Metadata": {
                                              "Ordering": [
                                                  200.0
                                              ],
                                              "EngName": [
                                                  "Lexus"
                                              ],
                                              "Expression": [
                                                  "GreenType"
                                              ],
                                              "Code": [
                                                  "035"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": 84.0,
                                                      "Max": 13743.0
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "SUV",
                                                      "기타",
                                                      "대형차",
                                                      "스포츠카",
                                                      "준중형차",
                                                      "중형차"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "MG로버",
                                          "DisplayValue": "MG로버",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.MG로버.)))",
                                          "Count": 0,
                                          "Expression": "Manufacturer.MG로버.",
                                          "Metadata": {
                                              "Ordering": [
                                                  210.0
                                              ],
                                              "EngName": [
                                                  "MG Rover"
                                              ],
                                              "Code": [
                                                  "055"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": null,
                                                      "Max": null
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "대형차",
                                                      "소형차",
                                                      "스포츠카"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "로터스",
                                          "DisplayValue": "로터스",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.로터스.)))",
                                          "Count": 7,
                                          "Expression": "Manufacturer.로터스.",
                                          "Metadata": {
                                              "Ordering": [
                                                  220.0
                                              ],
                                              "EngName": [
                                                  "Lotus"
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
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "기타",
                                                      "스포츠카"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "롤스로이스",
                                          "DisplayValue": "롤스로이스",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.롤스로이스.)))",
                                          "Count": 136,
                                          "Expression": "Manufacturer.롤스로이스.",
                                          "Metadata": {
                                              "Ordering": [
                                                  230.0
                                              ],
                                              "EngName": [
                                                  "Rolls-Royce"
                                              ],
                                              "Code": [
                                                  "047"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": 8390.0,
                                                      "Max": 42237.0
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "SUV",
                                                      "대형차",
                                                      "스포츠카"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "르노",
                                          "DisplayValue": "르노",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.르노.)))",
                                          "Count": 1,
                                          "Expression": "Manufacturer.르노.",
                                          "Metadata": {
                                              "Ordering": [
                                                  240.0
                                              ],
                                              "EngName": [
                                                  "Renault"
                                              ],
                                              "Code": [
                                                  "078"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": null,
                                                      "Max": null
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "기타",
                                                      "소형차",
                                                      "준중형차",
                                                      "중형차"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "링컨",
                                          "DisplayValue": "링컨",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.링컨.)))",
                                          "Count": 389,
                                          "Expression": "Manufacturer.링컨.",
                                          "Metadata": {
                                              "Ordering": [
                                                  250.0
                                              ],
                                              "EngName": [
                                                  "Lincoln"
                                              ],
                                              "Expression": [
                                                  "GreenType"
                                              ],
                                              "Code": [
                                                  "044"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": 117.0,
                                                      "Max": 11098.0
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "SUV",
                                                      "기타",
                                                      "대형차"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "마세라티",
                                          "DisplayValue": "마세라티",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.마세라티.)))",
                                          "Count": 639,
                                          "Expression": "Manufacturer.마세라티.",
                                          "Metadata": {
                                              "Ordering": [
                                                  260.0
                                              ],
                                              "EngName": [
                                                  "Maserati"
                                              ],
                                              "Code": [
                                                  "053"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": 109.0,
                                                      "Max": 20242.0
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "SUV",
                                                      "대형차",
                                                      "스포츠카",
                                                      "중형차"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "마이바흐",
                                          "DisplayValue": "마이바흐",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.마이바흐.)))",
                                          "Count": 8,
                                          "Expression": "Manufacturer.마이바흐.",
                                          "Metadata": {
                                              "Ordering": [
                                                  270.0
                                              ],
                                              "EngName": [
                                                  "Maybach"
                                              ],
                                              "Code": [
                                                  "080"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": null,
                                                      "Max": null
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
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
                                          "Value": "마쯔다",
                                          "DisplayValue": "마쯔다",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.마쯔다.)))",
                                          "Count": 15,
                                          "Expression": "Manufacturer.마쯔다.",
                                          "Metadata": {
                                              "Ordering": [
                                                  280.0
                                              ],
                                              "EngName": [
                                                  "Mazda"
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
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "RV",
                                                      "SUV",
                                                      "경차",
                                                      "기타",
                                                      "소형차",
                                                      "스포츠카",
                                                      "승합차",
                                                      "중형차"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "맥라렌",
                                          "DisplayValue": "맥라렌",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.맥라렌.)))",
                                          "Count": 74,
                                          "Expression": "Manufacturer.맥라렌.",
                                          "Metadata": {
                                              "Ordering": [
                                                  300.0
                                              ],
                                              "EngName": [
                                                  "Mclaren"
                                              ],
                                              "Expression": [
                                                  "GreenType"
                                              ],
                                              "Code": [
                                                  "084"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": 8889.0,
                                                      "Max": 32613.0
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
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
                                          "Value": "머큐리",
                                          "DisplayValue": "머큐리",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.머큐리.)))",
                                          "Count": 0,
                                          "Expression": "Manufacturer.머큐리.",
                                          "Metadata": {
                                              "Ordering": [
                                                  310.0
                                              ],
                                              "EngName": [
                                                  "Mercury"
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
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "SUV",
                                                      "대형차",
                                                      "스포츠카",
                                                      "중형차"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "미니",
                                          "DisplayValue": "미니",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.미니.)))",
                                          "Count": 2245,
                                          "Expression": "Manufacturer.미니.",
                                          "Metadata": {
                                              "Ordering": [
                                                  320.0
                                              ],
                                              "EngName": [
                                                  "Mini"
                                              ],
                                              "Expression": [
                                                  "GreenType"
                                              ],
                                              "Code": [
                                                  "054"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": 132.0,
                                                      "Max": 4773.0
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "SUV",
                                                      "소형차",
                                                      "스포츠카"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "미쯔비시",
                                          "DisplayValue": "미쯔비시",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.미쯔비시.)))",
                                          "Count": 26,
                                          "Expression": "Manufacturer.미쯔비시.",
                                          "Metadata": {
                                              "Ordering": [
                                                  330.0
                                              ],
                                              "EngName": [
                                                  "Mitsubishi"
                                              ],
                                              "Code": [
                                                  "030"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": 351.0,
                                                      "Max": 1789.0
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "SUV",
                                                      "경차",
                                                      "기타",
                                                      "스포츠카",
                                                      "중형차"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "미쯔오까",
                                          "DisplayValue": "미쯔오까",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.미쯔오까.)))",
                                          "Count": 2,
                                          "Expression": "Manufacturer.미쯔오까.",
                                          "Metadata": {
                                              "Ordering": [
                                                  340.0
                                              ],
                                              "EngName": [
                                                  "Mitsuoka"
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
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "경차",
                                                      "대형차",
                                                      "소형차",
                                                      "스포츠카",
                                                      "중형차"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "벤츠",
                                          "DisplayValue": "벤츠",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.벤츠.)))",
                                          "Count": 10904,
                                          "Expression": "Manufacturer.벤츠.",
                                          "Metadata": {
                                              "Ordering": [
                                                  350.0
                                              ],
                                              "EngName": [
                                                  "Mercedes-Benz"
                                              ],
                                              "Expression": [
                                                  "GreenType"
                                              ],
                                              "Code": [
                                                  "013"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": 86.0,
                                                      "Max": 61894.0
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "RV",
                                                      "SUV",
                                                      "경차",
                                                      "기타",
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
                                          "Value": "벤틀리",
                                          "DisplayValue": "벤틀리",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.벤틀리.)))",
                                          "Count": 320,
                                          "Expression": "Manufacturer.벤틀리.",
                                          "Metadata": {
                                              "Ordering": [
                                                  360.0
                                              ],
                                              "EngName": [
                                                  "Bentley"
                                              ],
                                              "Code": [
                                                  "050"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": 1761.0,
                                                      "Max": 30717.0
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "SUV",
                                                      "대형차",
                                                      "스포츠카"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "볼보",
                                          "DisplayValue": "볼보",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.볼보.)))",
                                          "Count": 786,
                                          "Expression": "Manufacturer.볼보.",
                                          "Metadata": {
                                              "Ordering": [
                                                  370.0
                                              ],
                                              "EngName": [
                                                  "Volvo"
                                              ],
                                              "Expression": [
                                                  "GreenType"
                                              ],
                                              "Code": [
                                                  "017"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": 90.0,
                                                      "Max": 10086.0
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "RV",
                                                      "SUV",
                                                      "기타",
                                                      "대형차",
                                                      "스포츠카",
                                                      "준중형차",
                                                      "중형차"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "부가티",
                                          "DisplayValue": "부가티",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.부가티.)))",
                                          "Count": 0,
                                          "Expression": "Manufacturer.부가티.",
                                          "Metadata": {
                                              "Ordering": [
                                                  380.0
                                              ],
                                              "EngName": [
                                                  "Bugatti"
                                              ],
                                              "Code": [
                                                  "077"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": null,
                                                      "Max": null
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
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
                                          "Value": "북기은상",
                                          "DisplayValue": "북기은상",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.북기은상.)))",
                                          "Count": 14,
                                          "Expression": "Manufacturer.북기은상.",
                                          "Metadata": {
                                              "Ordering": [
                                                  385.0
                                              ],
                                              "EngName": [
                                                  "Baic Yinxiang"
                                              ],
                                              "Code": [
                                                  "086"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": 447.0,
                                                      "Max": 483.0
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "SUV",
                                                      "승합차",
                                                      "화물차"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "뷰익",
                                          "DisplayValue": "뷰익",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.뷰익.)))",
                                          "Count": 0,
                                          "Expression": "Manufacturer.뷰익.",
                                          "Metadata": {
                                              "Ordering": [
                                                  390.0
                                              ],
                                              "EngName": [
                                                  "Buick"
                                              ],
                                              "Code": [
                                                  "045"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": null,
                                                      "Max": null
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "RV",
                                                      "대형차"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "사브",
                                          "DisplayValue": "사브",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.사브.)))",
                                          "Count": 22,
                                          "Expression": "Manufacturer.사브.",
                                          "Metadata": {
                                              "Ordering": [
                                                  400.0
                                              ],
                                              "EngName": [
                                                  "Saab"
                                              ],
                                              "Code": [
                                                  "016"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": 289.0,
                                                      "Max": 821.0
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "기타",
                                                      "중형차"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "사이언",
                                          "DisplayValue": "사이언",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.사이언.)))",
                                          "Count": 0,
                                          "Expression": "Manufacturer.사이언.",
                                          "Metadata": {
                                              "Ordering": [
                                                  410.0
                                              ],
                                              "EngName": [
                                                  "Scion"
                                              ],
                                              "Code": [
                                                  "082"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": null,
                                                      "Max": null
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "RV",
                                                      "스포츠카",
                                                      "준중형차"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "새턴",
                                          "DisplayValue": "새턴",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.새턴.)))",
                                          "Count": 1,
                                          "Expression": "Manufacturer.새턴.",
                                          "Metadata": {
                                              "Ordering": [
                                                  420.0
                                              ],
                                              "EngName": [
                                                  "Saturn"
                                              ],
                                              "Code": [
                                                  "079"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": null,
                                                      "Max": null
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "SUV",
                                                      "스포츠카",
                                                      "중형차"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "쉐보레",
                                          "DisplayValue": "쉐보레",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.쉐보레.)))",
                                          "Count": 159,
                                          "Expression": "Manufacturer.쉐보레.",
                                          "Metadata": {
                                              "Ordering": [
                                                  430.0
                                              ],
                                              "EngName": [
                                                  "Chevrolet"
                                              ],
                                              "Expression": [
                                                  "GreenType"
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
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "RV",
                                                      "SUV",
                                                      "기타",
                                                      "대형차",
                                                      "스포츠카",
                                                      "승합차",
                                                      "준중형차",
                                                      "화물차"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "스마트",
                                          "DisplayValue": "스마트",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.스마트.)))",
                                          "Count": 50,
                                          "Expression": "Manufacturer.스마트.",
                                          "Metadata": {
                                              "Ordering": [
                                                  440.0
                                              ],
                                              "EngName": [
                                                  "Smart"
                                              ],
                                              "Expression": [
                                                  "GreenType"
                                              ],
                                              "Code": [
                                                  "081"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": 516.0,
                                                      "Max": 1975.0
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
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
                                          "Value": "스바루",
                                          "DisplayValue": "스바루",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.스바루.)))",
                                          "Count": 16,
                                          "Expression": "Manufacturer.스바루.",
                                          "Metadata": {
                                              "Ordering": [
                                                  450.0
                                              ],
                                              "EngName": [
                                                  "Subaru"
                                              ],
                                              "Code": [
                                                  "052"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": 424.0,
                                                      "Max": 837.0
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "SUV",
                                                      "경차",
                                                      "스포츠카",
                                                      "준중형차",
                                                      "중형차"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "스즈키",
                                          "DisplayValue": "스즈키",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.스즈키.)))",
                                          "Count": 31,
                                          "Expression": "Manufacturer.스즈키.",
                                          "Metadata": {
                                              "Ordering": [
                                                  460.0
                                              ],
                                              "EngName": [
                                                  "Suzuki"
                                              ],
                                              "Code": [
                                                  "037"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": null,
                                                      "Max": null
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "SUV",
                                                      "경차",
                                                      "기타",
                                                      "소형차"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "시트로엥/DS",
                                          "DisplayValue": "시트로엥/DS",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.시트로엥/DS.)))",
                                          "Count": 190,
                                          "Expression": "Manufacturer.시트로엥/DS.",
                                          "Metadata": {
                                              "Ordering": [
                                                  490.0
                                              ],
                                              "EngName": [
                                                  "Citroen-DS"
                                              ],
                                              "Expression": [
                                                  "GreenType"
                                              ],
                                              "Code": [
                                                  "022"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": 297.0,
                                                      "Max": 3762.0
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "RV",
                                                      "SUV",
                                                      "기타",
                                                      "소형차",
                                                      "준중형차",
                                                      "중형차"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "아우디",
                                          "DisplayValue": "아우디",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.아우디.)))",
                                          "Count": 3592,
                                          "Expression": "Manufacturer.아우디.",
                                          "Metadata": {
                                              "Ordering": [
                                                  500.0
                                              ],
                                              "EngName": [
                                                  "Audi"
                                              ],
                                              "Expression": [
                                                  "GreenType"
                                              ],
                                              "Code": [
                                                  "011"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": 86.0,
                                                      "Max": 20788.0
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "RV",
                                                      "SUV",
                                                      "기타",
                                                      "대형차",
                                                      "소형차",
                                                      "스포츠카",
                                                      "준중형차",
                                                      "중형차"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "알파 로메오",
                                          "DisplayValue": "알파 로메오",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.알파 로메오.)))",
                                          "Count": 1,
                                          "Expression": "Manufacturer.알파 로메오.",
                                          "Metadata": {
                                              "Ordering": [
                                                  510.0
                                              ],
                                              "EngName": [
                                                  "Alfa Romeo"
                                              ],
                                              "Code": [
                                                  "040"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": null,
                                                      "Max": null
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "소형차",
                                                      "스포츠카",
                                                      "준중형차"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "애스턴마틴",
                                          "DisplayValue": "애스턴마틴",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.애스턴마틴.)))",
                                          "Count": 57,
                                          "Expression": "Manufacturer.애스턴마틴.",
                                          "Metadata": {
                                              "Ordering": [
                                                  520.0
                                              ],
                                              "EngName": [
                                                  "Astonmartin"
                                              ],
                                              "Code": [
                                                  "070"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": 3095.0,
                                                      "Max": 23312.0
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "SUV",
                                                      "대형차",
                                                      "스포츠카"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "어큐라",
                                          "DisplayValue": "어큐라",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.어큐라.)))",
                                          "Count": 3,
                                          "Expression": "Manufacturer.어큐라.",
                                          "Metadata": {
                                              "Ordering": [
                                                  530.0
                                              ],
                                              "EngName": [
                                                  "Acura"
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
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "SUV",
                                                      "기타",
                                                      "대형차",
                                                      "스포츠카",
                                                      "준중형차",
                                                      "중형차"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "오펠",
                                          "DisplayValue": "오펠",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.오펠.)))",
                                          "Count": 0,
                                          "Expression": "Manufacturer.오펠.",
                                          "Metadata": {
                                              "Ordering": [
                                                  540.0
                                              ],
                                              "EngName": [
                                                  "Opel"
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
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "소형차",
                                                      "스포츠카",
                                                      "준중형차",
                                                      "중형차"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "올즈모빌",
                                          "DisplayValue": "올즈모빌",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.올즈모빌.)))",
                                          "Count": 0,
                                          "Expression": "Manufacturer.올즈모빌.",
                                          "Metadata": {
                                              "Ordering": [
                                                  550.0
                                              ],
                                              "EngName": [
                                                  "Oldsmoblie"
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
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "SUV",
                                                      "대형차",
                                                      "승합차"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "이스즈",
                                          "DisplayValue": "이스즈",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.이스즈.)))",
                                          "Count": 0,
                                          "Expression": "Manufacturer.이스즈.",
                                          "Metadata": {
                                              "Ordering": [
                                                  570.0
                                              ],
                                              "EngName": [
                                                  "Isuzu"
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
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "SUV",
                                                      "기타"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "인피니티",
                                          "DisplayValue": "인피니티",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.인피니티.)))",
                                          "Count": 401,
                                          "Expression": "Manufacturer.인피니티.",
                                          "Metadata": {
                                              "Ordering": [
                                                  580.0
                                              ],
                                              "EngName": [
                                                  "Infiniti"
                                              ],
                                              "Expression": [
                                                  "GreenType"
                                              ],
                                              "Code": [
                                                  "058"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": 314.0,
                                                      "Max": 3912.0
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "SUV",
                                                      "대형차",
                                                      "스포츠카",
                                                      "준중형차",
                                                      "중형차"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "재규어",
                                          "DisplayValue": "재규어",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.재규어.)))",
                                          "Count": 795,
                                          "Expression": "Manufacturer.재규어.",
                                          "Metadata": {
                                              "Ordering": [
                                                  590.0
                                              ],
                                              "EngName": [
                                                  "Jaguar"
                                              ],
                                              "Expression": [
                                                  "GreenType"
                                              ],
                                              "Code": [
                                                  "019"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": 84.0,
                                                      "Max": 11892.0
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "SUV",
                                                      "기타",
                                                      "대형차",
                                                      "스포츠카",
                                                      "준중형차",
                                                      "중형차"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "지프",
                                          "DisplayValue": "지프",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.지프.)))",
                                          "Count": 1052,
                                          "Expression": "Manufacturer.지프.",
                                          "Metadata": {
                                              "Ordering": [
                                                  600.0
                                              ],
                                              "EngName": [
                                                  "Jeep"
                                              ],
                                              "Expression": [
                                                  "GreenType"
                                              ],
                                              "Code": [
                                                  "083"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": 115.0,
                                                      "Max": 7983.0
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "SUV",
                                                      "화물차"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "캐딜락",
                                          "DisplayValue": "캐딜락",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.캐딜락.)))",
                                          "Count": 376,
                                          "Expression": "Manufacturer.캐딜락.",
                                          "Metadata": {
                                              "Ordering": [
                                                  610.0
                                              ],
                                              "EngName": [
                                                  "Cadillac"
                                              ],
                                              "Code": [
                                                  "043"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": 86.0,
                                                      "Max": 14590.0
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "SUV",
                                                      "대형차",
                                                      "스포츠카",
                                                      "준중형차",
                                                      "중형차"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "코닉세그",
                                          "DisplayValue": "코닉세그",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.코닉세그.)))",
                                          "Count": 0,
                                          "Expression": "Manufacturer.코닉세그.",
                                          "Metadata": {
                                              "Ordering": [
                                                  620.0
                                              ],
                                              "EngName": [
                                                  "Koenigsegg"
                                              ],
                                              "Code": [
                                                  "076"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": null,
                                                      "Max": null
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
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
                                          "Value": "크라이슬러",
                                          "DisplayValue": "크라이슬러",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.크라이슬러.)))",
                                          "Count": 153,
                                          "Expression": "Manufacturer.크라이슬러.",
                                          "Metadata": {
                                              "Ordering": [
                                                  630.0
                                              ],
                                              "EngName": [
                                                  "Chrysler"
                                              ],
                                              "Code": [
                                                  "023"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": 155.0,
                                                      "Max": 1885.0
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "RV",
                                                      "SUV",
                                                      "기타",
                                                      "대형차",
                                                      "스포츠카",
                                                      "준중형차",
                                                      "중형차"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "테슬라",
                                          "DisplayValue": "테슬라",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.테슬라.)))",
                                          "Count": 425,
                                          "Expression": "Manufacturer.테슬라.",
                                          "Metadata": {
                                              "Ordering": [
                                                  635.0
                                              ],
                                              "EngName": [
                                                  "Tesla"
                                              ],
                                              "Expression": [
                                                  "GreenType"
                                              ],
                                              "Code": [
                                                  "087"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": 3519.0,
                                                      "Max": 13980.0
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "SUV",
                                                      "준중형차",
                                                      "중형차"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "파가니",
                                          "DisplayValue": "파가니",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.파가니.)))",
                                          "Count": 0,
                                          "Expression": "Manufacturer.파가니.",
                                          "Metadata": {
                                              "Ordering": [
                                                  640.0
                                              ],
                                              "EngName": [
                                                  "Pagani"
                                              ],
                                              "Code": [
                                                  "075"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": null,
                                                      "Max": null
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
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
                                          "Value": "페라리",
                                          "DisplayValue": "페라리",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.페라리.)))",
                                          "Count": 265,
                                          "Expression": "Manufacturer.페라리.",
                                          "Metadata": {
                                              "Ordering": [
                                                  650.0
                                              ],
                                              "EngName": [
                                                  "Ferrari"
                                              ],
                                              "Expression": [
                                                  "GreenType"
                                              ],
                                              "Code": [
                                                  "041"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": 3472.0,
                                                      "Max": 30298.0
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
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
                                          "Value": "포드",
                                          "DisplayValue": "포드",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.포드.)))",
                                          "Count": 891,
                                          "Expression": "Manufacturer.포드.",
                                          "Metadata": {
                                              "Ordering": [
                                                  660.0
                                              ],
                                              "EngName": [
                                                  "Ford"
                                              ],
                                              "Expression": [
                                                  "GreenType"
                                              ],
                                              "Code": [
                                                  "024"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": 98.0,
                                                      "Max": 8400.0
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "RV",
                                                      "SUV",
                                                      "기타",
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
                                          "Value": "포르쉐",
                                          "DisplayValue": "포르쉐",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.포르쉐.)))",
                                          "Count": 2168,
                                          "Expression": "Manufacturer.포르쉐.",
                                          "Metadata": {
                                              "Ordering": [
                                                  670.0
                                              ],
                                              "EngName": [
                                                  "Porsche"
                                              ],
                                              "Expression": [
                                                  "GreenType"
                                              ],
                                              "Code": [
                                                  "015"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": 133.0,
                                                      "Max": 32509.0
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "SUV",
                                                      "기타",
                                                      "대형차",
                                                      "스포츠카"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "포톤",
                                          "DisplayValue": "포톤",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.포톤.)))",
                                          "Count": 2,
                                          "Expression": "Manufacturer.포톤.",
                                          "Metadata": {
                                              "Ordering": [
                                                  675.0
                                              ],
                                              "EngName": [
                                                  "FOTON"
                                              ],
                                              "Code": [
                                                  "085"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": null,
                                                      "Max": null
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "화물차"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "폭스바겐",
                                          "DisplayValue": "폭스바겐",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.폭스바겐.)))",
                                          "Count": 1414,
                                          "Expression": "Manufacturer.폭스바겐.",
                                          "Metadata": {
                                              "Ordering": [
                                                  680.0
                                              ],
                                              "EngName": [
                                                  "Volkswagen"
                                              ],
                                              "Expression": [
                                                  "GreenType"
                                              ],
                                              "Code": [
                                                  "014"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": 80.0,
                                                      "Max": 9212.0
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "RV",
                                                      "SUV",
                                                      "기타",
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
                                          "Value": "폰티악",
                                          "DisplayValue": "폰티악",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.폰티악.)))",
                                          "Count": 1,
                                          "Expression": "Manufacturer.폰티악.",
                                          "Metadata": {
                                              "Ordering": [
                                                  690.0
                                              ],
                                              "EngName": [
                                                  "Pontiac"
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
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "SUV",
                                                      "대형차",
                                                      "스포츠카",
                                                      "승합차",
                                                      "중형차"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "폴스타",
                                          "DisplayValue": "폴스타",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.폴스타.)))",
                                          "Count": 34,
                                          "Expression": "Manufacturer.폴스타.",
                                          "Metadata": {
                                              "Ordering": [
                                                  695.0
                                              ],
                                              "EngName": [
                                                  "Polestar"
                                              ],
                                              "Expression": [
                                                  "GreenType"
                                              ],
                                              "Code": [
                                                  "089"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": null,
                                                      "Max": null
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
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
                                          "Value": "푸조",
                                          "DisplayValue": "푸조",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.푸조.)))",
                                          "Count": 515,
                                          "Expression": "Manufacturer.푸조.",
                                          "Metadata": {
                                              "Ordering": [
                                                  700.0
                                              ],
                                              "EngName": [
                                                  "Peugeot"
                                              ],
                                              "Expression": [
                                                  "GreenType"
                                              ],
                                              "Code": [
                                                  "021"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": 177.0,
                                                      "Max": 4515.0
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "RV",
                                                      "SUV",
                                                      "기타",
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
                                          "Value": "피아트",
                                          "DisplayValue": "피아트",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.피아트.)))",
                                          "Count": 133,
                                          "Expression": "Manufacturer.피아트.",
                                          "Metadata": {
                                              "Ordering": [
                                                  710.0
                                              ],
                                              "EngName": [
                                                  "Fiat"
                                              ],
                                              "Expression": [
                                                  "GreenType"
                                              ],
                                              "Code": [
                                                  "018"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": 424.0,
                                                      "Max": 1316.0
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "RV",
                                                      "SUV",
                                                      "경차",
                                                      "기타",
                                                      "소형차",
                                                      "스포츠카",
                                                      "중형차"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "험머",
                                          "DisplayValue": "험머",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.험머.)))",
                                          "Count": 43,
                                          "Expression": "Manufacturer.험머.",
                                          "Metadata": {
                                              "Ordering": [
                                                  720.0
                                              ],
                                              "EngName": [
                                                  "Hummer"
                                              ],
                                              "Code": [
                                                  "048"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": null,
                                                      "Max": null
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "SUV",
                                                      "화물차"
                                                  ]
                                              ]
                                          }
                                      },
                                      {
                                          "IsSelected": false,
                                          "Value": "혼다",
                                          "DisplayValue": "혼다",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.혼다.)))",
                                          "Count": 467,
                                          "Expression": "Manufacturer.혼다.",
                                          "Metadata": {
                                              "Ordering": [
                                                  730.0
                                              ],
                                              "EngName": [
                                                  "Honda"
                                              ],
                                              "Expression": [
                                                  "GreenType"
                                              ],
                                              "Code": [
                                                  "027"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": 108.0,
                                                      "Max": 5413.0
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "RV",
                                                      "SUV",
                                                      "경차",
                                                      "기타",
                                                      "대형차",
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
                                          "Value": "기타 수입차",
                                          "DisplayValue": "기타 수입차",
                                          "Action": "(And.Hidden.N._.(Or.CarType.Y._.(C.CarType.N._.Manufacturer.기타 수입차.)))",
                                          "Count": 1,
                                          "Expression": "Manufacturer.기타 수입차.",
                                          "Metadata": {
                                              "Ordering": [
                                                  1000.0
                                              ],
                                              "EngName": [
                                                  "etc"
                                              ],
                                              "Code": [
                                                  "999"
                                              ],
                                              "Price": [
                                                  {
                                                      "Min": null,
                                                      "Max": null
                                                  }
                                              ],
                                              "CarType": [
                                                  "N"
                                              ],
                                              "Category": [
                                                  [
                                                      "기타"
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
                          "BreadCrumbs": []
                      },
                      "Expression": "CarType.N.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "A",
                      "DisplayValue": "A",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N._.CarType.A.))",
                      "Count": 133983,
                      "Expression": "CarType.A.",
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
              "PlaceholderExpression": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "경차",
                      "DisplayValue": "경차",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Category.경차.)",
                      "Count": 11701,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Category.소형차.)",
                      "Count": 4237,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Category.준중형차.)",
                      "Count": 14486,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Category.중형차.)",
                      "Count": 23908,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Category.대형차.)",
                      "Count": 27056,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Category.스포츠카.)",
                      "Count": 4620,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Category.SUV.)",
                      "Count": 35565,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Category.RV.)",
                      "Count": 5512,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Category.경승합차.)",
                      "Count": 295,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Category.승합차.)",
                      "Count": 3919,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Category.화물차.)",
                      "Count": 2668,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Category.기타.)",
                      "Count": 14,
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
              "PlaceholderExpression": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.(<!>))",
              "MultiSelectMode": "None",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "경차",
                      "DisplayValue": "경차",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.CategoryPath.경차.)",
                      "Count": 11701,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.CategoryPath.소형차.)",
                      "Count": 4237,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.CategoryPath.준중형차.)",
                      "Count": 14486,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.CategoryPath.중형차.)",
                      "Count": 23908,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.CategoryPath.대형차.)",
                      "Count": 27056,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.CategoryPath.스포츠카.)",
                      "Count": 4620,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.CategoryPath.SUV.)",
                      "Count": 35565,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.CategoryPath.RV.)",
                      "Count": 5512,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.CategoryPath.경승합차.)",
                      "Count": 295,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.CategoryPath.승합차.)",
                      "Count": 3919,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.CategoryPath.화물차.)",
                      "Count": 2668,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.CategoryPath.기타.)",
                      "Count": 14,
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
              "PlaceholderExpression": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "N",
                      "DisplayValue": "N",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.GreenType.N.)",
                      "Count": 118613,
                      "Expression": "GreenType.N.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "Y",
                      "DisplayValue": "Y",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.GreenType.Y.)",
                      "Count": 15370,
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
              "PlaceholderExpression": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.(<!>))",
              "MultiSelectMode": "None",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "A",
                      "DisplayValue": "A",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.ModelCarType.A.)",
                      "Count": 133983,
                      "Expression": "ModelCarType.A.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "N",
                      "DisplayValue": "N",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.ModelCarType.N.)",
                      "Count": 41834,
                      "Expression": "ModelCarType.N.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "Y",
                      "DisplayValue": "Y",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.ModelCarType.Y.)",
                      "Count": 92149,
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
              "PlaceholderExpression": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "Green",
                      "DisplayValue": "Green",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.AttributeType.Green.)",
                      "Count": 15370,
                      "Expression": "AttributeType.Green.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "Lease",
                      "DisplayValue": "Lease",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.AttributeType.Lease.)",
                      "Count": 5442,
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
              "PlaceholderExpression": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "일반",
                      "DisplayValue": "일반",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.SellType.일반.)",
                      "Count": 128541,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.SellType.리스승계.)",
                      "Count": 4399,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.SellType.렌트.)",
                      "Count": 1043,
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
              "PlaceholderExpression": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "운용리스",
                      "DisplayValue": "운용리스",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.LeaseType.운용리스.)",
                      "Count": 3165,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.LeaseType.금융리스.)",
                      "Count": 1234,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.LeaseType.렌트승계.)",
                      "Count": 1043,
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
              "PlaceholderExpression": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "승계지원금 포함",
                      "DisplayValue": "승계지원금 포함",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.LeaseBenefits.승계지원금 포함.)",
                      "Count": 771,
                      "Expression": "LeaseBenefits.승계지원금 포함.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "자동차세 포함",
                      "DisplayValue": "자동차세 포함",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.LeaseBenefits.자동차세 포함.)",
                      "Count": 1693,
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
              "PlaceholderExpression": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "오토",
                      "DisplayValue": "오토",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Transmission.오토.)",
                      "Count": 132082,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Transmission.수동.)",
                      "Count": 1602,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Transmission.세미오토.)",
                      "Count": 120,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Transmission.CVT.)",
                      "Count": 170,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Transmission.기타.)",
                      "Count": 6,
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
              "PlaceholderExpression": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "p0005",
                      "DisplayValue": "500만원 미만",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Price.p0005.)",
                      "Count": 14003,
                      "Expression": "Price.p0005.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "p0510",
                      "DisplayValue": "500 ~ 1,000만원 미만",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Price.p0510.)",
                      "Count": 26509,
                      "Expression": "Price.p0510.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "p1015",
                      "DisplayValue": "1,000 ~ 1,500만원 미만",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Price.p1015.)",
                      "Count": 19249,
                      "Expression": "Price.p1015.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "p1520",
                      "DisplayValue": "1,500 ~ 2,000만원 미만",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Price.p1520.)",
                      "Count": 15940,
                      "Expression": "Price.p1520.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "p2025",
                      "DisplayValue": "2,000 ~ 2,500만원 미만",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Price.p2025.)",
                      "Count": 11054,
                      "Expression": "Price.p2025.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "p2530",
                      "DisplayValue": "2,500 ~ 3,000만원 미만",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Price.p2530.)",
                      "Count": 9050,
                      "Expression": "Price.p2530.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "p3035",
                      "DisplayValue": "3,000 ~ 3,500만원 미만",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Price.p3035.)",
                      "Count": 6530,
                      "Expression": "Price.p3035.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "p3540",
                      "DisplayValue": "3,500 ~ 4,000만원 미만",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Price.p3540.)",
                      "Count": 5507,
                      "Expression": "Price.p3540.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "p4045",
                      "DisplayValue": "4,000 ~ 4,500만원 미만",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Price.p4045.)",
                      "Count": 4188,
                      "Expression": "Price.p4045.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "p4550",
                      "DisplayValue": "4,500 ~ 5,000만원 미만",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Price.p4550.)",
                      "Count": 3517,
                      "Expression": "Price.p4550.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "p5099",
                      "DisplayValue": "5,000만원 이상",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Price.p5099.)",
                      "Count": 18436,
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
              "PlaceholderExpression": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "경기",
                      "DisplayValue": "경기",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.OfficeCityState.경기.)",
                      "Count": 54628,
                      "Expression": "OfficeCityState.경기.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "서울",
                      "DisplayValue": "서울",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.OfficeCityState.서울.)",
                      "Count": 15468,
                      "Expression": "OfficeCityState.서울.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "대구",
                      "DisplayValue": "대구",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.OfficeCityState.대구.)",
                      "Count": 14137,
                      "Expression": "OfficeCityState.대구.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "부산",
                      "DisplayValue": "부산",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.OfficeCityState.부산.)",
                      "Count": 11314,
                      "Expression": "OfficeCityState.부산.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "인천",
                      "DisplayValue": "인천",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.OfficeCityState.인천.)",
                      "Count": 6739,
                      "Expression": "OfficeCityState.인천.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "대전",
                      "DisplayValue": "대전",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.OfficeCityState.대전.)",
                      "Count": 6004,
                      "Expression": "OfficeCityState.대전.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "광주",
                      "DisplayValue": "광주",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.OfficeCityState.광주.)",
                      "Count": 5334,
                      "Expression": "OfficeCityState.광주.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "전북",
                      "DisplayValue": "전북",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.OfficeCityState.전북.)",
                      "Count": 4149,
                      "Expression": "OfficeCityState.전북.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "경남",
                      "DisplayValue": "경남",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.OfficeCityState.경남.)",
                      "Count": 3736,
                      "Expression": "OfficeCityState.경남.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "충남",
                      "DisplayValue": "충남",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.OfficeCityState.충남.)",
                      "Count": 3663,
                      "Expression": "OfficeCityState.충남.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "울산",
                      "DisplayValue": "울산",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.OfficeCityState.울산.)",
                      "Count": 3026,
                      "Expression": "OfficeCityState.울산.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "충북",
                      "DisplayValue": "충북",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.OfficeCityState.충북.)",
                      "Count": 2059,
                      "Expression": "OfficeCityState.충북.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "경북",
                      "DisplayValue": "경북",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.OfficeCityState.경북.)",
                      "Count": 1584,
                      "Expression": "OfficeCityState.경북.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "전남",
                      "DisplayValue": "전남",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.OfficeCityState.전남.)",
                      "Count": 797,
                      "Expression": "OfficeCityState.전남.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "강원",
                      "DisplayValue": "강원",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.OfficeCityState.강원.)",
                      "Count": 549,
                      "Expression": "OfficeCityState.강원.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "제주",
                      "DisplayValue": "제주",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.OfficeCityState.제주.)",
                      "Count": 548,
                      "Expression": "OfficeCityState.제주.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "세종",
                      "DisplayValue": "세종",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.OfficeCityState.세종.)",
                      "Count": 54,
                      "Expression": "OfficeCityState.세종.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "null",
                      "DisplayValue": "null",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.OfficeCityState.null.)",
                      "Count": 14,
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
              "PlaceholderExpression": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "가솔린",
                      "DisplayValue": "가솔린",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.FuelType.가솔린.)",
                      "Count": 74891,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.FuelType.디젤.)",
                      "Count": 39897,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.FuelType.LPG(일반인 구입_).)",
                      "Count": 8871,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.FuelType.가솔린+전기.)",
                      "Count": 6921,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.FuelType.디젤+전기.)",
                      "Count": 198,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.FuelType.LPG+전기.)",
                      "Count": 80,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.FuelType.가솔린+LPG.)",
                      "Count": 232,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.FuelType.가솔린+CNG.)",
                      "Count": 17,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.FuelType.전기.)",
                      "Count": 2763,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.FuelType.수소.)",
                      "Count": 108,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.FuelType.CNG.)",
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.FuelType.기타.)",
                      "Count": 1,
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
              "PlaceholderExpression": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "Meetgo",
                      "DisplayValue": "믿고",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Trust.Meetgo.)",
                      "Count": 372,
                      "Expression": "Trust.Meetgo.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "HomeService",
                      "DisplayValue": "엔카홈서비스",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Trust.HomeService.)",
                      "Count": 19716,
                      "Expression": "Trust.HomeService.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "Warranty",
                      "DisplayValue": "엔카진단",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Trust.Warranty.)",
                      "Count": 48295,
                      "Expression": "Trust.Warranty.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "ExtendWarranty",
                      "DisplayValue": "엔카보증",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Trust.ExtendWarranty.)",
                      "Count": 19700,
                      "Expression": "Trust.ExtendWarranty.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "ExtendWarrantyImported",
                      "DisplayValue": "엔카보증(수입차)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Trust.ExtendWarrantyImported.)",
                      "Count": 6266,
                      "Expression": "Trust.ExtendWarrantyImported.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "Compensate",
                      "DisplayValue": "헛걸음보상",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Trust.Compensate.)",
                      "Count": 2908,
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
              "PlaceholderExpression": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.(<!>))",
              "MultiSelectMode": "And",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "InspectionDirect",
                      "DisplayValue": "엔카(직영) 성능점검",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Condition.InspectionDirect.)",
                      "Count": 2696,
                      "Expression": "Condition.InspectionDirect.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "Inspection",
                      "DisplayValue": "성능기록부",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Condition.Inspection.)",
                      "Count": 119048,
                      "Expression": "Condition.Inspection.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "Record",
                      "DisplayValue": "보험이력",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Condition.Record.)",
                      "Count": 126149,
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
              "PlaceholderExpression": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "A",
                      "DisplayValue": "개인",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Separation.A.)",
                      "Count": 4096,
                      "Expression": "Separation.A.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "B",
                      "DisplayValue": "딜러",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Separation.B.)",
                      "Count": 126435,
                      "Expression": "Separation.B.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "F",
                      "DisplayValue": "브랜드인증",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Separation.F.)",
                      "Count": 3095,
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
              "PlaceholderExpression": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.(<!>))",
              "MultiSelectMode": "And",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "18",
                      "DisplayValue": "18",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Hotmarks.18.)",
                      "Count": 15,
                      "Expression": "Hotmarks.18.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "08",
                      "DisplayValue": "08",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Hotmarks.08.)",
                      "Count": 317,
                      "Expression": "Hotmarks.08.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "19",
                      "DisplayValue": "19",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Hotmarks.19.)",
                      "Count": 3504,
                      "Expression": "Hotmarks.19.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "29",
                      "DisplayValue": "29",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Hotmarks.29.)",
                      "Count": 1028,
                      "Expression": "Hotmarks.29.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "28",
                      "DisplayValue": "28",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Hotmarks.28.)",
                      "Count": 605,
                      "Expression": "Hotmarks.28.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "05",
                      "DisplayValue": "05",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Hotmarks.05.)",
                      "Count": 16,
                      "Expression": "Hotmarks.05.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "04",
                      "DisplayValue": "04",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Hotmarks.04.)",
                      "Count": 175,
                      "Expression": "Hotmarks.04.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "14",
                      "DisplayValue": "14",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Hotmarks.14.)",
                      "Count": 9134,
                      "Expression": "Hotmarks.14.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "07",
                      "DisplayValue": "07",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Hotmarks.07.)",
                      "Count": 5,
                      "Expression": "Hotmarks.07.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "27",
                      "DisplayValue": "27",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Hotmarks.27.)",
                      "Count": 418,
                      "Expression": "Hotmarks.27.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "15",
                      "DisplayValue": "15",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Hotmarks.15.)",
                      "Count": 6841,
                      "Expression": "Hotmarks.15.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "06",
                      "DisplayValue": "06",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Hotmarks.06.)",
                      "Count": 40,
                      "Expression": "Hotmarks.06.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "26",
                      "DisplayValue": "26",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Hotmarks.26.)",
                      "Count": 1695,
                      "Expression": "Hotmarks.26.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "01",
                      "DisplayValue": "01",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Hotmarks.01.)",
                      "Count": 232,
                      "Expression": "Hotmarks.01.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "17",
                      "DisplayValue": "17",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Hotmarks.17.)",
                      "Count": 3129,
                      "Expression": "Hotmarks.17.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "10",
                      "DisplayValue": "10",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Hotmarks.10.)",
                      "Count": 3592,
                      "Expression": "Hotmarks.10.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "24",
                      "DisplayValue": "24",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Hotmarks.24.)",
                      "Count": 2039,
                      "Expression": "Hotmarks.24.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "03",
                      "DisplayValue": "03",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Hotmarks.03.)",
                      "Count": 356,
                      "Expression": "Hotmarks.03.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "23",
                      "DisplayValue": "23",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Hotmarks.23.)",
                      "Count": 295,
                      "Expression": "Hotmarks.23.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "11",
                      "DisplayValue": "11",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Hotmarks.11.)",
                      "Count": 923,
                      "Expression": "Hotmarks.11.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "22",
                      "DisplayValue": "22",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Hotmarks.22.)",
                      "Count": 423,
                      "Expression": "Hotmarks.22.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "02",
                      "DisplayValue": "02",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Hotmarks.02.)",
                      "Count": 928,
                      "Expression": "Hotmarks.02.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "12",
                      "DisplayValue": "12",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Hotmarks.12.)",
                      "Count": 2992,
                      "Expression": "Hotmarks.12.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "21",
                      "DisplayValue": "21",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Hotmarks.21.)",
                      "Count": 205,
                      "Expression": "Hotmarks.21.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "13",
                      "DisplayValue": "13",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Hotmarks.13.)",
                      "Count": 7650,
                      "Expression": "Hotmarks.13.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "20",
                      "DisplayValue": "20",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Hotmarks.20.)",
                      "Count": 742,
                      "Expression": "Hotmarks.20.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "09",
                      "DisplayValue": "09",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Hotmarks.09.)",
                      "Count": 4106,
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
              "PlaceholderExpression": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "r0002",
                      "DisplayValue": "2만 km 미만",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Mileage.r0002.)",
                      "Count": 17253,
                      "Expression": "Mileage.r0002.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "r0204",
                      "DisplayValue": "2만 ~ 4만 km 미만",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Mileage.r0204.)",
                      "Count": 17507,
                      "Expression": "Mileage.r0204.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "r0406",
                      "DisplayValue": "4만 ~ 6만 km 미만",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Mileage.r0406.)",
                      "Count": 18420,
                      "Expression": "Mileage.r0406.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "r0608",
                      "DisplayValue": "6만 ~ 8만 km 미만",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Mileage.r0608.)",
                      "Count": 17813,
                      "Expression": "Mileage.r0608.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "r0810",
                      "DisplayValue": "8만 ~ 10만 km 미만",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Mileage.r0810.)",
                      "Count": 17008,
                      "Expression": "Mileage.r0810.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "r1099",
                      "DisplayValue": "10만 km 이상",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Mileage.r1099.)",
                      "Count": 45982,
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
              "PlaceholderExpression": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "흰색",
                      "DisplayValue": "흰색",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Color.흰색.)",
                      "Count": 46375,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Color.검정색.)",
                      "Count": 33195,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Color.쥐색.)",
                      "Count": 18989,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Color.은색.)",
                      "Count": 11407,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Color.청색.)",
                      "Count": 7431,
                      "Expression": "Color.청색.",
                      "Metadata": {
                          "Expression": [
                              "#124280;#124280"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "진주색",
                      "DisplayValue": "진주색",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Color.진주색.)",
                      "Count": 3811,
                      "Expression": "Color.진주색.",
                      "Metadata": {
                          "Expression": [
                              "#FFFAFA;#FFFAFA"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "은회색",
                      "DisplayValue": "은회색",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Color.은회색.)",
                      "Count": 3170,
                      "Expression": "Color.은회색.",
                      "Metadata": {
                          "Expression": [
                              "#D3D3D3;#D3D3D3"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "빨간색",
                      "DisplayValue": "빨간색",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Color.빨간색.)",
                      "Count": 2680,
                      "Expression": "Color.빨간색.",
                      "Metadata": {
                          "Expression": [
                              "#ff0000;#ff0000"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "노란색",
                      "DisplayValue": "노란색",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Color.노란색.)",
                      "Count": 1096,
                      "Expression": "Color.노란색.",
                      "Metadata": {
                          "Expression": [
                              "#ffff00;#ffff00"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "하늘색",
                      "DisplayValue": "하늘색",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Color.하늘색.)",
                      "Count": 902,
                      "Expression": "Color.하늘색.",
                      "Metadata": {
                          "Expression": [
                              "#75919C;#75919C"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "갈색",
                      "DisplayValue": "갈색",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Color.갈색.)",
                      "Count": 860,
                      "Expression": "Color.갈색.",
                      "Metadata": {
                          "Expression": [
                              "#3D3624;#3D3624"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "담녹색",
                      "DisplayValue": "담녹색",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Color.담녹색.)",
                      "Count": 478,
                      "Expression": "Color.담녹색.",
                      "Metadata": {
                          "Expression": [
                              "#1D444B;#1D444B"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "녹색",
                      "DisplayValue": "녹색",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Color.녹색.)",
                      "Count": 426,
                      "Expression": "Color.녹색.",
                      "Metadata": {
                          "Expression": [
                              "#00cc00;#00cc00"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "연금색",
                      "DisplayValue": "연금색",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Color.연금색.)",
                      "Count": 396,
                      "Expression": "Color.연금색.",
                      "Metadata": {
                          "Expression": [
                              "#8E8574;#8E8574"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "주황색",
                      "DisplayValue": "주황색",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Color.주황색.)",
                      "Count": 334,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Color.자주색.)",
                      "Count": 291,
                      "Expression": "Color.자주색.",
                      "Metadata": {
                          "Expression": [
                              "#800080;#800080"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "검정투톤",
                      "DisplayValue": "검정투톤",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Color.검정투톤.)",
                      "Count": 288,
                      "Expression": "Color.검정투톤.",
                      "Metadata": {
                          "Expression": [
                              "#000000;#464741"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "연두색",
                      "DisplayValue": "연두색",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Color.연두색.)",
                      "Count": 275,
                      "Expression": "Color.연두색.",
                      "Metadata": {
                          "Expression": [
                              "#9AB95C;#9AB95C"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "분홍색",
                      "DisplayValue": "분홍색",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Color.분홍색.)",
                      "Count": 235,
                      "Expression": "Color.분홍색.",
                      "Metadata": {
                          "Expression": [
                              "#EECACE;#EECACE"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "명은색",
                      "DisplayValue": "명은색",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Color.명은색.)",
                      "Count": 195,
                      "Expression": "Color.명은색.",
                      "Metadata": {
                          "Expression": [
                              "#CFD8E7;#CFD8E7"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "갈대색",
                      "DisplayValue": "갈대색",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Color.갈대색.)",
                      "Count": 184,
                      "Expression": "Color.갈대색.",
                      "Metadata": {
                          "Expression": [
                              "#808275;#808275"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "은하색",
                      "DisplayValue": "은하색",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Color.은하색.)",
                      "Count": 170,
                      "Expression": "Color.은하색.",
                      "Metadata": {
                          "Expression": [
                              "#A6B2B0;#A6B2B0"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "청옥색",
                      "DisplayValue": "청옥색",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Color.청옥색.)",
                      "Count": 169,
                      "Expression": "Color.청옥색.",
                      "Metadata": {
                          "Expression": [
                              "#1F7D7C;#1F7D7C"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "은색투톤",
                      "DisplayValue": "은색투톤",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Color.은색투톤.)",
                      "Count": 156,
                      "Expression": "Color.은색투톤.",
                      "Metadata": {
                          "Expression": [
                              "#c0c0c0;#464741"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "흰색투톤",
                      "DisplayValue": "흰색투톤",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Color.흰색투톤.)",
                      "Count": 145,
                      "Expression": "Color.흰색투톤.",
                      "Metadata": {
                          "Expression": [
                              "#ffffff;#464741"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "보라색",
                      "DisplayValue": "보라색",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Color.보라색.)",
                      "Count": 131,
                      "Expression": "Color.보라색.",
                      "Metadata": {
                          "Expression": [
                              "#46293B;#46293B"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "금색",
                      "DisplayValue": "금색",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Color.금색.)",
                      "Count": 84,
                      "Expression": "Color.금색.",
                      "Metadata": {
                          "Expression": [
                              "#837538;#837538"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "진주투톤",
                      "DisplayValue": "진주투톤",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Color.진주투톤.)",
                      "Count": 65,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Color.금색투톤.)",
                      "Count": 12,
                      "Expression": "Color.금색투톤.",
                      "Metadata": {
                          "Expression": [
                              "#837538;#464741"
                          ]
                      }
                  },
                  {
                      "IsSelected": false,
                      "Value": "갈색투톤",
                      "DisplayValue": "갈색투톤",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Color.갈색투톤.)",
                      "Count": 10,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Color.검은색.)",
                      "Count": 1,
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
              "PlaceholderExpression": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.(<!>))",
              "MultiSelectMode": "And",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "선루프",
                      "DisplayValue": "선루프",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.선루프.)",
                      "Count": 54973,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.헤드램프(HID_).)",
                      "Count": 24878,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.헤드램프(LED_).)",
                      "Count": 50407,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.파워 전동 트렁크.)",
                      "Count": 45499,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.고스트 도어 클로징.)",
                      "Count": 10280,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.전동접이 사이드 미러.)",
                      "Count": 124047,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.알루미늄 휠.)",
                      "Count": 126960,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.루프랙.)",
                      "Count": 35123,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.열선 스티어링 휠.)",
                      "Count": 84361,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.전동 조절 스티어링 휠.)",
                      "Count": 36230,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.패들 시프트.)",
                      "Count": 51897,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.스티어링 휠 리모컨.)",
                      "Count": 121873,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.ECM 룸미러.)",
                      "Count": 100543,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.하이패스.)",
                      "Count": 91271,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.파워 도어록.)",
                      "Count": 129903,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.파워 스티어링 휠.)",
                      "Count": 130122,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.파워 윈도우.)",
                      "Count": 131077,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.에어백(운전석_).)",
                      "Count": 131017,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.에어백(동승석_).)",
                      "Count": 127489,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.에어백(사이드_).)",
                      "Count": 118655,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.에어백(커튼_).)",
                      "Count": 111050,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.브레이크 잠김 방지(ABS_).)",
                      "Count": 128387,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.미끄럼 방지(TCS_).)",
                      "Count": 120174,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.차체자세 제어장치(ESC_).)",
                      "Count": 119091,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.타이어 공기압센서(TPMS_).)",
                      "Count": 109524,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.차선이탈 경보 시스템(LDWS_).)",
                      "Count": 53545,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.전자제어 서스펜션(ECS_).)",
                      "Count": 15908,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.주차감지센서(전방_).)",
                      "Count": 77054,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.주차감지센서(후방_).)",
                      "Count": 126825,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.후측방 경보 시스템.)",
                      "Count": 53934,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.후방 카메라.)",
                      "Count": 114781,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.360도 어라운드 뷰.)",
                      "Count": 32060,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.크루즈 컨트롤(일반_).)",
                      "Count": 61849,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.크루즈 컨트롤(어댑티브_).)",
                      "Count": 37271,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.헤드업 디스플레이(HUD_).)",
                      "Count": 30632,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.전자식 주차브레이크(EPB_).)",
                      "Count": 64335,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.자동 에어컨.)",
                      "Count": 105441,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.스마트키.)",
                      "Count": 107732,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.무선도어 잠금장치.)",
                      "Count": 127933,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.레인센서.)",
                      "Count": 76963,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.오토 라이트.)",
                      "Count": 116625,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.커튼/블라인드(뒷좌석_).)",
                      "Count": 27269,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.커튼/블라인드(후방_).)",
                      "Count": 17855,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.내비게이션.)",
                      "Count": 106082,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.앞좌석 AV 모니터.)",
                      "Count": 95711,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.뒷좌석 AV 모니터.)",
                      "Count": 6538,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.블루투스.)",
                      "Count": 117259,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.CD 플레이어.)",
                      "Count": 60073,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.USB 단자.)",
                      "Count": 121619,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.AUX 단자.)",
                      "Count": 78496,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.가죽시트.)",
                      "Count": 125089,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.전동시트(운전석_).)",
                      "Count": 89772,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.전동시트(동승석_).)",
                      "Count": 72147,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.전동시트(뒷좌석_).)",
                      "Count": 8539,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.열선시트(앞좌석_).)",
                      "Count": 124755,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.열선시트(뒷좌석_).)",
                      "Count": 71638,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.메모리 시트(운전석_).)",
                      "Count": 60192,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.메모리 시트(동승석_).)",
                      "Count": 20040,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.통풍시트(운전석_).)",
                      "Count": 64451,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.통풍시트(동승석_).)",
                      "Count": 57831,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.통풍시트(뒷좌석_).)",
                      "Count": 9342,
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
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Options.마사지 시트.)",
                      "Count": 7471,
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
              "PlaceholderExpression": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "E",
                      "DisplayValue": "모바일프리미엄",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.AdType.E.)",
                      "Count": 11459,
                      "Expression": "AdType.E.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "D",
                      "DisplayValue": "파워팩",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.AdType.D.)",
                      "Count": 17945,
                      "Expression": "AdType.D.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "G",
                      "DisplayValue": "자동업데이트",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.AdType.G.)",
                      "Count": 16914,
                      "Expression": "AdType.G.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "F",
                      "DisplayValue": "모바일우대",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.AdType.F.)",
                      "Count": 111,
                      "Expression": "AdType.F.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "A",
                      "DisplayValue": "사진우대",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.AdType.A.)",
                      "Count": 18462,
                      "Expression": "AdType.A.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "C",
                      "DisplayValue": "핫마크",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.AdType.C.)",
                      "Count": 18913,
                      "Expression": "AdType.C.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "B",
                      "DisplayValue": "우대등록",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.AdType.B.)",
                      "Count": 19907,
                      "Expression": "AdType.B.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "H",
                      "DisplayValue": "오토체인지",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.AdType.H.)",
                      "Count": 4454,
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
              "PlaceholderExpression": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "F",
                      "DisplayValue": "F",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Accident.F.)",
                      "Count": 29659,
                      "Expression": "Accident.F.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "N",
                      "DisplayValue": "N",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Accident.N.)",
                      "Count": 77747,
                      "Expression": "Accident.N.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "Y",
                      "DisplayValue": "Y",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Accident.Y.)",
                      "Count": 11642,
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
              "PlaceholderExpression": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "1",
                      "DisplayValue": "1",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Lease.1.)",
                      "Count": 3165,
                      "Expression": "Lease.1.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "2",
                      "DisplayValue": "2",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Lease.2.)",
                      "Count": 1234,
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
              "PlaceholderExpression": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.(<!>))",
              "MultiSelectMode": "None",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "가양(도이치)",
                      "DisplayValue": "가양(도이치)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.가양(도이치_).)",
                      "Count": 61,
                      "Expression": "Exhibition.가양(도이치_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "가양(케이씨씨오토)",
                      "DisplayValue": "가양(케이씨씨오토)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.가양(케이씨씨오토_).)",
                      "Count": 39,
                      "Expression": "Exhibition.가양(케이씨씨오토_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "가양(클라쎄오토)",
                      "DisplayValue": "가양(클라쎄오토)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.가양(클라쎄오토_).)",
                      "Count": 10,
                      "Expression": "Exhibition.가양(클라쎄오토_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "강남(케이씨씨오토)",
                      "DisplayValue": "강남(케이씨씨오토)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.강남(케이씨씨오토_).)",
                      "Count": 41,
                      "Expression": "Exhibition.강남(케이씨씨오토_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "고양(모터원)",
                      "DisplayValue": "고양(모터원)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.고양(모터원_).)",
                      "Count": 98,
                      "Expression": "Exhibition.고양(모터원_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "고양(바바리안)",
                      "DisplayValue": "고양(바바리안)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.고양(바바리안_).)",
                      "Count": 90,
                      "Expression": "Exhibition.고양(바바리안_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "광주(고진모터스)",
                      "DisplayValue": "광주(고진모터스)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.광주(고진모터스_).)",
                      "Count": 30,
                      "Expression": "Exhibition.광주(고진모터스_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "광주(신성자동차)",
                      "DisplayValue": "광주(신성자동차)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.광주(신성자동차_).)",
                      "Count": 23,
                      "Expression": "Exhibition.광주(신성자동차_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "광주(코오롱)",
                      "DisplayValue": "광주(코오롱)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.광주(코오롱_).)",
                      "Count": 18,
                      "Expression": "Exhibition.광주(코오롱_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "김포(바바리안)",
                      "DisplayValue": "김포(바바리안)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.김포(바바리안_).)",
                      "Count": 65,
                      "Expression": "Exhibition.김포(바바리안_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "김포(코오롱아우토)",
                      "DisplayValue": "김포(코오롱아우토)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.김포(코오롱아우토_).)",
                      "Count": 55,
                      "Expression": "Exhibition.김포(코오롱아우토_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "김포(코오롱오토모티브)",
                      "DisplayValue": "김포(코오롱오토모티브)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.김포(코오롱오토모티브_).)",
                      "Count": 23,
                      "Expression": "Exhibition.김포(코오롱오토모티브_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "대구(아우토슈타트)",
                      "DisplayValue": "대구(아우토슈타트)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.대구(아우토슈타트_).)",
                      "Count": 15,
                      "Expression": "Exhibition.대구(아우토슈타트_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "대구(와이엠렉서스)",
                      "DisplayValue": "대구(와이엠렉서스)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.대구(와이엠렉서스_).)",
                      "Count": 17,
                      "Expression": "Exhibition.대구(와이엠렉서스_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "대구(인타이어모터스)",
                      "DisplayValue": "대구(인타이어모터스)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.대구(인타이어모터스_).)",
                      "Count": 5,
                      "Expression": "Exhibition.대구(인타이어모터스_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "대구(중앙)",
                      "DisplayValue": "대구(중앙)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.대구(중앙_).)",
                      "Count": 17,
                      "Expression": "Exhibition.대구(중앙_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "대구(지앤비오토모빌)",
                      "DisplayValue": "대구(지앤비오토모빌)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.대구(지앤비오토모빌_).)",
                      "Count": 20,
                      "Expression": "Exhibition.대구(지앤비오토모빌_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "대구(코오롱)",
                      "DisplayValue": "대구(코오롱)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.대구(코오롱_).)",
                      "Count": 26,
                      "Expression": "Exhibition.대구(코오롱_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "대구(한영모터스)",
                      "DisplayValue": "대구(한영모터스)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.대구(한영모터스_).)",
                      "Count": 21,
                      "Expression": "Exhibition.대구(한영모터스_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "대전(JL모터스)",
                      "DisplayValue": "대전(JL모터스)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.대전(JL모터스_).)",
                      "Count": 5,
                      "Expression": "Exhibition.대전(JL모터스_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "대전(고진모터스)",
                      "DisplayValue": "대전(고진모터스)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.대전(고진모터스_).)",
                      "Count": 25,
                      "Expression": "Exhibition.대전(고진모터스_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "대전(코오롱)",
                      "DisplayValue": "대전(코오롱)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.대전(코오롱_).)",
                      "Count": 13,
                      "Expression": "Exhibition.대전(코오롱_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "대전(한성)",
                      "DisplayValue": "대전(한성)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.대전(한성_).)",
                      "Count": 77,
                      "Expression": "Exhibition.대전(한성_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "동대문(코오롱)",
                      "DisplayValue": "동대문(코오롱)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.동대문(코오롱_).)",
                      "Count": 3,
                      "Expression": "Exhibition.동대문(코오롱_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "동탄(위본모터스)",
                      "DisplayValue": "동탄(위본모터스)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.동탄(위본모터스_).)",
                      "Count": 21,
                      "Expression": "Exhibition.동탄(위본모터스_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "람보르기니서울(SQDA)",
                      "DisplayValue": "람보르기니서울(SQDA)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.람보르기니서울(SQDA_).)",
                      "Count": 5,
                      "Expression": "Exhibition.람보르기니서울(SQDA_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "로터스코리아",
                      "DisplayValue": "로터스코리아",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.로터스코리아.)",
                      "Count": 2,
                      "Expression": "Exhibition.로터스코리아.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "벤틀리서울",
                      "DisplayValue": "벤틀리서울",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.벤틀리서울.)",
                      "Count": 10,
                      "Expression": "Exhibition.벤틀리서울.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "부산(동성)",
                      "DisplayValue": "부산(동성)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.부산(동성_).)",
                      "Count": 91,
                      "Expression": "Exhibition.부산(동성_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "부산(아이언모터스)",
                      "DisplayValue": "부산(아이언모터스)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.부산(아이언모터스_).)",
                      "Count": 14,
                      "Expression": "Exhibition.부산(아이언모터스_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "부산(유카로오토모빌)",
                      "DisplayValue": "부산(유카로오토모빌)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.부산(유카로오토모빌_).)",
                      "Count": 34,
                      "Expression": "Exhibition.부산(유카로오토모빌_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "부산(코오롱)",
                      "DisplayValue": "부산(코오롱)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.부산(코오롱_).)",
                      "Count": 16,
                      "Expression": "Exhibition.부산(코오롱_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "부산(한성)",
                      "DisplayValue": "부산(한성)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.부산(한성_).)",
                      "Count": 23,
                      "Expression": "Exhibition.부산(한성_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "부산(한영모터스)",
                      "DisplayValue": "부산(한영모터스)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.부산(한영모터스_).)",
                      "Count": 6,
                      "Expression": "Exhibition.부산(한영모터스_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "부산사직(스타)",
                      "DisplayValue": "부산사직(스타)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.부산사직(스타_).)",
                      "Count": 68,
                      "Expression": "Exhibition.부산사직(스타_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "부산전시장",
                      "DisplayValue": "부산전시장",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.부산전시장.)",
                      "Count": 16,
                      "Expression": "Exhibition.부산전시장.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "부천(코오롱)",
                      "DisplayValue": "부천(코오롱)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.부천(코오롱_).)",
                      "Count": 34,
                      "Expression": "Exhibition.부천(코오롱_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "분당(SSCL)",
                      "DisplayValue": "분당(SSCL)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.분당(SSCL_).)",
                      "Count": 50,
                      "Expression": "Exhibition.분당(SSCL_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "분당(위본모터스)",
                      "DisplayValue": "분당(위본모터스)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.분당(위본모터스_).)",
                      "Count": 29,
                      "Expression": "Exhibition.분당(위본모터스_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "분당(한독모터스)",
                      "DisplayValue": "분당(한독모터스)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.분당(한독모터스_).)",
                      "Count": 50,
                      "Expression": "Exhibition.분당(한독모터스_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "서울(KCC오토모빌)",
                      "DisplayValue": "서울(KCC오토모빌)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.서울(KCC오토모빌_).)",
                      "Count": 23,
                      "Expression": "Exhibition.서울(KCC오토모빌_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "서울(고진모터스)",
                      "DisplayValue": "서울(고진모터스)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.서울(고진모터스_).)",
                      "Count": 43,
                      "Expression": "Exhibition.서울(고진모터스_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "서울(교학모터스)",
                      "DisplayValue": "서울(교학모터스)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.서울(교학모터스_).)",
                      "Count": 46,
                      "Expression": "Exhibition.서울(교학모터스_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "서울(성산한성자동차)",
                      "DisplayValue": "서울(성산한성자동차)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.서울(성산한성자동차_).)",
                      "Count": 70,
                      "Expression": "Exhibition.서울(성산한성자동차_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "서울(아우토슈타트)",
                      "DisplayValue": "서울(아우토슈타트)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.서울(아우토슈타트_).)",
                      "Count": 20,
                      "Expression": "Exhibition.서울(아우토슈타트_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "서울(에프엠케이)",
                      "DisplayValue": "서울(에프엠케이)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.서울(에프엠케이_).)",
                      "Count": 69,
                      "Expression": "Exhibition.서울(에프엠케이_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "서울(용답한성자동차)",
                      "DisplayValue": "서울(용답한성자동차)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.서울(용답한성자동차_).)",
                      "Count": 78,
                      "Expression": "Exhibition.서울(용답한성자동차_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "서울(코오롱)",
                      "DisplayValue": "서울(코오롱)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.서울(코오롱_).)",
                      "Count": 43,
                      "Expression": "Exhibition.서울(코오롱_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "서울(태안모터스)",
                      "DisplayValue": "서울(태안모터스)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.서울(태안모터스_).)",
                      "Count": 92,
                      "Expression": "Exhibition.서울(태안모터스_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "수원(고진모터스)",
                      "DisplayValue": "수원(고진모터스)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.수원(고진모터스_).)",
                      "Count": 22,
                      "Expression": "Exhibition.수원(고진모터스_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "수원(도이치)",
                      "DisplayValue": "수원(도이치)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.수원(도이치_).)",
                      "Count": 60,
                      "Expression": "Exhibition.수원(도이치_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "수원(도이치아우토)",
                      "DisplayValue": "수원(도이치아우토)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.수원(도이치아우토_).)",
                      "Count": 28,
                      "Expression": "Exhibition.수원(도이치아우토_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "수원(아우토플라츠)",
                      "DisplayValue": "수원(아우토플라츠)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.수원(아우토플라츠_).)",
                      "Count": 3,
                      "Expression": "Exhibition.수원(아우토플라츠_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "수원(에이치모터스)",
                      "DisplayValue": "수원(에이치모터스)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.수원(에이치모터스_).)",
                      "Count": 21,
                      "Expression": "Exhibition.수원(에이치모터스_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "수원(한독모터스)",
                      "DisplayValue": "수원(한독모터스)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.수원(한독모터스_).)",
                      "Count": 77,
                      "Expression": "Exhibition.수원(한독모터스_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "수원(한성)",
                      "DisplayValue": "수원(한성)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.수원(한성_).)",
                      "Count": 78,
                      "Expression": "Exhibition.수원(한성_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "수원권선(한성자동차)",
                      "DisplayValue": "수원권선(한성자동차)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.수원권선(한성자동차_).)",
                      "Count": 139,
                      "Expression": "Exhibition.수원권선(한성자동차_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "순천(한성)",
                      "DisplayValue": "순천(한성)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.순천(한성_).)",
                      "Count": 11,
                      "Expression": "Exhibition.순천(한성_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "신갈(센트럴모터스)",
                      "DisplayValue": "신갈(센트럴모터스)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.신갈(센트럴모터스_).)",
                      "Count": 15,
                      "Expression": "Exhibition.신갈(센트럴모터스_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "안양(삼천리모터스)",
                      "DisplayValue": "안양(삼천리모터스)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.안양(삼천리모터스_).)",
                      "Count": 47,
                      "Expression": "Exhibition.안양(삼천리모터스_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "양산(아이언오토)",
                      "DisplayValue": "양산(아이언오토)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.양산(아이언오토_).)",
                      "Count": 24,
                      "Expression": "Exhibition.양산(아이언오토_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "양재(도이치)",
                      "DisplayValue": "양재(도이치)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.양재(도이치_).)",
                      "Count": 79,
                      "Expression": "Exhibition.양재(도이치_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "양재(마이스터모터스)",
                      "DisplayValue": "양재(마이스터모터스)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.양재(마이스터모터스_).)",
                      "Count": 9,
                      "Expression": "Exhibition.양재(마이스터모터스_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "양재(엘엔티렉서스)",
                      "DisplayValue": "양재(엘엔티렉서스)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.양재(엘엔티렉서스_).)",
                      "Count": 31,
                      "Expression": "Exhibition.양재(엘엔티렉서스_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "엘앤티토요타인증중고사업본부",
                      "DisplayValue": "엘앤티토요타인증중고사업본부",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.엘앤티토요타인증중고사업본부.)",
                      "Count": 7,
                      "Expression": "Exhibition.엘앤티토요타인증중고사업본부.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "용인(더클래스효성)",
                      "DisplayValue": "용인(더클래스효성)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.용인(더클래스효성_).)",
                      "Count": 89,
                      "Expression": "Exhibition.용인(더클래스효성_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "울산(스타)",
                      "DisplayValue": "울산(스타)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.울산(스타_).)",
                      "Count": 30,
                      "Expression": "Exhibition.울산(스타_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "울산(유카로오토모빌)",
                      "DisplayValue": "울산(유카로오토모빌)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.울산(유카로오토모빌_).)",
                      "Count": 14,
                      "Expression": "Exhibition.울산(유카로오토모빌_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "원주(한서모터스)",
                      "DisplayValue": "원주(한서모터스)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.원주(한서모터스_).)",
                      "Count": 8,
                      "Expression": "Exhibition.원주(한서모터스_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "원주전시장(한성)",
                      "DisplayValue": "원주전시장(한성)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.원주전시장(한성_).)",
                      "Count": 49,
                      "Expression": "Exhibition.원주전시장(한성_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "인천(바바리안)",
                      "DisplayValue": "인천(바바리안)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.인천(바바리안_).)",
                      "Count": 92,
                      "Expression": "Exhibition.인천(바바리안_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "인천(아주네트웍스)",
                      "DisplayValue": "인천(아주네트웍스)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.인천(아주네트웍스_).)",
                      "Count": 1,
                      "Expression": "Exhibition.인천(아주네트웍스_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "인천(한성)",
                      "DisplayValue": "인천(한성)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.인천(한성_).)",
                      "Count": 49,
                      "Expression": "Exhibition.인천(한성_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "인천전시장",
                      "DisplayValue": "인천전시장",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.인천전시장.)",
                      "Count": 6,
                      "Expression": "Exhibition.인천전시장.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "장한평(천우모터스)",
                      "DisplayValue": "장한평(천우모터스)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.장한평(천우모터스_).)",
                      "Count": 25,
                      "Expression": "Exhibition.장한평(천우모터스_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "전주(내쇼날)",
                      "DisplayValue": "전주(내쇼날)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.전주(내쇼날_).)",
                      "Count": 40,
                      "Expression": "Exhibition.전주(내쇼날_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "전주(중산모터스)",
                      "DisplayValue": "전주(중산모터스)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.전주(중산모터스_).)",
                      "Count": 7,
                      "Expression": "Exhibition.전주(중산모터스_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "전주(진모터스)",
                      "DisplayValue": "전주(진모터스)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.전주(진모터스_).)",
                      "Count": 25,
                      "Expression": "Exhibition.전주(진모터스_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "제주(케이씨씨오토)",
                      "DisplayValue": "제주(케이씨씨오토)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.제주(케이씨씨오토_).)",
                      "Count": 5,
                      "Expression": "Exhibition.제주(케이씨씨오토_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "창원(경남자동차)",
                      "DisplayValue": "창원(경남자동차)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.창원(경남자동차_).)",
                      "Count": 26,
                      "Expression": "Exhibition.창원(경남자동차_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "창원(동성)",
                      "DisplayValue": "창원(동성)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.창원(동성_).)",
                      "Count": 42,
                      "Expression": "Exhibition.창원(동성_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "천안(더클래스효성)",
                      "DisplayValue": "천안(더클래스효성)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.천안(더클래스효성_).)",
                      "Count": 69,
                      "Expression": "Exhibition.천안(더클래스효성_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "천안(삼천리)",
                      "DisplayValue": "천안(삼천리)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.천안(삼천리_).)",
                      "Count": 51,
                      "Expression": "Exhibition.천안(삼천리_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "청주(아우토반브이에이지)",
                      "DisplayValue": "청주(아우토반브이에이지)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.청주(아우토반브이에이지_).)",
                      "Count": 2,
                      "Expression": "Exhibition.청주(아우토반브이에이지_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "평택(내쇼날)",
                      "DisplayValue": "평택(내쇼날)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.평택(내쇼날_).)",
                      "Count": 21,
                      "Expression": "Exhibition.평택(내쇼날_).",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "하남(더클래스효성)",
                      "DisplayValue": "하남(더클래스효성)",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Exhibition.하남(더클래스효성_).)",
                      "Count": 43,
                      "Expression": "Exhibition.하남(더클래스효성_).",
                      "Metadata": {}
                  }
              ],
              "Metadata": {},
              "Name": "Exhibition",
              "DisplayName": "전시장",
              "Type": "Aspect"
          },
          {
              "IsSelected": false,
              "PlaceholderExpression": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.(<!>))",
              "MultiSelectMode": "Or",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "경기 SAC",
                      "DisplayValue": "경기 SAC",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.DealerShipNm.경기 SAC.)",
                      "Count": 3489,
                      "Expression": "DealerShipNm.경기 SAC.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "경기 SK V1모터스",
                      "DisplayValue": "경기 SK V1모터스",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.DealerShipNm.경기 SK V1모터스.)",
                      "Count": 8037,
                      "Expression": "DealerShipNm.경기 SK V1모터스.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "경기 경기매매단지",
                      "DisplayValue": "경기 경기매매단지",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.DealerShipNm.경기 경기매매단지.)",
                      "Count": 2059,
                      "Expression": "DealerShipNm.경기 경기매매단지.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "경기 김포 국민차매매단지",
                      "DisplayValue": "경기 김포 국민차매매단지",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.DealerShipNm.경기 김포 국민차매매단지.)",
                      "Count": 3036,
                      "Expression": "DealerShipNm.경기 김포 국민차매매단지.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "경기 도이치오토월드",
                      "DisplayValue": "경기 도이치오토월드",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.DealerShipNm.경기 도이치오토월드.)",
                      "Count": 10344,
                      "Expression": "DealerShipNm.경기 도이치오토월드.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "경기 라성단지",
                      "DisplayValue": "경기 라성단지",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.DealerShipNm.경기 라성단지.)",
                      "Count": 887,
                      "Expression": "DealerShipNm.경기 라성단지.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "경기 마트단지",
                      "DisplayValue": "경기 마트단지",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.DealerShipNm.경기 마트단지.)",
                      "Count": 1787,
                      "Expression": "DealerShipNm.경기 마트단지.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "경기 오토돔",
                      "DisplayValue": "경기 오토돔",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.DealerShipNm.경기 오토돔.)",
                      "Count": 2696,
                      "Expression": "DealerShipNm.경기 오토돔.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "경기 오토허브",
                      "DisplayValue": "경기 오토허브",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.DealerShipNm.경기 오토허브.)",
                      "Count": 3725,
                      "Expression": "DealerShipNm.경기 오토허브.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "경기 일산풍동오토갤러리",
                      "DisplayValue": "경기 일산풍동오토갤러리",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.DealerShipNm.경기 일산풍동오토갤러리.)",
                      "Count": 152,
                      "Expression": "DealerShipNm.경기 일산풍동오토갤러리.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "경남 KC월드카프라자",
                      "DisplayValue": "경남 KC월드카프라자",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.DealerShipNm.경남 KC월드카프라자.)",
                      "Count": 861,
                      "Expression": "DealerShipNm.경남 KC월드카프라자.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "대구 오토월드",
                      "DisplayValue": "대구 오토월드",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.DealerShipNm.대구 오토월드.)",
                      "Count": 1220,
                      "Expression": "DealerShipNm.대구 오토월드.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "부산 1001",
                      "DisplayValue": "부산 1001",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.DealerShipNm.부산 1001.)",
                      "Count": 297,
                      "Expression": "DealerShipNm.부산 1001.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "부산 KC오토월드",
                      "DisplayValue": "부산 KC오토월드",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.DealerShipNm.부산 KC오토월드.)",
                      "Count": 400,
                      "Expression": "DealerShipNm.부산 KC오토월드.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "부산 반여강변 매매단지",
                      "DisplayValue": "부산 반여강변 매매단지",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.DealerShipNm.부산 반여강변 매매단지.)",
                      "Count": 1037,
                      "Expression": "DealerShipNm.부산 반여강변 매매단지.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "부산 부산감만단지",
                      "DisplayValue": "부산 부산감만단지",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.DealerShipNm.부산 부산감만단지.)",
                      "Count": 801,
                      "Expression": "DealerShipNm.부산 부산감만단지.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "부산 사직오토랜드",
                      "DisplayValue": "부산 사직오토랜드",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.DealerShipNm.부산 사직오토랜드.)",
                      "Count": 2750,
                      "Expression": "DealerShipNm.부산 사직오토랜드.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "인천 엠파크타워",
                      "DisplayValue": "인천 엠파크타워",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.DealerShipNm.인천 엠파크타워.)",
                      "Count": 1775,
                      "Expression": "DealerShipNm.인천 엠파크타워.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "인천 엠파크허브",
                      "DisplayValue": "인천 엠파크허브",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.DealerShipNm.인천 엠파크허브.)",
                      "Count": 2575,
                      "Expression": "DealerShipNm.인천 엠파크허브.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "인천 오토드림",
                      "DisplayValue": "인천 오토드림",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.DealerShipNm.인천 오토드림.)",
                      "Count": 41,
                      "Expression": "DealerShipNm.인천 오토드림.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "인천 주안매매단지",
                      "DisplayValue": "인천 주안매매단지",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.DealerShipNm.인천 주안매매단지.)",
                      "Count": 187,
                      "Expression": "DealerShipNm.인천 주안매매단지.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "인천 청라 오토플러스",
                      "DisplayValue": "인천 청라 오토플러스",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.DealerShipNm.인천 청라 오토플러스.)",
                      "Count": 468,
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
              "PlaceholderExpression": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.(<!>))",
              "MultiSelectMode": "None",
              "RemoveAction": "",
              "Facets": [
                  {
                      "IsSelected": false,
                      "Value": "ORIGINAL",
                      "DisplayValue": "ORIGINAL",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.ServiceCopyCar.ORIGINAL.)",
                      "Count": 114545,
                      "Expression": "ServiceCopyCar.ORIGINAL.",
                      "Metadata": {}
                  },
                  {
                      "IsSelected": false,
                      "Value": "DUPLICATION",
                      "DisplayValue": "DUPLICATION",
                      "Action": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.ServiceCopyCar.DUPLICATION.)",
                      "Count": 19438,
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
              "QueryWithPlaceholder": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Year.range(<!lower>..<!upper>).)",
              "IsSelected": false,
              "Name": "Year",
              "DisplayName": "연식",
              "Type": "RangeAction"
          },
          {
              "LowerPlaceholder": "<!lower>",
              "UpperPlaceholder": "<!upper>",
              "QueryWithPlaceholder": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Price.range(<!lower>..<!upper>).)",
              "IsSelected": false,
              "Name": "Price",
              "DisplayName": "가격",
              "Type": "RangeAction"
          },
          {
              "LowerPlaceholder": "<!lower>",
              "UpperPlaceholder": "<!upper>",
              "QueryWithPlaceholder": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Mileage.range(<!lower>..<!upper>).)",
              "IsSelected": false,
              "Name": "Mileage",
              "DisplayName": "주행거리",
              "Type": "RangeAction"
          },
          {
              "LowerPlaceholder": "<!lower>",
              "UpperPlaceholder": "<!upper>",
              "QueryWithPlaceholder": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.AcceptanceCharge.range(<!lower>..<!upper>).)",
              "IsSelected": false,
              "Name": "AcceptanceCharge",
              "DisplayName": "인수비용",
              "Type": "RangeAction"
          },
          {
              "LowerPlaceholder": "<!lower>",
              "UpperPlaceholder": "<!upper>",
              "QueryWithPlaceholder": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.MonthLeasePrice.range(<!lower>..<!upper>).)",
              "IsSelected": false,
              "Name": "MonthLeasePrice",
              "DisplayName": "월리스료",
              "Type": "RangeAction"
          },
          {
              "LowerPlaceholder": "<!lower>",
              "UpperPlaceholder": "<!upper>",
              "QueryWithPlaceholder": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.MonthLeaseRest.range(<!lower>..<!upper>).)",
              "IsSelected": false,
              "Name": "MonthLeaseRest",
              "DisplayName": "잔여개월",
              "Type": "RangeAction"
          },
          {
              "LowerPlaceholder": "<!lower>",
              "UpperPlaceholder": "<!upper>",
              "QueryWithPlaceholder": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.CreatedDate.range(<!lower>..<!upper>).)",
              "IsSelected": false,
              "Name": "CreatedDate",
              "DisplayName": "등록일자",
              "Type": "RangeAction"
          },
          {
              "Placeholder": "<!>",
              "QueryWithPlaceholder": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Simple.keyword(<!>).)",
              "IsSelected": false,
              "Name": "Simple",
              "DisplayName": "Simple",
              "Type": "KeywordAction"
          },
          {
              "LatitudePlaceholder": "<!lat>",
              "LongitudePlaceholder": "<!lon>",
              "DistanceInKmsPlaceholder": "<!distInKms>",
              "QueryWithPlaceholder": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Location.location(<!lat>,<!lon>x<!distInKms>km).)",
              "IsSelected": false,
              "Name": "Location",
              "DisplayName": "Location",
              "Type": "LocationAction"
          },
          {
              "Placeholder": "<!>",
              "QueryWithPlaceholder": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.MetaData.custom(<!>).)",
              "IsSelected": false,
              "Name": "MetaData",
              "DisplayName": "MetaData",
              "Type": "CustomIndexAction"
          },
          {
              "Placeholder": "<!>",
              "QueryWithPlaceholder": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.Plate.<!>.)",
              "IsSelected": false,
              "Name": "Plate",
              "DisplayName": "Plate",
              "Type": "RefinementAction"
          },
          {
              "Placeholder": "<!>",
              "QueryWithPlaceholder": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.PlateRegistrationNumber.<!>.)",
              "IsSelected": false,
              "Name": "PlateRegistrationNumber",
              "DisplayName": "PlateRegistrationNumber",
              "Type": "RefinementAction"
          },
          {
              "Placeholder": "<!>",
              "QueryWithPlaceholder": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.DealerName.<!>.)",
              "IsSelected": false,
              "Name": "DealerName",
              "DisplayName": "DealerName",
              "Type": "RefinementAction"
          },
          {
              "Placeholder": "<!>",
              "QueryWithPlaceholder": "(And.Hidden.N._.(Or.CarType.Y._.CarType.N.)_.UserId.<!>.)",
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
              "RemoveAction": "(Or.CarType.Y._.CarType.N.)"
          },
          {
              "Aspect": "CarType",
              "AspectDisplay": "국산여부",
              "Facet": "Y",
              "FacetDisplay": "Y",
              "Children": [],
              "Type": "FacetBreadCrumb",
              "RemoveAction": "(And.Hidden.N._.CarType.N.)"
          },
          {
              "Aspect": "CarType",
              "AspectDisplay": "국산여부",
              "Facet": "N",
              "FacetDisplay": "N",
              "Children": [],
              "Type": "FacetBreadCrumb",
              "RemoveAction": "(And.Hidden.N._.CarType.Y.)"
          }
      ]
  }
}