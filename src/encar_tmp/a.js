{
    "Count": 9224,
    "iNav": {
        "BreadCrumbs": [
            {
                "Aspect": "Hidden",
                "AspectDisplay": "숨김데이터",
                "Children": [],
                "Facet": "N",
                "FacetDisplay": "N",
                "RemoveAction": "(C.CarType.N._.Manufacturer.BMW.)",
                "Type": "FacetBreadCrumb"
            },
            {
                "Aspect": "CarType",
                "AspectDisplay": "국산여부",
                "Children": [
                    {
                        "Aspect": "Manufacturer",
                        "AspectDisplay": "제조사",
                        "Children": [],
                        "Facet": "BMW",
                        "FacetDisplay": "BMW",
                        "RemoveAction": "(And.Hidden.N._.CarType.N.)",
                        "Type": "FacetBreadCrumb"
                    }
                ],
                "Facet": "N",
                "FacetDisplay": "N",
                "RemoveAction": "Hidden.N.",
                "Type": "FacetBreadCrumb"
            }
        ],
        "Nodes": [
            {
                "DisplayName": "숨김데이터",
                "Facets": [
                    {
                        "Action": "(C.CarType.N._.Manufacturer.BMW.)",
                        "Count": 9224,
                        "DisplayValue": "N",
                        "Expression": "Hidden.N.",
                        "IsSelected": true,
                        "Metadata": {},
                        "Value": "N"
                    },
                    {
                        "Action": "(And.(C.CarType.N._.Manufacturer.BMW.)_.Hidden.Y.)",
                        "Count": 901,
                        "DisplayValue": "Y",
                        "Expression": "Hidden.Y.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "Y"
                    }
                ],
                "IsSelected": true,
                "Metadata": {},
                "MultiSelectMode": "None",
                "Name": "Hidden",
                "PlaceholderExpression": "(And.(C.CarType.N._.Manufacturer.BMW.)_.(<!>))",
                "RemoveAction": "(C.CarType.N._.Manufacturer.BMW.)",
                "Type": "Aspect"
            },
            {
                "DisplayName": "국산여부",
                "Facets": [
                    {
                        "Action": "Hidden.N.",
                        "Count": 42606,
                        "DisplayValue": "N",
                        "Expression": "(C.CarType.N._.Manufacturer.BMW.)",
                        "IsSelected": true,
                        "Metadata": {},
                        "Refinements": {
                            "BreadCrumbs": [
                                {
                                    "Aspect": "Manufacturer",
                                    "AspectDisplay": "제조사",
                                    "Children": [],
                                    "Facet": "BMW",
                                    "FacetDisplay": "BMW",
                                    "RemoveAction": "(And.Hidden.N._.CarType.N.)",
                                    "Type": "FacetBreadCrumb"
                                }
                            ],
                            "Nodes": [
                                {
                                    "DisplayName": "제조사",
                                    "Facets": [
                                        {
                                            "Action": "(And.Hidden.N._.CarType.N.)",
                                            "Count": 9224,
                                            "DisplayValue": "BMW",
                                            "Expression": "Manufacturer.BMW.",
                                            "IsSelected": true,
                                            "Metadata": {
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
                                                ],
                                                "Code": [
                                                    "012"
                                                ],
                                                "EngName": [
                                                    "BMW"
                                                ],
                                                "Expression": [
                                                    "GreenType"
                                                ],
                                                "Ordering": [
                                                    110
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": 17015,
                                                        "Min": 86
                                                    }
                                                ]
                                            },
                                            "Refinements": {
                                                "BreadCrumbs": [],
                                                "Nodes": [
                                                    {
                                                        "DisplayName": "모델그룹",
                                                        "Facets": [
                                                            {
                                                                "Action": "(And.Hidden.N._.(C.CarType.N._.(C.Manufacturer.BMW._.ModelGroup.1시리즈.)))",
                                                                "Count": 285,
                                                                "DisplayValue": "1시리즈",
                                                                "Expression": "ModelGroup.1시리즈.",
                                                                "IsSelected": false,
                                                                "Metadata": {
                                                                    "Category": [
                                                                        [
                                                                            "소형차",
                                                                            "스포츠카"
                                                                        ]
                                                                    ],
                                                                    "Code": [
                                                                        "001"
                                                                    ],
                                                                    "EngName": [
                                                                        "1-Series"
                                                                    ],
                                                                    "Ordering": [
                                                                        0
                                                                    ],
                                                                    "Price": [
                                                                        {
                                                                            "Max": 4755,
                                                                            "Min": 566
                                                                        }
                                                                    ]
                                                                },
                                                                "Value": "1시리즈"
                                                            },
                                                            {
                                                                "Action": "(And.Hidden.N._.(C.CarType.N._.(C.Manufacturer.BMW._.ModelGroup.2시리즈.)))",
                                                                "Count": 168,
                                                                "DisplayValue": "2시리즈",
                                                                "Expression": "ModelGroup.2시리즈.",
                                                                "IsSelected": false,
                                                                "Metadata": {
                                                                    "Category": [
                                                                        [
                                                                            "소형차",
                                                                            "스포츠카"
                                                                        ]
                                                                    ],
                                                                    "Code": [
                                                                        "018"
                                                                    ],
                                                                    "EngName": [
                                                                        "2-Series"
                                                                    ],
                                                                    "Ordering": [
                                                                        1
                                                                    ],
                                                                    "Price": [
                                                                        {
                                                                            "Max": 5603,
                                                                            "Min": 926
                                                                        }
                                                                    ]
                                                                },
                                                                "Value": "2시리즈"
                                                            },
                                                            {
                                                                "Action": "(And.Hidden.N._.(C.CarType.N._.(C.Manufacturer.BMW._.ModelGroup.3시리즈.)))",
                                                                "Count": 1162,
                                                                "DisplayValue": "3시리즈",
                                                                "Expression": "ModelGroup.3시리즈.",
                                                                "IsSelected": false,
                                                                "Metadata": {
                                                                    "Category": [
                                                                        [
                                                                            "준중형차"
                                                                        ]
                                                                    ],
                                                                    "Code": [
                                                                        "002"
                                                                    ],
                                                                    "EngName": [
                                                                        "3-Series"
                                                                    ],
                                                                    "Ordering": [
                                                                        2
                                                                    ],
                                                                    "Price": [
                                                                        {
                                                                            "Max": 7239,
                                                                            "Min": 238
                                                                        }
                                                                    ]
                                                                },
                                                                "Value": "3시리즈"
                                                            },
                                                            {
                                                                "Action": "(And.Hidden.N._.(C.CarType.N._.(C.Manufacturer.BMW._.ModelGroup.4시리즈.)))",
                                                                "Count": 459,
                                                                "DisplayValue": "4시리즈",
                                                                "Expression": "ModelGroup.4시리즈.",
                                                                "IsSelected": false,
                                                                "Metadata": {
                                                                    "Category": [
                                                                        [
                                                                            "스포츠카"
                                                                        ]
                                                                    ],
                                                                    "Code": [
                                                                        "017"
                                                                    ],
                                                                    "EngName": [
                                                                        "4-Series"
                                                                    ],
                                                                    "Ordering": [
                                                                        3
                                                                    ],
                                                                    "Price": [
                                                                        {
                                                                            "Max": 8219,
                                                                            "Min": 1160
                                                                        }
                                                                    ]
                                                                },
                                                                "Value": "4시리즈"
                                                            },
                                                            {
                                                                "Action": "(And.Hidden.N._.(C.CarType.N._.(C.Manufacturer.BMW._.ModelGroup.5시리즈.)))",
                                                                "Count": 2566,
                                                                "DisplayValue": "5시리즈",
                                                                "Expression": "ModelGroup.5시리즈.",
                                                                "IsSelected": false,
                                                                "Metadata": {
                                                                    "Category": [
                                                                        [
                                                                            "중형차"
                                                                        ]
                                                                    ],
                                                                    "Code": [
                                                                        "003"
                                                                    ],
                                                                    "EngName": [
                                                                        "5-Series"
                                                                    ],
                                                                    "Ordering": [
                                                                        4
                                                                    ],
                                                                    "Price": [
                                                                        {
                                                                            "Max": 9565,
                                                                            "Min": 313
                                                                        }
                                                                    ]
                                                                },
                                                                "Value": "5시리즈"
                                                            },
                                                            {
                                                                "Action": "(And.Hidden.N._.(C.CarType.N._.(C.Manufacturer.BMW._.ModelGroup.6시리즈.)))",
                                                                "Count": 141,
                                                                "DisplayValue": "6시리즈",
                                                                "Expression": "ModelGroup.6시리즈.",
                                                                "IsSelected": false,
                                                                "Metadata": {
                                                                    "Category": [
                                                                        [
                                                                            "스포츠카"
                                                                        ]
                                                                    ],
                                                                    "Code": [
                                                                        "004"
                                                                    ],
                                                                    "EngName": [
                                                                        "6-Series"
                                                                    ],
                                                                    "Ordering": [
                                                                        5
                                                                    ],
                                                                    "Price": [
                                                                        {
                                                                            "Max": 4006,
                                                                            "Min": 997
                                                                        }
                                                                    ]
                                                                },
                                                                "Value": "6시리즈"
                                                            },
                                                            {
                                                                "Action": "(And.Hidden.N._.(C.CarType.N._.(C.Manufacturer.BMW._.ModelGroup.7시리즈.)))",
                                                                "Count": 875,
                                                                "DisplayValue": "7시리즈",
                                                                "Expression": "ModelGroup.7시리즈.",
                                                                "IsSelected": false,
                                                                "Metadata": {
                                                                    "Category": [
                                                                        [
                                                                            "대형차"
                                                                        ]
                                                                    ],
                                                                    "Code": [
                                                                        "005"
                                                                    ],
                                                                    "EngName": [
                                                                        "7-Series"
                                                                    ],
                                                                    "Ordering": [
                                                                        6
                                                                    ],
                                                                    "Price": [
                                                                        {
                                                                            "Max": 14834,
                                                                            "Min": 86
                                                                        }
                                                                    ]
                                                                },
                                                                "Value": "7시리즈"
                                                            },
                                                            {
                                                                "Action": "(And.Hidden.N._.(C.CarType.N._.(C.Manufacturer.BMW._.ModelGroup.8시리즈.)))",
                                                                "Count": 58,
                                                                "DisplayValue": "8시리즈",
                                                                "Expression": "ModelGroup.8시리즈.",
                                                                "IsSelected": false,
                                                                "Metadata": {
                                                                    "Category": [
                                                                        [
                                                                            "스포츠카"
                                                                        ]
                                                                    ],
                                                                    "Code": [
                                                                        "006"
                                                                    ],
                                                                    "EngName": [
                                                                        "8-Series"
                                                                    ],
                                                                    "Ordering": [
                                                                        7
                                                                    ],
                                                                    "Price": [
                                                                        {
                                                                            "Max": 12978,
                                                                            "Min": 6392
                                                                        }
                                                                    ]
                                                                },
                                                                "Value": "8시리즈"
                                                            },
                                                            {
                                                                "Action": "(And.Hidden.N._.(C.CarType.N._.(C.Manufacturer.BMW._.ModelGroup.그란투리스모 (GT_).)))",
                                                                "Count": 558,
                                                                "DisplayValue": "그란투리스모 (GT)",
                                                                "Expression": "ModelGroup.그란투리스모 (GT_).",
                                                                "IsSelected": false,
                                                                "Metadata": {
                                                                    "Category": [
                                                                        [
                                                                            "대형차",
                                                                            "준중형차",
                                                                            "중형차"
                                                                        ]
                                                                    ],
                                                                    "Code": [
                                                                        "015"
                                                                    ],
                                                                    "EngName": [
                                                                        "Gran Turismo"
                                                                    ],
                                                                    "Ordering": [
                                                                        8
                                                                    ],
                                                                    "Price": [
                                                                        {
                                                                            "Max": 8918,
                                                                            "Min": 876
                                                                        }
                                                                    ]
                                                                },
                                                                "Value": "그란투리스모 (GT)"
                                                            },
                                                            {
                                                                "Action": "(And.Hidden.N._.(C.CarType.N._.(C.Manufacturer.BMW._.ModelGroup.1M.)))",
                                                                "Count": 5,
                                                                "DisplayValue": "1M",
                                                                "Expression": "ModelGroup.1M.",
                                                                "IsSelected": false,
                                                                "Metadata": {
                                                                    "Category": [
                                                                        [
                                                                            "스포츠카"
                                                                        ]
                                                                    ],
                                                                    "Code": [
                                                                        "022"
                                                                    ],
                                                                    "EngName": [
                                                                        "1M"
                                                                    ],
                                                                    "Ordering": [
                                                                        9
                                                                    ],
                                                                    "Price": [
                                                                        {
                                                                            "Max": null,
                                                                            "Min": null
                                                                        }
                                                                    ]
                                                                },
                                                                "Value": "1M"
                                                            },
                                                            {
                                                                "Action": "(And.Hidden.N._.(C.CarType.N._.(C.Manufacturer.BMW._.ModelGroup.M2.)))",
                                                                "Count": 89,
                                                                "DisplayValue": "M2",
                                                                "Expression": "ModelGroup.M2.",
                                                                "IsSelected": false,
                                                                "Metadata": {
                                                                    "Category": [
                                                                        [
                                                                            "스포츠카"
                                                                        ]
                                                                    ],
                                                                    "Code": [
                                                                        "023"
                                                                    ],
                                                                    "EngName": [
                                                                        "M2"
                                                                    ],
                                                                    "Ordering": [
                                                                        10
                                                                    ],
                                                                    "Price": [
                                                                        {
                                                                            "Max": 5730,
                                                                            "Min": 3136
                                                                        }
                                                                    ]
                                                                },
                                                                "Value": "M2"
                                                            },
                                                            {
                                                                "Action": "(And.Hidden.N._.(C.CarType.N._.(C.Manufacturer.BMW._.ModelGroup.M3.)))",
                                                                "Count": 116,
                                                                "DisplayValue": "M3",
                                                                "Expression": "ModelGroup.M3.",
                                                                "IsSelected": false,
                                                                "Metadata": {
                                                                    "Category": [
                                                                        [
                                                                            "스포츠카"
                                                                        ]
                                                                    ],
                                                                    "Code": [
                                                                        "024"
                                                                    ],
                                                                    "EngName": [
                                                                        "M3"
                                                                    ],
                                                                    "Ordering": [
                                                                        11
                                                                    ],
                                                                    "Price": [
                                                                        {
                                                                            "Max": 10320,
                                                                            "Min": 687
                                                                        }
                                                                    ]
                                                                },
                                                                "Value": "M3"
                                                            },
                                                            {
                                                                "Action": "(And.Hidden.N._.(C.CarType.N._.(C.Manufacturer.BMW._.ModelGroup.M4.)))",
                                                                "Count": 147,
                                                                "DisplayValue": "M4",
                                                                "Expression": "ModelGroup.M4.",
                                                                "IsSelected": false,
                                                                "Metadata": {
                                                                    "Category": [
                                                                        [
                                                                            "스포츠카"
                                                                        ]
                                                                    ],
                                                                    "Code": [
                                                                        "025"
                                                                    ],
                                                                    "EngName": [
                                                                        "M4"
                                                                    ],
                                                                    "Ordering": [
                                                                        12
                                                                    ],
                                                                    "Price": [
                                                                        {
                                                                            "Max": 12419,
                                                                            "Min": 3226
                                                                        }
                                                                    ]
                                                                },
                                                                "Value": "M4"
                                                            },
                                                            {
                                                                "Action": "(And.Hidden.N._.(C.CarType.N._.(C.Manufacturer.BMW._.ModelGroup.M5.)))",
                                                                "Count": 102,
                                                                "DisplayValue": "M5",
                                                                "Expression": "ModelGroup.M5.",
                                                                "IsSelected": false,
                                                                "Metadata": {
                                                                    "Category": [
                                                                        [
                                                                            "스포츠카"
                                                                        ]
                                                                    ],
                                                                    "Code": [
                                                                        "026"
                                                                    ],
                                                                    "EngName": [
                                                                        "M5"
                                                                    ],
                                                                    "Ordering": [
                                                                        13
                                                                    ],
                                                                    "Price": [
                                                                        {
                                                                            "Max": 13897,
                                                                            "Min": 107
                                                                        }
                                                                    ]
                                                                },
                                                                "Value": "M5"
                                                            },
                                                            {
                                                                "Action": "(And.Hidden.N._.(C.CarType.N._.(C.Manufacturer.BMW._.ModelGroup.M6.)))",
                                                                "Count": 22,
                                                                "DisplayValue": "M6",
                                                                "Expression": "ModelGroup.M6.",
                                                                "IsSelected": false,
                                                                "Metadata": {
                                                                    "Category": [
                                                                        [
                                                                            "스포츠카"
                                                                        ]
                                                                    ],
                                                                    "Code": [
                                                                        "027"
                                                                    ],
                                                                    "EngName": [
                                                                        "M6"
                                                                    ],
                                                                    "Ordering": [
                                                                        14
                                                                    ],
                                                                    "Price": [
                                                                        {
                                                                            "Max": 5364,
                                                                            "Min": 1841
                                                                        }
                                                                    ]
                                                                },
                                                                "Value": "M6"
                                                            },
                                                            {
                                                                "Action": "(And.Hidden.N._.(C.CarType.N._.(C.Manufacturer.BMW._.ModelGroup.M8.)))",
                                                                "Count": 12,
                                                                "DisplayValue": "M8",
                                                                "Expression": "ModelGroup.M8.",
                                                                "IsSelected": false,
                                                                "Metadata": {
                                                                    "Category": [
                                                                        [
                                                                            "스포츠카"
                                                                        ]
                                                                    ],
                                                                    "Code": [
                                                                        "035"
                                                                    ],
                                                                    "EngName": [
                                                                        "M8"
                                                                    ],
                                                                    "Ordering": [
                                                                        15
                                                                    ],
                                                                    "Price": [
                                                                        {
                                                                            "Max": 17015,
                                                                            "Min": 10576
                                                                        }
                                                                    ]
                                                                },
                                                                "Value": "M8"
                                                            },
                                                            {
                                                                "Action": "(And.Hidden.N._.(C.CarType.N._.(C.Manufacturer.BMW._.ModelGroup.X1.)))",
                                                                "Count": 145,
                                                                "DisplayValue": "X1",
                                                                "Expression": "ModelGroup.X1.",
                                                                "IsSelected": false,
                                                                "Metadata": {
                                                                    "Category": [
                                                                        [
                                                                            "SUV"
                                                                        ]
                                                                    ],
                                                                    "Code": [
                                                                        "014"
                                                                    ],
                                                                    "EngName": [
                                                                        "X1"
                                                                    ],
                                                                    "Ordering": [
                                                                        16
                                                                    ],
                                                                    "Price": [
                                                                        {
                                                                            "Max": 5144,
                                                                            "Min": 562
                                                                        }
                                                                    ]
                                                                },
                                                                "Value": "X1"
                                                            },
                                                            {
                                                                "Action": "(And.Hidden.N._.(C.CarType.N._.(C.Manufacturer.BMW._.ModelGroup.X2.)))",
                                                                "Count": 38,
                                                                "DisplayValue": "X2",
                                                                "Expression": "ModelGroup.X2.",
                                                                "IsSelected": false,
                                                                "Metadata": {
                                                                    "Category": [
                                                                        [
                                                                            "SUV"
                                                                        ]
                                                                    ],
                                                                    "Code": [
                                                                        "031"
                                                                    ],
                                                                    "EngName": [
                                                                        "X2 (F39)"
                                                                    ],
                                                                    "Ordering": [
                                                                        17
                                                                    ],
                                                                    "Price": [
                                                                        {
                                                                            "Max": 4423,
                                                                            "Min": 2502
                                                                        }
                                                                    ]
                                                                },
                                                                "Value": "X2"
                                                            },
                                                            {
                                                                "Action": "(And.Hidden.N._.(C.CarType.N._.(C.Manufacturer.BMW._.ModelGroup.X3.)))",
                                                                "Count": 316,
                                                                "DisplayValue": "X3",
                                                                "Expression": "ModelGroup.X3.",
                                                                "IsSelected": false,
                                                                "Metadata": {
                                                                    "Category": [
                                                                        [
                                                                            "SUV"
                                                                        ]
                                                                    ],
                                                                    "Code": [
                                                                        "007"
                                                                    ],
                                                                    "EngName": [
                                                                        "X3"
                                                                    ],
                                                                    "Ordering": [
                                                                        18
                                                                    ],
                                                                    "Price": [
                                                                        {
                                                                            "Max": 7639,
                                                                            "Min": 472
                                                                        }
                                                                    ]
                                                                },
                                                                "Value": "X3"
                                                            },
                                                            {
                                                                "Action": "(And.Hidden.N._.(C.CarType.N._.(C.Manufacturer.BMW._.ModelGroup.X4.)))",
                                                                "Count": 282,
                                                                "DisplayValue": "X4",
                                                                "Expression": "ModelGroup.X4.",
                                                                "IsSelected": false,
                                                                "Metadata": {
                                                                    "Category": [
                                                                        [
                                                                            "SUV"
                                                                        ]
                                                                    ],
                                                                    "Code": [
                                                                        "020"
                                                                    ],
                                                                    "EngName": [
                                                                        "X4"
                                                                    ],
                                                                    "Ordering": [
                                                                        19
                                                                    ],
                                                                    "Price": [
                                                                        {
                                                                            "Max": 7993,
                                                                            "Min": 2084
                                                                        }
                                                                    ]
                                                                },
                                                                "Value": "X4"
                                                            },
                                                            {
                                                                "Action": "(And.Hidden.N._.(C.CarType.N._.(C.Manufacturer.BMW._.ModelGroup.X5.)))",
                                                                "Count": 535,
                                                                "DisplayValue": "X5",
                                                                "Expression": "ModelGroup.X5.",
                                                                "IsSelected": false,
                                                                "Metadata": {
                                                                    "Category": [
                                                                        [
                                                                            "SUV"
                                                                        ]
                                                                    ],
                                                                    "Code": [
                                                                        "008"
                                                                    ],
                                                                    "EngName": [
                                                                        "X5"
                                                                    ],
                                                                    "Ordering": [
                                                                        20
                                                                    ],
                                                                    "Price": [
                                                                        {
                                                                            "Max": 12026,
                                                                            "Min": 484
                                                                        }
                                                                    ]
                                                                },
                                                                "Value": "X5"
                                                            },
                                                            {
                                                                "Action": "(And.Hidden.N._.(C.CarType.N._.(C.Manufacturer.BMW._.ModelGroup.X6.)))",
                                                                "Count": 422,
                                                                "DisplayValue": "X6",
                                                                "Expression": "ModelGroup.X6.",
                                                                "IsSelected": false,
                                                                "Metadata": {
                                                                    "Category": [
                                                                        [
                                                                            "SUV"
                                                                        ]
                                                                    ],
                                                                    "Code": [
                                                                        "011"
                                                                    ],
                                                                    "EngName": [
                                                                        "X6"
                                                                    ],
                                                                    "Ordering": [
                                                                        21
                                                                    ],
                                                                    "Price": [
                                                                        {
                                                                            "Max": 12652,
                                                                            "Min": 1146
                                                                        }
                                                                    ]
                                                                },
                                                                "Value": "X6"
                                                            },
                                                            {
                                                                "Action": "(And.Hidden.N._.(C.CarType.N._.(C.Manufacturer.BMW._.ModelGroup.X7.)))",
                                                                "Count": 237,
                                                                "DisplayValue": "X7",
                                                                "Expression": "ModelGroup.X7.",
                                                                "IsSelected": false,
                                                                "Metadata": {
                                                                    "Category": [
                                                                        [
                                                                            "SUV"
                                                                        ]
                                                                    ],
                                                                    "Code": [
                                                                        "032"
                                                                    ],
                                                                    "EngName": [
                                                                        "X7"
                                                                    ],
                                                                    "Ordering": [
                                                                        22
                                                                    ],
                                                                    "Price": [
                                                                        {
                                                                            "Max": 14696,
                                                                            "Min": 7892
                                                                        }
                                                                    ]
                                                                },
                                                                "Value": "X7"
                                                            },
                                                            {
                                                                "Action": "(And.Hidden.N._.(C.CarType.N._.(C.Manufacturer.BMW._.ModelGroup.X3M.)))",
                                                                "Count": 32,
                                                                "DisplayValue": "X3M",
                                                                "Expression": "ModelGroup.X3M.",
                                                                "IsSelected": false,
                                                                "Metadata": {
                                                                    "Category": [
                                                                        [
                                                                            "SUV"
                                                                        ]
                                                                    ],
                                                                    "Code": [
                                                                        "033"
                                                                    ],
                                                                    "EngName": [
                                                                        "X3M"
                                                                    ],
                                                                    "Ordering": [
                                                                        23
                                                                    ],
                                                                    "Price": [
                                                                        {
                                                                            "Max": 9352,
                                                                            "Min": 5769
                                                                        }
                                                                    ]
                                                                },
                                                                "Value": "X3M"
                                                            },
                                                            {
                                                                "Action": "(And.Hidden.N._.(C.CarType.N._.(C.Manufacturer.BMW._.ModelGroup.X4M.)))",
                                                                "Count": 18,
                                                                "DisplayValue": "X4M",
                                                                "Expression": "ModelGroup.X4M.",
                                                                "IsSelected": false,
                                                                "Metadata": {
                                                                    "Category": [
                                                                        [
                                                                            "SUV"
                                                                        ]
                                                                    ],
                                                                    "Code": [
                                                                        "034"
                                                                    ],
                                                                    "EngName": [
                                                                        "X4M"
                                                                    ],
                                                                    "Ordering": [
                                                                        24
                                                                    ],
                                                                    "Price": [
                                                                        {
                                                                            "Max": 9106,
                                                                            "Min": 5410
                                                                        }
                                                                    ]
                                                                },
                                                                "Value": "X4M"
                                                            },
                                                            {
                                                                "Action": "(And.Hidden.N._.(C.CarType.N._.(C.Manufacturer.BMW._.ModelGroup.X5M.)))",
                                                                "Count": 24,
                                                                "DisplayValue": "X5M",
                                                                "Expression": "ModelGroup.X5M.",
                                                                "IsSelected": false,
                                                                "Metadata": {
                                                                    "Category": [
                                                                        [
                                                                            "SUV"
                                                                        ]
                                                                    ],
                                                                    "Code": [
                                                                        "029"
                                                                    ],
                                                                    "EngName": [
                                                                        "X5M"
                                                                    ],
                                                                    "Ordering": [
                                                                        25
                                                                    ],
                                                                    "Price": [
                                                                        {
                                                                            "Max": 14761,
                                                                            "Min": 1118
                                                                        }
                                                                    ]
                                                                },
                                                                "Value": "X5M"
                                                            },
                                                            {
                                                                "Action": "(And.Hidden.N._.(C.CarType.N._.(C.Manufacturer.BMW._.ModelGroup.X6M.)))",
                                                                "Count": 34,
                                                                "DisplayValue": "X6M",
                                                                "Expression": "ModelGroup.X6M.",
                                                                "IsSelected": false,
                                                                "Metadata": {
                                                                    "Category": [
                                                                        [
                                                                            "SUV"
                                                                        ]
                                                                    ],
                                                                    "Code": [
                                                                        "030"
                                                                    ],
                                                                    "EngName": [
                                                                        "X6M"
                                                                    ],
                                                                    "Ordering": [
                                                                        26
                                                                    ],
                                                                    "Price": [
                                                                        {
                                                                            "Max": 14969,
                                                                            "Min": 2114
                                                                        }
                                                                    ]
                                                                },
                                                                "Value": "X6M"
                                                            },
                                                            {
                                                                "Action": "(And.Hidden.N._.(C.CarType.N._.(C.Manufacturer.BMW._.ModelGroup.XM.)))",
                                                                "Count": 3,
                                                                "DisplayValue": "XM",
                                                                "Expression": "ModelGroup.XM.",
                                                                "IsSelected": false,
                                                                "Metadata": {
                                                                    "Category": [
                                                                        [
                                                                            "SUV"
                                                                        ]
                                                                    ],
                                                                    "Code": [
                                                                        "041"
                                                                    ],
                                                                    "EngName": [
                                                                        "XM"
                                                                    ],
                                                                    "Ordering": [
                                                                        27
                                                                    ],
                                                                    "Price": [
                                                                        {
                                                                            "Max": null,
                                                                            "Min": null
                                                                        }
                                                                    ]
                                                                },
                                                                "Value": "XM"
                                                            },
                                                            {
                                                                "Action": "(And.Hidden.N._.(C.CarType.N._.(C.Manufacturer.BMW._.ModelGroup.Z3.)))",
                                                                "Count": 5,
                                                                "DisplayValue": "Z3",
                                                                "Expression": "ModelGroup.Z3.",
                                                                "IsSelected": false,
                                                                "Metadata": {
                                                                    "Category": [
                                                                        [
                                                                            "스포츠카"
                                                                        ]
                                                                    ],
                                                                    "Code": [
                                                                        "012"
                                                                    ],
                                                                    "EngName": [
                                                                        "Z3"
                                                                    ],
                                                                    "Ordering": [
                                                                        28
                                                                    ],
                                                                    "Price": [
                                                                        {
                                                                            "Max": null,
                                                                            "Min": null
                                                                        }
                                                                    ]
                                                                },
                                                                "Value": "Z3"
                                                            },
                                                            {
                                                                "Action": "(And.Hidden.N._.(C.CarType.N._.(C.Manufacturer.BMW._.ModelGroup.Z4.)))",
                                                                "Count": 151,
                                                                "DisplayValue": "Z4",
                                                                "Expression": "ModelGroup.Z4.",
                                                                "IsSelected": false,
                                                                "Metadata": {
                                                                    "Category": [
                                                                        [
                                                                            "스포츠카"
                                                                        ]
                                                                    ],
                                                                    "Code": [
                                                                        "009"
                                                                    ],
                                                                    "EngName": [
                                                                        "Z4"
                                                                    ],
                                                                    "Ordering": [
                                                                        29
                                                                    ],
                                                                    "Price": [
                                                                        {
                                                                            "Max": 8335,
                                                                            "Min": 814
                                                                        }
                                                                    ]
                                                                },
                                                                "Value": "Z4"
                                                            },
                                                            {
                                                                "Action": "(And.Hidden.N._.(C.CarType.N._.(C.Manufacturer.BMW._.ModelGroup.Z8.)))",
                                                                "Count": 0,
                                                                "DisplayValue": "Z8",
                                                                "Expression": "ModelGroup.Z8.",
                                                                "IsSelected": false,
                                                                "Metadata": {
                                                                    "Category": [
                                                                        [
                                                                            "스포츠카"
                                                                        ]
                                                                    ],
                                                                    "Code": [
                                                                        "013"
                                                                    ],
                                                                    "EngName": [
                                                                        "Z8"
                                                                    ],
                                                                    "Ordering": [
                                                                        30
                                                                    ],
                                                                    "Price": [
                                                                        {
                                                                            "Max": null,
                                                                            "Min": null
                                                                        }
                                                                    ]
                                                                },
                                                                "Value": "Z8"
                                                            },
                                                            {
                                                                "Action": "(And.Hidden.N._.(C.CarType.N._.(C.Manufacturer.BMW._.ModelGroup.M 쿠페/로드스터.)))",
                                                                "Count": 2,
                                                                "DisplayValue": "M 쿠페/로드스터",
                                                                "Expression": "ModelGroup.M 쿠페/로드스터.",
                                                                "IsSelected": false,
                                                                "Metadata": {
                                                                    "Category": [
                                                                        [
                                                                            "스포츠카"
                                                                        ]
                                                                    ],
                                                                    "Code": [
                                                                        "028"
                                                                    ],
                                                                    "EngName": [
                                                                        "M Coupe/Roadster"
                                                                    ],
                                                                    "Ordering": [
                                                                        31
                                                                    ],
                                                                    "Price": [
                                                                        {
                                                                            "Max": null,
                                                                            "Min": null
                                                                        }
                                                                    ]
                                                                },
                                                                "Value": "M 쿠페/로드스터"
                                                            },
                                                            {
                                                                "Action": "(And.Hidden.N._.(C.CarType.N._.(C.Manufacturer.BMW._.ModelGroup.i3.)))",
                                                                "Count": 52,
                                                                "DisplayValue": "i3",
                                                                "Expression": "ModelGroup.i3.",
                                                                "IsSelected": false,
                                                                "Metadata": {
                                                                    "Category": [
                                                                        [
                                                                            "소형차"
                                                                        ]
                                                                    ],
                                                                    "Code": [
                                                                        "019"
                                                                    ],
                                                                    "EngName": [
                                                                        "i3"
                                                                    ],
                                                                    "Ordering": [
                                                                        32
                                                                    ],
                                                                    "Price": [
                                                                        {
                                                                            "Max": 4115,
                                                                            "Min": 935
                                                                        }
                                                                    ]
                                                                },
                                                                "Value": "i3"
                                                            },
                                                            {
                                                                "Action": "(And.Hidden.N._.(C.CarType.N._.(C.Manufacturer.BMW._.ModelGroup.i4.)))",
                                                                "Count": 56,
                                                                "DisplayValue": "i4",
                                                                "Expression": "ModelGroup.i4.",
                                                                "IsSelected": false,
                                                                "Metadata": {
                                                                    "Category": [
                                                                        [
                                                                            "스포츠카"
                                                                        ]
                                                                    ],
                                                                    "Code": [
                                                                        "036"
                                                                    ],
                                                                    "EngName": [
                                                                        "i4"
                                                                    ],
                                                                    "Ordering": [
                                                                        33
                                                                    ],
                                                                    "Price": [
                                                                        {
                                                                            "Max": 7738,
                                                                            "Min": 5825
                                                                        }
                                                                    ]
                                                                },
                                                                "Value": "i4"
                                                            },
                                                            {
                                                                "Action": "(And.Hidden.N._.(C.CarType.N._.(C.Manufacturer.BMW._.ModelGroup.i7.)))",
                                                                "Count": 9,
                                                                "DisplayValue": "i7",
                                                                "Expression": "ModelGroup.i7.",
                                                                "IsSelected": false,
                                                                "Metadata": {
                                                                    "Category": [
                                                                        [
                                                                            "대형차"
                                                                        ]
                                                                    ],
                                                                    "Code": [
                                                                        "039"
                                                                    ],
                                                                    "EngName": [
                                                                        "i7"
                                                                    ],
                                                                    "Ordering": [
                                                                        34
                                                                    ],
                                                                    "Price": [
                                                                        {
                                                                            "Max": null,
                                                                            "Min": null
                                                                        }
                                                                    ]
                                                                },
                                                                "Value": "i7"
                                                            },
                                                            {
                                                                "Action": "(And.Hidden.N._.(C.CarType.N._.(C.Manufacturer.BMW._.ModelGroup.i8.)))",
                                                                "Count": 39,
                                                                "DisplayValue": "i8",
                                                                "Expression": "ModelGroup.i8.",
                                                                "IsSelected": false,
                                                                "Metadata": {
                                                                    "Category": [
                                                                        [
                                                                            "스포츠카"
                                                                        ]
                                                                    ],
                                                                    "Code": [
                                                                        "021"
                                                                    ],
                                                                    "EngName": [
                                                                        "i8"
                                                                    ],
                                                                    "Ordering": [
                                                                        35
                                                                    ],
                                                                    "Price": [
                                                                        {
                                                                            "Max": 14290,
                                                                            "Min": 7127
                                                                        }
                                                                    ]
                                                                },
                                                                "Value": "i8"
                                                            },
                                                            {
                                                                "Action": "(And.Hidden.N._.(C.CarType.N._.(C.Manufacturer.BMW._.ModelGroup.iX1.)))",
                                                                "Count": 1,
                                                                "DisplayValue": "iX1",
                                                                "Expression": "ModelGroup.iX1.",
                                                                "IsSelected": false,
                                                                "Metadata": {
                                                                    "Category": [
                                                                        [
                                                                            "SUV"
                                                                        ]
                                                                    ],
                                                                    "Code": [
                                                                        "040"
                                                                    ],
                                                                    "EngName": [
                                                                        "iX1"
                                                                    ],
                                                                    "Ordering": [
                                                                        36
                                                                    ],
                                                                    "Price": [
                                                                        {
                                                                            "Max": null,
                                                                            "Min": null
                                                                        }
                                                                    ]
                                                                },
                                                                "Value": "iX1"
                                                            },
                                                            {
                                                                "Action": "(And.Hidden.N._.(C.CarType.N._.(C.Manufacturer.BMW._.ModelGroup.iX3.)))",
                                                                "Count": 30,
                                                                "DisplayValue": "iX3",
                                                                "Expression": "ModelGroup.iX3.",
                                                                "IsSelected": false,
                                                                "Metadata": {
                                                                    "Category": [
                                                                        [
                                                                            "SUV"
                                                                        ]
                                                                    ],
                                                                    "Code": [
                                                                        "038"
                                                                    ],
                                                                    "EngName": [
                                                                        "iX3"
                                                                    ],
                                                                    "Ordering": [
                                                                        37
                                                                    ],
                                                                    "Price": [
                                                                        {
                                                                            "Max": 6705,
                                                                            "Min": 5369
                                                                        }
                                                                    ]
                                                                },
                                                                "Value": "iX3"
                                                            },
                                                            {
                                                                "Action": "(And.Hidden.N._.(C.CarType.N._.(C.Manufacturer.BMW._.ModelGroup.iX.)))",
                                                                "Count": 28,
                                                                "DisplayValue": "iX",
                                                                "Expression": "ModelGroup.iX.",
                                                                "IsSelected": false,
                                                                "Metadata": {
                                                                    "Category": [
                                                                        [
                                                                            "SUV"
                                                                        ]
                                                                    ],
                                                                    "Code": [
                                                                        "037"
                                                                    ],
                                                                    "EngName": [
                                                                        "iX"
                                                                    ],
                                                                    "Ordering": [
                                                                        38
                                                                    ],
                                                                    "Price": [
                                                                        {
                                                                            "Max": 13473,
                                                                            "Min": 9365
                                                                        }
                                                                    ]
                                                                },
                                                                "Value": "iX"
                                                            },
                                                            {
                                                                "Action": "(And.Hidden.N._.(C.CarType.N._.(C.Manufacturer.BMW._.ModelGroup.기타.)))",
                                                                "Count": 0,
                                                                "DisplayValue": "기타",
                                                                "Expression": "ModelGroup.기타.",
                                                                "IsSelected": false,
                                                                "Metadata": {
                                                                    "Category": [
                                                                        [
                                                                            "기타"
                                                                        ]
                                                                    ],
                                                                    "Code": [
                                                                        "016"
                                                                    ],
                                                                    "EngName": [
                                                                        "Others"
                                                                    ],
                                                                    "Ordering": [
                                                                        39
                                                                    ],
                                                                    "Price": [
                                                                        {
                                                                            "Max": null,
                                                                            "Min": null
                                                                        }
                                                                    ]
                                                                },
                                                                "Value": "기타"
                                                            }
                                                        ],
                                                        "IsSelected": false,
                                                        "Metadata": {},
                                                        "MultiSelectMode": "None",
                                                        "Name": "ModelGroup",
                                                        "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.N._.(C.Manufacturer.BMW._.(<!>))))",
                                                        "RemoveAction": "",
                                                        "Type": "Aspect"
                                                    }
                                                ]
                                            },
                                            "Value": "BMW"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.GMC.))",
                                            "Count": 23,
                                            "DisplayValue": "GMC",
                                            "Expression": "Manufacturer.GMC.",
                                            "IsSelected": false,
                                            "Metadata": {
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
                                                ],
                                                "Code": [
                                                    "056"
                                                ],
                                                "EngName": [
                                                    "GMC"
                                                ],
                                                "Ordering": [
                                                    130
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": null,
                                                        "Min": null
                                                    }
                                                ]
                                            },
                                            "Value": "GMC"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.닛산.))",
                                            "Count": 366,
                                            "DisplayValue": "닛산",
                                            "Expression": "Manufacturer.닛산.",
                                            "IsSelected": false,
                                            "Metadata": {
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
                                                ],
                                                "Code": [
                                                    "033"
                                                ],
                                                "EngName": [
                                                    "Nissan"
                                                ],
                                                "Expression": [
                                                    "GreenType"
                                                ],
                                                "Ordering": [
                                                    140
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": 8617,
                                                        "Min": 187
                                                    }
                                                ]
                                            },
                                            "Value": "닛산"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.다이하쯔.))",
                                            "Count": 23,
                                            "DisplayValue": "다이하쯔",
                                            "Expression": "Manufacturer.다이하쯔.",
                                            "IsSelected": false,
                                            "Metadata": {
                                                "CarType": [
                                                    "N"
                                                ],
                                                "Category": [
                                                    [
                                                        "SUV",
                                                        "경차",
                                                        "소형차"
                                                    ]
                                                ],
                                                "Code": [
                                                    "051"
                                                ],
                                                "EngName": [
                                                    "Daihatsu"
                                                ],
                                                "Ordering": [
                                                    150
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": null,
                                                        "Min": null
                                                    }
                                                ]
                                            },
                                            "Value": "다이하쯔"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.닷지.))",
                                            "Count": 99,
                                            "DisplayValue": "닷지",
                                            "Expression": "Manufacturer.닷지.",
                                            "IsSelected": false,
                                            "Metadata": {
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
                                                ],
                                                "Code": [
                                                    "034"
                                                ],
                                                "EngName": [
                                                    "Dodge"
                                                ],
                                                "Ordering": [
                                                    160
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": 725,
                                                        "Min": 232
                                                    }
                                                ]
                                            },
                                            "Value": "닷지"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.도요타.))",
                                            "Count": 596,
                                            "DisplayValue": "도요타",
                                            "Expression": "Manufacturer.도요타.",
                                            "IsSelected": false,
                                            "Metadata": {
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
                                                ],
                                                "Code": [
                                                    "031"
                                                ],
                                                "EngName": [
                                                    "Toyota"
                                                ],
                                                "Expression": [
                                                    "GreenType"
                                                ],
                                                "Ordering": [
                                                    170
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": 6403,
                                                        "Min": 251
                                                    }
                                                ]
                                            },
                                            "Value": "도요타"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.동풍소콘.))",
                                            "Count": 20,
                                            "DisplayValue": "동풍소콘",
                                            "Expression": "Manufacturer.동풍소콘.",
                                            "IsSelected": false,
                                            "Metadata": {
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
                                                ],
                                                "Code": [
                                                    "088"
                                                ],
                                                "EngName": [
                                                    "DFSK"
                                                ],
                                                "Ordering": [
                                                    175
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": 2009,
                                                        "Min": 1250
                                                    }
                                                ]
                                            },
                                            "Value": "동풍소콘"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.람보르기니.))",
                                            "Count": 190,
                                            "DisplayValue": "람보르기니",
                                            "Expression": "Manufacturer.람보르기니.",
                                            "IsSelected": false,
                                            "Metadata": {
                                                "CarType": [
                                                    "N"
                                                ],
                                                "Category": [
                                                    [
                                                        "SUV",
                                                        "스포츠카"
                                                    ]
                                                ],
                                                "Code": [
                                                    "049"
                                                ],
                                                "EngName": [
                                                    "Lamborghini"
                                                ],
                                                "Ordering": [
                                                    180
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": 65127,
                                                        "Min": 4787
                                                    }
                                                ]
                                            },
                                            "Value": "람보르기니"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.랜드로버.))",
                                            "Count": 1840,
                                            "DisplayValue": "랜드로버",
                                            "Expression": "Manufacturer.랜드로버.",
                                            "IsSelected": false,
                                            "Metadata": {
                                                "CarType": [
                                                    "N"
                                                ],
                                                "Category": [
                                                    [
                                                        "SUV",
                                                        "기타"
                                                    ]
                                                ],
                                                "Code": [
                                                    "020"
                                                ],
                                                "EngName": [
                                                    "Land Rover"
                                                ],
                                                "Expression": [
                                                    "GreenType"
                                                ],
                                                "Ordering": [
                                                    190
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": 19458,
                                                        "Min": 268
                                                    }
                                                ]
                                            },
                                            "Value": "랜드로버"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.렉서스.))",
                                            "Count": 988,
                                            "DisplayValue": "렉서스",
                                            "Expression": "Manufacturer.렉서스.",
                                            "IsSelected": false,
                                            "Metadata": {
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
                                                ],
                                                "Code": [
                                                    "035"
                                                ],
                                                "EngName": [
                                                    "Lexus"
                                                ],
                                                "Expression": [
                                                    "GreenType"
                                                ],
                                                "Ordering": [
                                                    200
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": 13785,
                                                        "Min": 82
                                                    }
                                                ]
                                            },
                                            "Value": "렉서스"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.MG로버.))",
                                            "Count": 0,
                                            "DisplayValue": "MG로버",
                                            "Expression": "Manufacturer.MG로버.",
                                            "IsSelected": false,
                                            "Metadata": {
                                                "CarType": [
                                                    "N"
                                                ],
                                                "Category": [
                                                    [
                                                        "대형차",
                                                        "소형차",
                                                        "스포츠카"
                                                    ]
                                                ],
                                                "Code": [
                                                    "055"
                                                ],
                                                "EngName": [
                                                    "MG Rover"
                                                ],
                                                "Ordering": [
                                                    210
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": null,
                                                        "Min": null
                                                    }
                                                ]
                                            },
                                            "Value": "MG로버"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.로터스.))",
                                            "Count": 7,
                                            "DisplayValue": "로터스",
                                            "Expression": "Manufacturer.로터스.",
                                            "IsSelected": false,
                                            "Metadata": {
                                                "CarType": [
                                                    "N"
                                                ],
                                                "Category": [
                                                    [
                                                        "기타",
                                                        "스포츠카"
                                                    ]
                                                ],
                                                "Code": [
                                                    "069"
                                                ],
                                                "EngName": [
                                                    "Lotus"
                                                ],
                                                "Ordering": [
                                                    220
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": null,
                                                        "Min": null
                                                    }
                                                ]
                                            },
                                            "Value": "로터스"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.롤스로이스.))",
                                            "Count": 134,
                                            "DisplayValue": "롤스로이스",
                                            "Expression": "Manufacturer.롤스로이스.",
                                            "IsSelected": false,
                                            "Metadata": {
                                                "CarType": [
                                                    "N"
                                                ],
                                                "Category": [
                                                    [
                                                        "SUV",
                                                        "대형차",
                                                        "스포츠카"
                                                    ]
                                                ],
                                                "Code": [
                                                    "047"
                                                ],
                                                "EngName": [
                                                    "Rolls-Royce"
                                                ],
                                                "Ordering": [
                                                    230
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": 42435,
                                                        "Min": 8184
                                                    }
                                                ]
                                            },
                                            "Value": "롤스로이스"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.르노.))",
                                            "Count": 1,
                                            "DisplayValue": "르노",
                                            "Expression": "Manufacturer.르노.",
                                            "IsSelected": false,
                                            "Metadata": {
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
                                                ],
                                                "Code": [
                                                    "078"
                                                ],
                                                "EngName": [
                                                    "Renault"
                                                ],
                                                "Ordering": [
                                                    240
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": null,
                                                        "Min": null
                                                    }
                                                ]
                                            },
                                            "Value": "르노"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.링컨.))",
                                            "Count": 404,
                                            "DisplayValue": "링컨",
                                            "Expression": "Manufacturer.링컨.",
                                            "IsSelected": false,
                                            "Metadata": {
                                                "CarType": [
                                                    "N"
                                                ],
                                                "Category": [
                                                    [
                                                        "SUV",
                                                        "기타",
                                                        "대형차"
                                                    ]
                                                ],
                                                "Code": [
                                                    "044"
                                                ],
                                                "EngName": [
                                                    "Lincoln"
                                                ],
                                                "Expression": [
                                                    "GreenType"
                                                ],
                                                "Ordering": [
                                                    250
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": 11664,
                                                        "Min": 116
                                                    }
                                                ]
                                            },
                                            "Value": "링컨"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.마세라티.))",
                                            "Count": 642,
                                            "DisplayValue": "마세라티",
                                            "Expression": "Manufacturer.마세라티.",
                                            "IsSelected": false,
                                            "Metadata": {
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
                                                ],
                                                "Code": [
                                                    "053"
                                                ],
                                                "EngName": [
                                                    "Maserati"
                                                ],
                                                "Ordering": [
                                                    260
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": 20244,
                                                        "Min": 103
                                                    }
                                                ]
                                            },
                                            "Value": "마세라티"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.마이바흐.))",
                                            "Count": 8,
                                            "DisplayValue": "마이바흐",
                                            "Expression": "Manufacturer.마이바흐.",
                                            "IsSelected": false,
                                            "Metadata": {
                                                "CarType": [
                                                    "N"
                                                ],
                                                "Category": [
                                                    [
                                                        "대형차"
                                                    ]
                                                ],
                                                "Code": [
                                                    "080"
                                                ],
                                                "EngName": [
                                                    "Maybach"
                                                ],
                                                "Ordering": [
                                                    270
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": null,
                                                        "Min": null
                                                    }
                                                ]
                                            },
                                            "Value": "마이바흐"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.마쯔다.))",
                                            "Count": 18,
                                            "DisplayValue": "마쯔다",
                                            "Expression": "Manufacturer.마쯔다.",
                                            "IsSelected": false,
                                            "Metadata": {
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
                                                ],
                                                "Code": [
                                                    "029"
                                                ],
                                                "EngName": [
                                                    "Mazda"
                                                ],
                                                "Ordering": [
                                                    280
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": null,
                                                        "Min": null
                                                    }
                                                ]
                                            },
                                            "Value": "마쯔다"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.맥라렌.))",
                                            "Count": 72,
                                            "DisplayValue": "맥라렌",
                                            "Expression": "Manufacturer.맥라렌.",
                                            "IsSelected": false,
                                            "Metadata": {
                                                "CarType": [
                                                    "N"
                                                ],
                                                "Category": [
                                                    [
                                                        "스포츠카"
                                                    ]
                                                ],
                                                "Code": [
                                                    "084"
                                                ],
                                                "EngName": [
                                                    "Mclaren"
                                                ],
                                                "Expression": [
                                                    "GreenType"
                                                ],
                                                "Ordering": [
                                                    300
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": 32738,
                                                        "Min": 8996
                                                    }
                                                ]
                                            },
                                            "Value": "맥라렌"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.머큐리.))",
                                            "Count": 0,
                                            "DisplayValue": "머큐리",
                                            "Expression": "Manufacturer.머큐리.",
                                            "IsSelected": false,
                                            "Metadata": {
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
                                                ],
                                                "Code": [
                                                    "036"
                                                ],
                                                "EngName": [
                                                    "Mercury"
                                                ],
                                                "Ordering": [
                                                    310
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": null,
                                                        "Min": null
                                                    }
                                                ]
                                            },
                                            "Value": "머큐리"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.미니.))",
                                            "Count": 2268,
                                            "DisplayValue": "미니",
                                            "Expression": "Manufacturer.미니.",
                                            "IsSelected": false,
                                            "Metadata": {
                                                "CarType": [
                                                    "N"
                                                ],
                                                "Category": [
                                                    [
                                                        "SUV",
                                                        "소형차",
                                                        "스포츠카"
                                                    ]
                                                ],
                                                "Code": [
                                                    "054"
                                                ],
                                                "EngName": [
                                                    "Mini"
                                                ],
                                                "Expression": [
                                                    "GreenType"
                                                ],
                                                "Ordering": [
                                                    320
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": 4779,
                                                        "Min": 131
                                                    }
                                                ]
                                            },
                                            "Value": "미니"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.미쯔비시.))",
                                            "Count": 25,
                                            "DisplayValue": "미쯔비시",
                                            "Expression": "Manufacturer.미쯔비시.",
                                            "IsSelected": false,
                                            "Metadata": {
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
                                                ],
                                                "Code": [
                                                    "030"
                                                ],
                                                "EngName": [
                                                    "Mitsubishi"
                                                ],
                                                "Ordering": [
                                                    330
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": 1720,
                                                        "Min": 351
                                                    }
                                                ]
                                            },
                                            "Value": "미쯔비시"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.미쯔오까.))",
                                            "Count": 2,
                                            "DisplayValue": "미쯔오까",
                                            "Expression": "Manufacturer.미쯔오까.",
                                            "IsSelected": false,
                                            "Metadata": {
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
                                                ],
                                                "Code": [
                                                    "059"
                                                ],
                                                "EngName": [
                                                    "Mitsuoka"
                                                ],
                                                "Ordering": [
                                                    340
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": null,
                                                        "Min": null
                                                    }
                                                ]
                                            },
                                            "Value": "미쯔오까"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.벤츠.))",
                                            "Count": 11138,
                                            "DisplayValue": "벤츠",
                                            "Expression": "Manufacturer.벤츠.",
                                            "IsSelected": false,
                                            "Metadata": {
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
                                                ],
                                                "Code": [
                                                    "013"
                                                ],
                                                "EngName": [
                                                    "Mercedes-Benz"
                                                ],
                                                "Expression": [
                                                    "GreenType"
                                                ],
                                                "Ordering": [
                                                    350
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": 61613,
                                                        "Min": 88
                                                    }
                                                ]
                                            },
                                            "Value": "벤츠"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.벤틀리.))",
                                            "Count": 316,
                                            "DisplayValue": "벤틀리",
                                            "Expression": "Manufacturer.벤틀리.",
                                            "IsSelected": false,
                                            "Metadata": {
                                                "CarType": [
                                                    "N"
                                                ],
                                                "Category": [
                                                    [
                                                        "SUV",
                                                        "대형차",
                                                        "스포츠카"
                                                    ]
                                                ],
                                                "Code": [
                                                    "050"
                                                ],
                                                "EngName": [
                                                    "Bentley"
                                                ],
                                                "Ordering": [
                                                    360
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": 30579,
                                                        "Min": 1766
                                                    }
                                                ]
                                            },
                                            "Value": "벤틀리"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.볼보.))",
                                            "Count": 788,
                                            "DisplayValue": "볼보",
                                            "Expression": "Manufacturer.볼보.",
                                            "IsSelected": false,
                                            "Metadata": {
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
                                                ],
                                                "Code": [
                                                    "017"
                                                ],
                                                "EngName": [
                                                    "Volvo"
                                                ],
                                                "Expression": [
                                                    "GreenType"
                                                ],
                                                "Ordering": [
                                                    370
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": 10491,
                                                        "Min": 92
                                                    }
                                                ]
                                            },
                                            "Value": "볼보"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.부가티.))",
                                            "Count": 0,
                                            "DisplayValue": "부가티",
                                            "Expression": "Manufacturer.부가티.",
                                            "IsSelected": false,
                                            "Metadata": {
                                                "CarType": [
                                                    "N"
                                                ],
                                                "Category": [
                                                    [
                                                        "스포츠카"
                                                    ]
                                                ],
                                                "Code": [
                                                    "077"
                                                ],
                                                "EngName": [
                                                    "Bugatti"
                                                ],
                                                "Ordering": [
                                                    380
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": null,
                                                        "Min": null
                                                    }
                                                ]
                                            },
                                            "Value": "부가티"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.북기은상.))",
                                            "Count": 12,
                                            "DisplayValue": "북기은상",
                                            "Expression": "Manufacturer.북기은상.",
                                            "IsSelected": false,
                                            "Metadata": {
                                                "CarType": [
                                                    "N"
                                                ],
                                                "Category": [
                                                    [
                                                        "SUV",
                                                        "승합차",
                                                        "화물차"
                                                    ]
                                                ],
                                                "Code": [
                                                    "086"
                                                ],
                                                "EngName": [
                                                    "Baic Yinxiang"
                                                ],
                                                "Ordering": [
                                                    385
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": 470,
                                                        "Min": 446
                                                    }
                                                ]
                                            },
                                            "Value": "북기은상"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.뷰익.))",
                                            "Count": 0,
                                            "DisplayValue": "뷰익",
                                            "Expression": "Manufacturer.뷰익.",
                                            "IsSelected": false,
                                            "Metadata": {
                                                "CarType": [
                                                    "N"
                                                ],
                                                "Category": [
                                                    [
                                                        "RV",
                                                        "대형차"
                                                    ]
                                                ],
                                                "Code": [
                                                    "045"
                                                ],
                                                "EngName": [
                                                    "Buick"
                                                ],
                                                "Ordering": [
                                                    390
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": null,
                                                        "Min": null
                                                    }
                                                ]
                                            },
                                            "Value": "뷰익"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.사브.))",
                                            "Count": 21,
                                            "DisplayValue": "사브",
                                            "Expression": "Manufacturer.사브.",
                                            "IsSelected": false,
                                            "Metadata": {
                                                "CarType": [
                                                    "N"
                                                ],
                                                "Category": [
                                                    [
                                                        "기타",
                                                        "중형차"
                                                    ]
                                                ],
                                                "Code": [
                                                    "016"
                                                ],
                                                "EngName": [
                                                    "Saab"
                                                ],
                                                "Ordering": [
                                                    400
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": 816,
                                                        "Min": 293
                                                    }
                                                ]
                                            },
                                            "Value": "사브"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.사이언.))",
                                            "Count": 0,
                                            "DisplayValue": "사이언",
                                            "Expression": "Manufacturer.사이언.",
                                            "IsSelected": false,
                                            "Metadata": {
                                                "CarType": [
                                                    "N"
                                                ],
                                                "Category": [
                                                    [
                                                        "RV",
                                                        "스포츠카",
                                                        "준중형차"
                                                    ]
                                                ],
                                                "Code": [
                                                    "082"
                                                ],
                                                "EngName": [
                                                    "Scion"
                                                ],
                                                "Ordering": [
                                                    410
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": null,
                                                        "Min": null
                                                    }
                                                ]
                                            },
                                            "Value": "사이언"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.새턴.))",
                                            "Count": 1,
                                            "DisplayValue": "새턴",
                                            "Expression": "Manufacturer.새턴.",
                                            "IsSelected": false,
                                            "Metadata": {
                                                "CarType": [
                                                    "N"
                                                ],
                                                "Category": [
                                                    [
                                                        "SUV",
                                                        "스포츠카",
                                                        "중형차"
                                                    ]
                                                ],
                                                "Code": [
                                                    "079"
                                                ],
                                                "EngName": [
                                                    "Saturn"
                                                ],
                                                "Ordering": [
                                                    420
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": null,
                                                        "Min": null
                                                    }
                                                ]
                                            },
                                            "Value": "새턴"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.쉐보레.))",
                                            "Count": 158,
                                            "DisplayValue": "쉐보레",
                                            "Expression": "Manufacturer.쉐보레.",
                                            "IsSelected": false,
                                            "Metadata": {
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
                                                ],
                                                "Code": [
                                                    "038"
                                                ],
                                                "EngName": [
                                                    "Chevrolet"
                                                ],
                                                "Expression": [
                                                    "GreenType"
                                                ],
                                                "Ordering": [
                                                    430
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": null,
                                                        "Min": null
                                                    }
                                                ]
                                            },
                                            "Value": "쉐보레"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.스마트.))",
                                            "Count": 53,
                                            "DisplayValue": "스마트",
                                            "Expression": "Manufacturer.스마트.",
                                            "IsSelected": false,
                                            "Metadata": {
                                                "CarType": [
                                                    "N"
                                                ],
                                                "Category": [
                                                    [
                                                        "경차",
                                                        "소형차"
                                                    ]
                                                ],
                                                "Code": [
                                                    "081"
                                                ],
                                                "EngName": [
                                                    "Smart"
                                                ],
                                                "Expression": [
                                                    "GreenType"
                                                ],
                                                "Ordering": [
                                                    440
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": 1966,
                                                        "Min": 515
                                                    }
                                                ]
                                            },
                                            "Value": "스마트"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.스바루.))",
                                            "Count": 16,
                                            "DisplayValue": "스바루",
                                            "Expression": "Manufacturer.스바루.",
                                            "IsSelected": false,
                                            "Metadata": {
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
                                                ],
                                                "Code": [
                                                    "052"
                                                ],
                                                "EngName": [
                                                    "Subaru"
                                                ],
                                                "Ordering": [
                                                    450
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": 837,
                                                        "Min": 421
                                                    }
                                                ]
                                            },
                                            "Value": "스바루"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.스즈키.))",
                                            "Count": 28,
                                            "DisplayValue": "스즈키",
                                            "Expression": "Manufacturer.스즈키.",
                                            "IsSelected": false,
                                            "Metadata": {
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
                                                ],
                                                "Code": [
                                                    "037"
                                                ],
                                                "EngName": [
                                                    "Suzuki"
                                                ],
                                                "Ordering": [
                                                    460
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": null,
                                                        "Min": null
                                                    }
                                                ]
                                            },
                                            "Value": "스즈키"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.시트로엥/DS.))",
                                            "Count": 164,
                                            "DisplayValue": "시트로엥/DS",
                                            "Expression": "Manufacturer.시트로엥/DS.",
                                            "IsSelected": false,
                                            "Metadata": {
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
                                                ],
                                                "Code": [
                                                    "022"
                                                ],
                                                "EngName": [
                                                    "Citroen-DS"
                                                ],
                                                "Expression": [
                                                    "GreenType"
                                                ],
                                                "Ordering": [
                                                    490
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": 3747,
                                                        "Min": 297
                                                    }
                                                ]
                                            },
                                            "Value": "시트로엥/DS"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.아우디.))",
                                            "Count": 3683,
                                            "DisplayValue": "아우디",
                                            "Expression": "Manufacturer.아우디.",
                                            "IsSelected": false,
                                            "Metadata": {
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
                                                ],
                                                "Code": [
                                                    "011"
                                                ],
                                                "EngName": [
                                                    "Audi"
                                                ],
                                                "Expression": [
                                                    "GreenType"
                                                ],
                                                "Ordering": [
                                                    500
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": 20606,
                                                        "Min": 84
                                                    }
                                                ]
                                            },
                                            "Value": "아우디"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.알파 로메오.))",
                                            "Count": 1,
                                            "DisplayValue": "알파 로메오",
                                            "Expression": "Manufacturer.알파 로메오.",
                                            "IsSelected": false,
                                            "Metadata": {
                                                "CarType": [
                                                    "N"
                                                ],
                                                "Category": [
                                                    [
                                                        "소형차",
                                                        "스포츠카",
                                                        "준중형차"
                                                    ]
                                                ],
                                                "Code": [
                                                    "040"
                                                ],
                                                "EngName": [
                                                    "Alfa Romeo"
                                                ],
                                                "Ordering": [
                                                    510
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": null,
                                                        "Min": null
                                                    }
                                                ]
                                            },
                                            "Value": "알파 로메오"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.애스턴마틴.))",
                                            "Count": 58,
                                            "DisplayValue": "애스턴마틴",
                                            "Expression": "Manufacturer.애스턴마틴.",
                                            "IsSelected": false,
                                            "Metadata": {
                                                "CarType": [
                                                    "N"
                                                ],
                                                "Category": [
                                                    [
                                                        "SUV",
                                                        "대형차",
                                                        "스포츠카"
                                                    ]
                                                ],
                                                "Code": [
                                                    "070"
                                                ],
                                                "EngName": [
                                                    "Astonmartin"
                                                ],
                                                "Ordering": [
                                                    520
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": 23262,
                                                        "Min": 3145
                                                    }
                                                ]
                                            },
                                            "Value": "애스턴마틴"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.어큐라.))",
                                            "Count": 3,
                                            "DisplayValue": "어큐라",
                                            "Expression": "Manufacturer.어큐라.",
                                            "IsSelected": false,
                                            "Metadata": {
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
                                                ],
                                                "Code": [
                                                    "057"
                                                ],
                                                "EngName": [
                                                    "Acura"
                                                ],
                                                "Ordering": [
                                                    530
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": null,
                                                        "Min": null
                                                    }
                                                ]
                                            },
                                            "Value": "어큐라"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.오펠.))",
                                            "Count": 0,
                                            "DisplayValue": "오펠",
                                            "Expression": "Manufacturer.오펠.",
                                            "IsSelected": false,
                                            "Metadata": {
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
                                                ],
                                                "Code": [
                                                    "039"
                                                ],
                                                "EngName": [
                                                    "Opel"
                                                ],
                                                "Ordering": [
                                                    540
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": null,
                                                        "Min": null
                                                    }
                                                ]
                                            },
                                            "Value": "오펠"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.올즈모빌.))",
                                            "Count": 0,
                                            "DisplayValue": "올즈모빌",
                                            "Expression": "Manufacturer.올즈모빌.",
                                            "IsSelected": false,
                                            "Metadata": {
                                                "CarType": [
                                                    "N"
                                                ],
                                                "Category": [
                                                    [
                                                        "SUV",
                                                        "대형차",
                                                        "승합차"
                                                    ]
                                                ],
                                                "Code": [
                                                    "046"
                                                ],
                                                "EngName": [
                                                    "Oldsmoblie"
                                                ],
                                                "Ordering": [
                                                    550
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": null,
                                                        "Min": null
                                                    }
                                                ]
                                            },
                                            "Value": "올즈모빌"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.이스즈.))",
                                            "Count": 0,
                                            "DisplayValue": "이스즈",
                                            "Expression": "Manufacturer.이스즈.",
                                            "IsSelected": false,
                                            "Metadata": {
                                                "CarType": [
                                                    "N"
                                                ],
                                                "Category": [
                                                    [
                                                        "SUV",
                                                        "기타"
                                                    ]
                                                ],
                                                "Code": [
                                                    "028"
                                                ],
                                                "EngName": [
                                                    "Isuzu"
                                                ],
                                                "Ordering": [
                                                    570
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": null,
                                                        "Min": null
                                                    }
                                                ]
                                            },
                                            "Value": "이스즈"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.인피니티.))",
                                            "Count": 412,
                                            "DisplayValue": "인피니티",
                                            "Expression": "Manufacturer.인피니티.",
                                            "IsSelected": false,
                                            "Metadata": {
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
                                                ],
                                                "Code": [
                                                    "058"
                                                ],
                                                "EngName": [
                                                    "Infiniti"
                                                ],
                                                "Expression": [
                                                    "GreenType"
                                                ],
                                                "Ordering": [
                                                    580
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": 3894,
                                                        "Min": 313
                                                    }
                                                ]
                                            },
                                            "Value": "인피니티"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.재규어.))",
                                            "Count": 787,
                                            "DisplayValue": "재규어",
                                            "Expression": "Manufacturer.재규어.",
                                            "IsSelected": false,
                                            "Metadata": {
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
                                                ],
                                                "Code": [
                                                    "019"
                                                ],
                                                "EngName": [
                                                    "Jaguar"
                                                ],
                                                "Expression": [
                                                    "GreenType"
                                                ],
                                                "Ordering": [
                                                    590
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": 11527,
                                                        "Min": 95
                                                    }
                                                ]
                                            },
                                            "Value": "재규어"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.지프.))",
                                            "Count": 1082,
                                            "DisplayValue": "지프",
                                            "Expression": "Manufacturer.지프.",
                                            "IsSelected": false,
                                            "Metadata": {
                                                "CarType": [
                                                    "N"
                                                ],
                                                "Category": [
                                                    [
                                                        "SUV",
                                                        "화물차"
                                                    ]
                                                ],
                                                "Code": [
                                                    "083"
                                                ],
                                                "EngName": [
                                                    "Jeep"
                                                ],
                                                "Expression": [
                                                    "GreenType"
                                                ],
                                                "Ordering": [
                                                    600
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": 6442,
                                                        "Min": 113
                                                    }
                                                ]
                                            },
                                            "Value": "지프"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.캐딜락.))",
                                            "Count": 374,
                                            "DisplayValue": "캐딜락",
                                            "Expression": "Manufacturer.캐딜락.",
                                            "IsSelected": false,
                                            "Metadata": {
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
                                                ],
                                                "Code": [
                                                    "043"
                                                ],
                                                "EngName": [
                                                    "Cadillac"
                                                ],
                                                "Ordering": [
                                                    610
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": 14490,
                                                        "Min": 85
                                                    }
                                                ]
                                            },
                                            "Value": "캐딜락"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.코닉세그.))",
                                            "Count": 0,
                                            "DisplayValue": "코닉세그",
                                            "Expression": "Manufacturer.코닉세그.",
                                            "IsSelected": false,
                                            "Metadata": {
                                                "CarType": [
                                                    "N"
                                                ],
                                                "Category": [
                                                    [
                                                        "스포츠카"
                                                    ]
                                                ],
                                                "Code": [
                                                    "076"
                                                ],
                                                "EngName": [
                                                    "Koenigsegg"
                                                ],
                                                "Ordering": [
                                                    620
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": null,
                                                        "Min": null
                                                    }
                                                ]
                                            },
                                            "Value": "코닉세그"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.크라이슬러.))",
                                            "Count": 154,
                                            "DisplayValue": "크라이슬러",
                                            "Expression": "Manufacturer.크라이슬러.",
                                            "IsSelected": false,
                                            "Metadata": {
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
                                                ],
                                                "Code": [
                                                    "023"
                                                ],
                                                "EngName": [
                                                    "Chrysler"
                                                ],
                                                "Ordering": [
                                                    630
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": 1904,
                                                        "Min": 155
                                                    }
                                                ]
                                            },
                                            "Value": "크라이슬러"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.테슬라.))",
                                            "Count": 449,
                                            "DisplayValue": "테슬라",
                                            "Expression": "Manufacturer.테슬라.",
                                            "IsSelected": false,
                                            "Metadata": {
                                                "CarType": [
                                                    "N"
                                                ],
                                                "Category": [
                                                    [
                                                        "SUV",
                                                        "준중형차",
                                                        "중형차"
                                                    ]
                                                ],
                                                "Code": [
                                                    "087"
                                                ],
                                                "EngName": [
                                                    "Tesla"
                                                ],
                                                "Expression": [
                                                    "GreenType"
                                                ],
                                                "Ordering": [
                                                    635
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": 14652,
                                                        "Min": 3474
                                                    }
                                                ]
                                            },
                                            "Value": "테슬라"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.파가니.))",
                                            "Count": 0,
                                            "DisplayValue": "파가니",
                                            "Expression": "Manufacturer.파가니.",
                                            "IsSelected": false,
                                            "Metadata": {
                                                "CarType": [
                                                    "N"
                                                ],
                                                "Category": [
                                                    [
                                                        "스포츠카"
                                                    ]
                                                ],
                                                "Code": [
                                                    "075"
                                                ],
                                                "EngName": [
                                                    "Pagani"
                                                ],
                                                "Ordering": [
                                                    640
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": null,
                                                        "Min": null
                                                    }
                                                ]
                                            },
                                            "Value": "파가니"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.페라리.))",
                                            "Count": 253,
                                            "DisplayValue": "페라리",
                                            "Expression": "Manufacturer.페라리.",
                                            "IsSelected": false,
                                            "Metadata": {
                                                "CarType": [
                                                    "N"
                                                ],
                                                "Category": [
                                                    [
                                                        "스포츠카"
                                                    ]
                                                ],
                                                "Code": [
                                                    "041"
                                                ],
                                                "EngName": [
                                                    "Ferrari"
                                                ],
                                                "Expression": [
                                                    "GreenType"
                                                ],
                                                "Ordering": [
                                                    650
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": 30486,
                                                        "Min": 3486
                                                    }
                                                ]
                                            },
                                            "Value": "페라리"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.포드.))",
                                            "Count": 870,
                                            "DisplayValue": "포드",
                                            "Expression": "Manufacturer.포드.",
                                            "IsSelected": false,
                                            "Metadata": {
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
                                                ],
                                                "Code": [
                                                    "024"
                                                ],
                                                "EngName": [
                                                    "Ford"
                                                ],
                                                "Expression": [
                                                    "GreenType"
                                                ],
                                                "Ordering": [
                                                    660
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": 8422,
                                                        "Min": 99
                                                    }
                                                ]
                                            },
                                            "Value": "포드"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.포르쉐.))",
                                            "Count": 2155,
                                            "DisplayValue": "포르쉐",
                                            "Expression": "Manufacturer.포르쉐.",
                                            "IsSelected": false,
                                            "Metadata": {
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
                                                ],
                                                "Code": [
                                                    "015"
                                                ],
                                                "EngName": [
                                                    "Porsche"
                                                ],
                                                "Expression": [
                                                    "GreenType"
                                                ],
                                                "Ordering": [
                                                    670
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": 30967,
                                                        "Min": 82
                                                    }
                                                ]
                                            },
                                            "Value": "포르쉐"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.포톤.))",
                                            "Count": 2,
                                            "DisplayValue": "포톤",
                                            "Expression": "Manufacturer.포톤.",
                                            "IsSelected": false,
                                            "Metadata": {
                                                "CarType": [
                                                    "N"
                                                ],
                                                "Category": [
                                                    [
                                                        "화물차"
                                                    ]
                                                ],
                                                "Code": [
                                                    "085"
                                                ],
                                                "EngName": [
                                                    "FOTON"
                                                ],
                                                "Ordering": [
                                                    675
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": null,
                                                        "Min": null
                                                    }
                                                ]
                                            },
                                            "Value": "포톤"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.폭스바겐.))",
                                            "Count": 1436,
                                            "DisplayValue": "폭스바겐",
                                            "Expression": "Manufacturer.폭스바겐.",
                                            "IsSelected": false,
                                            "Metadata": {
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
                                                ],
                                                "Code": [
                                                    "014"
                                                ],
                                                "EngName": [
                                                    "Volkswagen"
                                                ],
                                                "Expression": [
                                                    "GreenType"
                                                ],
                                                "Ordering": [
                                                    680
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": 9210,
                                                        "Min": 80
                                                    }
                                                ]
                                            },
                                            "Value": "폭스바겐"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.폰티악.))",
                                            "Count": 1,
                                            "DisplayValue": "폰티악",
                                            "Expression": "Manufacturer.폰티악.",
                                            "IsSelected": false,
                                            "Metadata": {
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
                                                ],
                                                "Code": [
                                                    "042"
                                                ],
                                                "EngName": [
                                                    "Pontiac"
                                                ],
                                                "Ordering": [
                                                    690
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": null,
                                                        "Min": null
                                                    }
                                                ]
                                            },
                                            "Value": "폰티악"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.폴스타.))",
                                            "Count": 40,
                                            "DisplayValue": "폴스타",
                                            "Expression": "Manufacturer.폴스타.",
                                            "IsSelected": false,
                                            "Metadata": {
                                                "CarType": [
                                                    "N"
                                                ],
                                                "Category": [
                                                    [
                                                        "준중형차"
                                                    ]
                                                ],
                                                "Code": [
                                                    "089"
                                                ],
                                                "EngName": [
                                                    "Polestar"
                                                ],
                                                "Expression": [
                                                    "GreenType"
                                                ],
                                                "Ordering": [
                                                    695
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": null,
                                                        "Min": null
                                                    }
                                                ]
                                            },
                                            "Value": "폴스타"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.푸조.))",
                                            "Count": 527,
                                            "DisplayValue": "푸조",
                                            "Expression": "Manufacturer.푸조.",
                                            "IsSelected": false,
                                            "Metadata": {
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
                                                ],
                                                "Code": [
                                                    "021"
                                                ],
                                                "EngName": [
                                                    "Peugeot"
                                                ],
                                                "Expression": [
                                                    "GreenType"
                                                ],
                                                "Ordering": [
                                                    700
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": 4527,
                                                        "Min": 170
                                                    }
                                                ]
                                            },
                                            "Value": "푸조"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.피아트.))",
                                            "Count": 136,
                                            "DisplayValue": "피아트",
                                            "Expression": "Manufacturer.피아트.",
                                            "IsSelected": false,
                                            "Metadata": {
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
                                                ],
                                                "Code": [
                                                    "018"
                                                ],
                                                "EngName": [
                                                    "Fiat"
                                                ],
                                                "Expression": [
                                                    "GreenType"
                                                ],
                                                "Ordering": [
                                                    710
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": 1317,
                                                        "Min": 404
                                                    }
                                                ]
                                            },
                                            "Value": "피아트"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.험머.))",
                                            "Count": 46,
                                            "DisplayValue": "험머",
                                            "Expression": "Manufacturer.험머.",
                                            "IsSelected": false,
                                            "Metadata": {
                                                "CarType": [
                                                    "N"
                                                ],
                                                "Category": [
                                                    [
                                                        "SUV",
                                                        "화물차"
                                                    ]
                                                ],
                                                "Code": [
                                                    "048"
                                                ],
                                                "EngName": [
                                                    "Hummer"
                                                ],
                                                "Ordering": [
                                                    720
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": null,
                                                        "Min": null
                                                    }
                                                ]
                                            },
                                            "Value": "험머"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.혼다.))",
                                            "Count": 491,
                                            "DisplayValue": "혼다",
                                            "Expression": "Manufacturer.혼다.",
                                            "IsSelected": false,
                                            "Metadata": {
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
                                                ],
                                                "Code": [
                                                    "027"
                                                ],
                                                "EngName": [
                                                    "Honda"
                                                ],
                                                "Expression": [
                                                    "GreenType"
                                                ],
                                                "Ordering": [
                                                    730
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": 5403,
                                                        "Min": 107
                                                    }
                                                ]
                                            },
                                            "Value": "혼다"
                                        },
                                        {
                                            "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.기타 수입차.))",
                                            "Count": 1,
                                            "DisplayValue": "기타 수입차",
                                            "Expression": "Manufacturer.기타 수입차.",
                                            "IsSelected": false,
                                            "Metadata": {
                                                "CarType": [
                                                    "N"
                                                ],
                                                "Category": [
                                                    [
                                                        "기타"
                                                    ]
                                                ],
                                                "Code": [
                                                    "999"
                                                ],
                                                "EngName": [
                                                    "etc"
                                                ],
                                                "Ordering": [
                                                    1000
                                                ],
                                                "Price": [
                                                    {
                                                        "Max": null,
                                                        "Min": null
                                                    }
                                                ]
                                            },
                                            "Value": "기타 수입차"
                                        }
                                    ],
                                    "IsSelected": true,
                                    "Metadata": {},
                                    "MultiSelectMode": "None",
                                    "Name": "Manufacturer",
                                    "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.N._.(<!>)))",
                                    "RemoveAction": "(And.Hidden.N._.CarType.N.)",
                                    "Type": "Aspect"
                                }
                            ]
                        },
                        "Value": "N"
                    },
                    {
                        "Action": "(And.Hidden.N._.(Or.(C.CarType.N._.Manufacturer.BMW.)_.CarType.A.))",
                        "Count": 135749,
                        "DisplayValue": "A",
                        "Expression": "CarType.A.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "A"
                    },
                    {
                        "Action": "(And.Hidden.N._.(Or.(C.CarType.N._.Manufacturer.BMW.)_.CarType.Y.))",
                        "Count": 93143,
                        "DisplayValue": "Y",
                        "Expression": "CarType.Y.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "Y"
                    }
                ],
                "IsSelected": true,
                "Metadata": {},
                "MultiSelectMode": "Or",
                "Name": "CarType",
                "PlaceholderExpression": "(And.Hidden.N._.(<!>))",
                "RemoveAction": "Hidden.N.",
                "Type": "Aspect"
            },
            {
                "DisplayName": "차종",
                "Facets": [
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Category.경차.)",
                        "Count": 0,
                        "DisplayValue": "경차",
                        "Expression": "Category.경차.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "001"
                            ]
                        },
                        "Value": "경차"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Category.소형차.)",
                        "Count": 489,
                        "DisplayValue": "소형차",
                        "Expression": "Category.소형차.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "002"
                            ]
                        },
                        "Value": "소형차"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Category.준중형차.)",
                        "Count": 1305,
                        "DisplayValue": "준중형차",
                        "Expression": "Category.준중형차.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "003"
                            ]
                        },
                        "Value": "준중형차"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Category.중형차.)",
                        "Count": 2771,
                        "DisplayValue": "중형차",
                        "Expression": "Category.중형차.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "004"
                            ]
                        },
                        "Value": "중형차"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Category.대형차.)",
                        "Count": 1094,
                        "DisplayValue": "대형차",
                        "Expression": "Category.대형차.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "005"
                            ]
                        },
                        "Value": "대형차"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Category.스포츠카.)",
                        "Count": 1420,
                        "DisplayValue": "스포츠카",
                        "Expression": "Category.스포츠카.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "006"
                            ]
                        },
                        "Value": "스포츠카"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Category.SUV.)",
                        "Count": 2145,
                        "DisplayValue": "SUV",
                        "Expression": "Category.SUV.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "007"
                            ]
                        },
                        "Value": "SUV"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Category.RV.)",
                        "Count": 0,
                        "DisplayValue": "RV",
                        "Expression": "Category.RV.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "008"
                            ]
                        },
                        "Value": "RV"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Category.경승합차.)",
                        "Count": 0,
                        "DisplayValue": "경승합차",
                        "Expression": "Category.경승합차.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "009"
                            ]
                        },
                        "Value": "경승합차"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Category.승합차.)",
                        "Count": 0,
                        "DisplayValue": "승합차",
                        "Expression": "Category.승합차.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "010"
                            ]
                        },
                        "Value": "승합차"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Category.화물차.)",
                        "Count": 0,
                        "DisplayValue": "화물차",
                        "Expression": "Category.화물차.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "011"
                            ]
                        },
                        "Value": "화물차"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Category.기타.)",
                        "Count": 0,
                        "DisplayValue": "기타",
                        "Expression": "Category.기타.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "099"
                            ]
                        },
                        "Value": "기타"
                    }
                ],
                "IsSelected": false,
                "Metadata": {},
                "MultiSelectMode": "Or",
                "Name": "Category",
                "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.(<!>))",
                "RemoveAction": "",
                "Type": "Aspect"
            },
            {
                "DisplayName": "차종",
                "Facets": [
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.CategoryPath.경차.)",
                        "Count": 0,
                        "DisplayValue": "경차",
                        "Expression": "CategoryPath.경차.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "001"
                            ]
                        },
                        "Value": "경차"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.CategoryPath.소형차.)",
                        "Count": 489,
                        "DisplayValue": "소형차",
                        "Expression": "CategoryPath.소형차.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "002"
                            ]
                        },
                        "Value": "소형차"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.CategoryPath.준중형차.)",
                        "Count": 1305,
                        "DisplayValue": "준중형차",
                        "Expression": "CategoryPath.준중형차.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "003"
                            ]
                        },
                        "Value": "준중형차"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.CategoryPath.중형차.)",
                        "Count": 2771,
                        "DisplayValue": "중형차",
                        "Expression": "CategoryPath.중형차.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "004"
                            ]
                        },
                        "Value": "중형차"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.CategoryPath.대형차.)",
                        "Count": 1094,
                        "DisplayValue": "대형차",
                        "Expression": "CategoryPath.대형차.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "005"
                            ]
                        },
                        "Value": "대형차"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.CategoryPath.스포츠카.)",
                        "Count": 1420,
                        "DisplayValue": "스포츠카",
                        "Expression": "CategoryPath.스포츠카.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "006"
                            ]
                        },
                        "Value": "스포츠카"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.CategoryPath.SUV.)",
                        "Count": 2145,
                        "DisplayValue": "SUV",
                        "Expression": "CategoryPath.SUV.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "007"
                            ]
                        },
                        "Value": "SUV"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.CategoryPath.RV.)",
                        "Count": 0,
                        "DisplayValue": "RV",
                        "Expression": "CategoryPath.RV.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "008"
                            ]
                        },
                        "Value": "RV"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.CategoryPath.경승합차.)",
                        "Count": 0,
                        "DisplayValue": "경승합차",
                        "Expression": "CategoryPath.경승합차.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "009"
                            ]
                        },
                        "Value": "경승합차"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.CategoryPath.승합차.)",
                        "Count": 0,
                        "DisplayValue": "승합차",
                        "Expression": "CategoryPath.승합차.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "010"
                            ]
                        },
                        "Value": "승합차"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.CategoryPath.화물차.)",
                        "Count": 0,
                        "DisplayValue": "화물차",
                        "Expression": "CategoryPath.화물차.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "011"
                            ]
                        },
                        "Value": "화물차"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.CategoryPath.기타.)",
                        "Count": 0,
                        "DisplayValue": "기타",
                        "Expression": "CategoryPath.기타.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "099"
                            ]
                        },
                        "Value": "기타"
                    }
                ],
                "IsSelected": false,
                "Metadata": {},
                "MultiSelectMode": "None",
                "Name": "CategoryPath",
                "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.(<!>))",
                "RemoveAction": "",
                "Type": "Aspect"
            },
            {
                "DisplayName": "친환경차여부",
                "Facets": [
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.GreenType.N.)",
                        "Count": 8749,
                        "DisplayValue": "N",
                        "Expression": "GreenType.N.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "N"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.GreenType.Y.)",
                        "Count": 475,
                        "DisplayValue": "Y",
                        "Expression": "GreenType.Y.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "Y"
                    }
                ],
                "IsSelected": false,
                "Metadata": {},
                "MultiSelectMode": "Or",
                "Name": "GreenType",
                "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.(<!>))",
                "RemoveAction": "",
                "Type": "Aspect"
            },
            {
                "DisplayName": "국산여부",
                "Facets": [
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.ModelCarType.A.)",
                        "Count": 9224,
                        "DisplayValue": "A",
                        "Expression": "ModelCarType.A.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "A"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.ModelCarType.N.)",
                        "Count": 9224,
                        "DisplayValue": "N",
                        "Expression": "ModelCarType.N.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "N"
                    }
                ],
                "IsSelected": false,
                "Metadata": {},
                "MultiSelectMode": "None",
                "Name": "ModelCarType",
                "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.(<!>))",
                "RemoveAction": "",
                "Type": "Aspect"
            },
            {
                "DisplayName": "속성타입",
                "Facets": [
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.AttributeType.Green.)",
                        "Count": 475,
                        "DisplayValue": "Green",
                        "Expression": "AttributeType.Green.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "Green"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.AttributeType.Lease.)",
                        "Count": 1365,
                        "DisplayValue": "Lease",
                        "Expression": "AttributeType.Lease.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "Lease"
                    }
                ],
                "IsSelected": false,
                "Metadata": {},
                "MultiSelectMode": "Or",
                "Name": "AttributeType",
                "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.(<!>))",
                "RemoveAction": "",
                "Type": "Aspect"
            },
            {
                "DisplayName": "판매방식",
                "Facets": [
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.SellType.일반.)",
                        "Count": 7859,
                        "DisplayValue": "일반",
                        "Expression": "SellType.일반.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "1"
                            ]
                        },
                        "Value": "일반"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.SellType.리스승계.)",
                        "Count": 1329,
                        "DisplayValue": "리스승계",
                        "Expression": "SellType.리스승계.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "2"
                            ]
                        },
                        "Value": "리스승계"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.SellType.렌트.)",
                        "Count": 36,
                        "DisplayValue": "렌트",
                        "Expression": "SellType.렌트.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "3"
                            ]
                        },
                        "Value": "렌트"
                    }
                ],
                "IsSelected": false,
                "Metadata": {},
                "MultiSelectMode": "Or",
                "Name": "SellType",
                "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.(<!>))",
                "RemoveAction": "",
                "Type": "Aspect"
            },
            {
                "DisplayName": "리스렌트타입",
                "Facets": [
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.LeaseType.운용리스.)",
                        "Count": 734,
                        "DisplayValue": "운용리스",
                        "Expression": "LeaseType.운용리스.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "21"
                            ]
                        },
                        "Value": "운용리스"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.LeaseType.금융리스.)",
                        "Count": 595,
                        "DisplayValue": "금융리스",
                        "Expression": "LeaseType.금융리스.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "22"
                            ]
                        },
                        "Value": "금융리스"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.LeaseType.렌트승계.)",
                        "Count": 36,
                        "DisplayValue": "렌트승계",
                        "Expression": "LeaseType.렌트승계.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "31"
                            ]
                        },
                        "Value": "렌트승계"
                    }
                ],
                "IsSelected": false,
                "Metadata": {},
                "MultiSelectMode": "Or",
                "Name": "LeaseType",
                "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.(<!>))",
                "RemoveAction": "",
                "Type": "Aspect"
            },
            {
                "DisplayName": "혜택구분",
                "Facets": [
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.LeaseBenefits.승계지원금 포함.)",
                        "Count": 202,
                        "DisplayValue": "승계지원금 포함",
                        "Expression": "LeaseBenefits.승계지원금 포함.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "승계지원금 포함"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.LeaseBenefits.자동차세 포함.)",
                        "Count": 197,
                        "DisplayValue": "자동차세 포함",
                        "Expression": "LeaseBenefits.자동차세 포함.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "자동차세 포함"
                    }
                ],
                "IsSelected": false,
                "Metadata": {},
                "MultiSelectMode": "Or",
                "Name": "LeaseBenefits",
                "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.(<!>))",
                "RemoveAction": "",
                "Type": "Aspect"
            },
            {
                "DisplayName": "변속기",
                "Facets": [
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Transmission.오토.)",
                        "Count": 9189,
                        "DisplayValue": "오토",
                        "Expression": "Transmission.오토.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "001"
                            ]
                        },
                        "Value": "오토"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Transmission.수동.)",
                        "Count": 15,
                        "DisplayValue": "수동",
                        "Expression": "Transmission.수동.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "002"
                            ]
                        },
                        "Value": "수동"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Transmission.세미오토.)",
                        "Count": 17,
                        "DisplayValue": "세미오토",
                        "Expression": "Transmission.세미오토.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "003"
                            ]
                        },
                        "Value": "세미오토"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Transmission.CVT.)",
                        "Count": 0,
                        "DisplayValue": "CVT",
                        "Expression": "Transmission.CVT.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "004"
                            ]
                        },
                        "Value": "CVT"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Transmission.기타.)",
                        "Count": 1,
                        "DisplayValue": "기타",
                        "Expression": "Transmission.기타.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "999"
                            ]
                        },
                        "Value": "기타"
                    }
                ],
                "IsSelected": false,
                "Metadata": {},
                "MultiSelectMode": "Or",
                "Name": "Transmission",
                "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.(<!>))",
                "RemoveAction": "",
                "Type": "Aspect"
            },
            {
                "DisplayName": "가격",
                "Facets": [
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Price.p0005.)",
                        "Count": 144,
                        "DisplayValue": "500만원 미만",
                        "Expression": "Price.p0005.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "p0005"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Price.p0510.)",
                        "Count": 663,
                        "DisplayValue": "500 ~ 1,000만원 미만",
                        "Expression": "Price.p0510.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "p0510"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Price.p1015.)",
                        "Count": 1014,
                        "DisplayValue": "1,000 ~ 1,500만원 미만",
                        "Expression": "Price.p1015.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "p1015"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Price.p1520.)",
                        "Count": 864,
                        "DisplayValue": "1,500 ~ 2,000만원 미만",
                        "Expression": "Price.p1520.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "p1520"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Price.p2025.)",
                        "Count": 605,
                        "DisplayValue": "2,000 ~ 2,500만원 미만",
                        "Expression": "Price.p2025.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "p2025"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Price.p2530.)",
                        "Count": 614,
                        "DisplayValue": "2,500 ~ 3,000만원 미만",
                        "Expression": "Price.p2530.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "p2530"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Price.p3035.)",
                        "Count": 634,
                        "DisplayValue": "3,000 ~ 3,500만원 미만",
                        "Expression": "Price.p3035.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "p3035"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Price.p3540.)",
                        "Count": 700,
                        "DisplayValue": "3,500 ~ 4,000만원 미만",
                        "Expression": "Price.p3540.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "p3540"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Price.p4045.)",
                        "Count": 621,
                        "DisplayValue": "4,000 ~ 4,500만원 미만",
                        "Expression": "Price.p4045.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "p4045"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Price.p4550.)",
                        "Count": 523,
                        "DisplayValue": "4,500 ~ 5,000만원 미만",
                        "Expression": "Price.p4550.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "p4550"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Price.p5099.)",
                        "Count": 2842,
                        "DisplayValue": "5,000만원 이상",
                        "Expression": "Price.p5099.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "p5099"
                    }
                ],
                "IsSelected": false,
                "Metadata": {},
                "MultiSelectMode": "Or",
                "Name": "Price",
                "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.(<!>))",
                "RemoveAction": "",
                "Type": "Aspect"
            },
            {
                "DisplayName": "지역(시도)",
                "Facets": [
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.OfficeCityState.경기.)",
                        "Count": 4597,
                        "DisplayValue": "경기",
                        "Expression": "OfficeCityState.경기.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "경기"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.OfficeCityState.서울.)",
                        "Count": 1435,
                        "DisplayValue": "서울",
                        "Expression": "OfficeCityState.서울.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "서울"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.OfficeCityState.부산.)",
                        "Count": 766,
                        "DisplayValue": "부산",
                        "Expression": "OfficeCityState.부산.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "부산"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.OfficeCityState.대구.)",
                        "Count": 706,
                        "DisplayValue": "대구",
                        "Expression": "OfficeCityState.대구.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "대구"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.OfficeCityState.인천.)",
                        "Count": 397,
                        "DisplayValue": "인천",
                        "Expression": "OfficeCityState.인천.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "인천"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.OfficeCityState.광주.)",
                        "Count": 274,
                        "DisplayValue": "광주",
                        "Expression": "OfficeCityState.광주.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "광주"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.OfficeCityState.경남.)",
                        "Count": 230,
                        "DisplayValue": "경남",
                        "Expression": "OfficeCityState.경남.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "경남"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.OfficeCityState.대전.)",
                        "Count": 222,
                        "DisplayValue": "대전",
                        "Expression": "OfficeCityState.대전.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "대전"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.OfficeCityState.전북.)",
                        "Count": 195,
                        "DisplayValue": "전북",
                        "Expression": "OfficeCityState.전북.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "전북"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.OfficeCityState.충남.)",
                        "Count": 140,
                        "DisplayValue": "충남",
                        "Expression": "OfficeCityState.충남.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "충남"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.OfficeCityState.울산.)",
                        "Count": 63,
                        "DisplayValue": "울산",
                        "Expression": "OfficeCityState.울산.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "울산"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.OfficeCityState.충북.)",
                        "Count": 61,
                        "DisplayValue": "충북",
                        "Expression": "OfficeCityState.충북.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "충북"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.OfficeCityState.경북.)",
                        "Count": 50,
                        "DisplayValue": "경북",
                        "Expression": "OfficeCityState.경북.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "경북"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.OfficeCityState.전남.)",
                        "Count": 34,
                        "DisplayValue": "전남",
                        "Expression": "OfficeCityState.전남.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "전남"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.OfficeCityState.강원.)",
                        "Count": 22,
                        "DisplayValue": "강원",
                        "Expression": "OfficeCityState.강원.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "강원"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.OfficeCityState.제주.)",
                        "Count": 5,
                        "DisplayValue": "제주",
                        "Expression": "OfficeCityState.제주.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "제주"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.OfficeCityState.null.)",
                        "Count": 4,
                        "DisplayValue": "null",
                        "Expression": "OfficeCityState.null.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "null"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.OfficeCityState.세종.)",
                        "Count": 4,
                        "DisplayValue": "세종",
                        "Expression": "OfficeCityState.세종.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "세종"
                    }
                ],
                "IsSelected": false,
                "Metadata": {},
                "MultiSelectMode": "Or",
                "Name": "OfficeCityState",
                "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.(<!>))",
                "RemoveAction": "",
                "Type": "Aspect"
            },
            {
                "DisplayName": "연료",
                "Facets": [
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.FuelType.가솔린.)",
                        "Count": 4335,
                        "DisplayValue": "가솔린",
                        "Expression": "FuelType.가솔린.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "001"
                            ],
                            "Expression": [
                                "GreenType"
                            ]
                        },
                        "Value": "가솔린"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.FuelType.디젤.)",
                        "Count": 4321,
                        "DisplayValue": "디젤",
                        "Expression": "FuelType.디젤.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "002"
                            ],
                            "Expression": [
                                "GreenType"
                            ]
                        },
                        "Value": "디젤"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.FuelType.LPG(일반인 구입_).)",
                        "Count": 0,
                        "DisplayValue": "LPG(일반인 구입)",
                        "Expression": "FuelType.LPG(일반인 구입_).",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "003"
                            ],
                            "Expression": [
                                "GreenType"
                            ]
                        },
                        "Value": "LPG(일반인 구입)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.FuelType.가솔린+전기.)",
                        "Count": 304,
                        "DisplayValue": "가솔린+전기",
                        "Expression": "FuelType.가솔린+전기.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "006"
                            ],
                            "Expression": [
                                "GreenType"
                            ]
                        },
                        "Value": "가솔린+전기"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.FuelType.디젤+전기.)",
                        "Count": 87,
                        "DisplayValue": "디젤+전기",
                        "Expression": "FuelType.디젤+전기.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "007"
                            ],
                            "Expression": [
                                "GreenType"
                            ]
                        },
                        "Value": "디젤+전기"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.FuelType.LPG+전기.)",
                        "Count": 0,
                        "DisplayValue": "LPG+전기",
                        "Expression": "FuelType.LPG+전기.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "008"
                            ],
                            "Expression": [
                                "GreenType"
                            ]
                        },
                        "Value": "LPG+전기"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.FuelType.가솔린+LPG.)",
                        "Count": 0,
                        "DisplayValue": "가솔린+LPG",
                        "Expression": "FuelType.가솔린+LPG.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "005"
                            ],
                            "Expression": [
                                "GreenType"
                            ]
                        },
                        "Value": "가솔린+LPG"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.FuelType.가솔린+CNG.)",
                        "Count": 0,
                        "DisplayValue": "가솔린+CNG",
                        "Expression": "FuelType.가솔린+CNG.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "010"
                            ]
                        },
                        "Value": "가솔린+CNG"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.FuelType.전기.)",
                        "Count": 177,
                        "DisplayValue": "전기",
                        "Expression": "FuelType.전기.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "009"
                            ],
                            "Expression": [
                                "GreenType"
                            ]
                        },
                        "Value": "전기"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.FuelType.수소.)",
                        "Count": 0,
                        "DisplayValue": "수소",
                        "Expression": "FuelType.수소.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "013"
                            ],
                            "Expression": [
                                "GreenType"
                            ]
                        },
                        "Value": "수소"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.FuelType.CNG.)",
                        "Count": 0,
                        "DisplayValue": "CNG",
                        "Expression": "FuelType.CNG.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "012"
                            ]
                        },
                        "Value": "CNG"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.FuelType.기타.)",
                        "Count": 0,
                        "DisplayValue": "기타",
                        "Expression": "FuelType.기타.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "999"
                            ]
                        },
                        "Value": "기타"
                    }
                ],
                "IsSelected": false,
                "Metadata": {},
                "MultiSelectMode": "Or",
                "Name": "FuelType",
                "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.(<!>))",
                "RemoveAction": "",
                "Type": "Aspect"
            },
            {
                "DisplayName": "엔카 서비스",
                "Facets": [
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Trust.Meetgo.)",
                        "Count": 2,
                        "DisplayValue": "믿고",
                        "Expression": "Trust.Meetgo.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "Meetgo"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Trust.HomeService.)",
                        "Count": 1287,
                        "DisplayValue": "엔카홈서비스",
                        "Expression": "Trust.HomeService.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "HomeService"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Trust.Warranty.)",
                        "Count": 3179,
                        "DisplayValue": "엔카진단",
                        "Expression": "Trust.Warranty.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "Warranty"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Trust.ExtendWarranty.)",
                        "Count": 0,
                        "DisplayValue": "엔카보증",
                        "Expression": "Trust.ExtendWarranty.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "ExtendWarranty"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Trust.ExtendWarrantyImported.)",
                        "Count": 2164,
                        "DisplayValue": "엔카보증(수입차)",
                        "Expression": "Trust.ExtendWarrantyImported.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "ExtendWarrantyImported"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Trust.Compensate.)",
                        "Count": 159,
                        "DisplayValue": "헛걸음보상",
                        "Expression": "Trust.Compensate.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "Compensate"
                    }
                ],
                "IsSelected": false,
                "Metadata": {},
                "MultiSelectMode": "Or",
                "Name": "Trust",
                "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.(<!>))",
                "RemoveAction": "",
                "Type": "Aspect"
            },
            {
                "DisplayName": "성능/보험 공개",
                "Facets": [
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Condition.InspectionDirect.)",
                        "Count": 265,
                        "DisplayValue": "엔카(직영) 성능점검",
                        "Expression": "Condition.InspectionDirect.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "InspectionDirect"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Condition.Inspection.)",
                        "Count": 7634,
                        "DisplayValue": "성능기록부",
                        "Expression": "Condition.Inspection.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "Inspection"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Condition.Record.)",
                        "Count": 8729,
                        "DisplayValue": "보험이력",
                        "Expression": "Condition.Record.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "Record"
                    }
                ],
                "IsSelected": false,
                "Metadata": {},
                "MultiSelectMode": "And",
                "Name": "Condition",
                "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.(<!>))",
                "RemoveAction": "",
                "Type": "Aspect"
            },
            {
                "DisplayName": "판매구분",
                "Facets": [
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Separation.A.)",
                        "Count": 635,
                        "DisplayValue": "개인",
                        "Expression": "Separation.A.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "A"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Separation.B.)",
                        "Count": 8109,
                        "DisplayValue": "딜러",
                        "Expression": "Separation.B.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "B"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Separation.F.)",
                        "Count": 975,
                        "DisplayValue": "브랜드인증",
                        "Expression": "Separation.F.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "F"
                    }
                ],
                "IsSelected": false,
                "Metadata": {},
                "MultiSelectMode": "Or",
                "Name": "Separation",
                "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.(<!>))",
                "RemoveAction": "",
                "Type": "Aspect"
            },
            {
                "DisplayName": "핫마크",
                "Facets": [
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Hotmarks.08.)",
                        "Count": 38,
                        "DisplayValue": "08",
                        "Expression": "Hotmarks.08.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "08"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Hotmarks.19.)",
                        "Count": 224,
                        "DisplayValue": "19",
                        "Expression": "Hotmarks.19.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "19"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Hotmarks.29.)",
                        "Count": 107,
                        "DisplayValue": "29",
                        "Expression": "Hotmarks.29.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "29"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Hotmarks.28.)",
                        "Count": 50,
                        "DisplayValue": "28",
                        "Expression": "Hotmarks.28.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "28"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Hotmarks.05.)",
                        "Count": 4,
                        "DisplayValue": "05",
                        "Expression": "Hotmarks.05.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "05"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Hotmarks.14.)",
                        "Count": 614,
                        "DisplayValue": "14",
                        "Expression": "Hotmarks.14.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "14"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Hotmarks.27.)",
                        "Count": 63,
                        "DisplayValue": "27",
                        "Expression": "Hotmarks.27.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "27"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Hotmarks.15.)",
                        "Count": 413,
                        "DisplayValue": "15",
                        "Expression": "Hotmarks.15.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "15"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Hotmarks.06.)",
                        "Count": 6,
                        "DisplayValue": "06",
                        "Expression": "Hotmarks.06.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "06"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Hotmarks.26.)",
                        "Count": 105,
                        "DisplayValue": "26",
                        "Expression": "Hotmarks.26.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "26"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Hotmarks.01.)",
                        "Count": 29,
                        "DisplayValue": "01",
                        "Expression": "Hotmarks.01.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "01"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Hotmarks.17.)",
                        "Count": 254,
                        "DisplayValue": "17",
                        "Expression": "Hotmarks.17.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "17"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Hotmarks.10.)",
                        "Count": 257,
                        "DisplayValue": "10",
                        "Expression": "Hotmarks.10.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "10"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Hotmarks.24.)",
                        "Count": 152,
                        "DisplayValue": "24",
                        "Expression": "Hotmarks.24.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "24"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Hotmarks.03.)",
                        "Count": 25,
                        "DisplayValue": "03",
                        "Expression": "Hotmarks.03.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "03"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Hotmarks.11.)",
                        "Count": 50,
                        "DisplayValue": "11",
                        "Expression": "Hotmarks.11.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "11"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Hotmarks.23.)",
                        "Count": 19,
                        "DisplayValue": "23",
                        "Expression": "Hotmarks.23.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "23"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Hotmarks.22.)",
                        "Count": 15,
                        "DisplayValue": "22",
                        "Expression": "Hotmarks.22.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "22"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Hotmarks.02.)",
                        "Count": 91,
                        "DisplayValue": "02",
                        "Expression": "Hotmarks.02.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "02"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Hotmarks.12.)",
                        "Count": 217,
                        "DisplayValue": "12",
                        "Expression": "Hotmarks.12.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "12"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Hotmarks.21.)",
                        "Count": 40,
                        "DisplayValue": "21",
                        "Expression": "Hotmarks.21.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "21"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Hotmarks.13.)",
                        "Count": 449,
                        "DisplayValue": "13",
                        "Expression": "Hotmarks.13.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "13"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Hotmarks.20.)",
                        "Count": 66,
                        "DisplayValue": "20",
                        "Expression": "Hotmarks.20.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "20"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Hotmarks.09.)",
                        "Count": 223,
                        "DisplayValue": "09",
                        "Expression": "Hotmarks.09.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "09"
                    }
                ],
                "IsSelected": false,
                "Metadata": {},
                "MultiSelectMode": "And",
                "Name": "Hotmarks",
                "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.(<!>))",
                "RemoveAction": "",
                "Type": "Aspect"
            },
            {
                "DisplayName": "주행거리",
                "Facets": [
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Mileage.r0002.)",
                        "Count": 1645,
                        "DisplayValue": "2만 km 미만",
                        "Expression": "Mileage.r0002.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "r0002"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Mileage.r0204.)",
                        "Count": 1251,
                        "DisplayValue": "2만 ~ 4만 km 미만",
                        "Expression": "Mileage.r0204.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "r0204"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Mileage.r0406.)",
                        "Count": 1111,
                        "DisplayValue": "4만 ~ 6만 km 미만",
                        "Expression": "Mileage.r0406.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "r0406"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Mileage.r0608.)",
                        "Count": 1050,
                        "DisplayValue": "6만 ~ 8만 km 미만",
                        "Expression": "Mileage.r0608.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "r0608"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Mileage.r0810.)",
                        "Count": 1053,
                        "DisplayValue": "8만 ~ 10만 km 미만",
                        "Expression": "Mileage.r0810.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "r0810"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Mileage.r1099.)",
                        "Count": 3114,
                        "DisplayValue": "10만 km 이상",
                        "Expression": "Mileage.r1099.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "r1099"
                    }
                ],
                "IsSelected": false,
                "Metadata": {},
                "MultiSelectMode": "Or",
                "Name": "Mileage",
                "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.(<!>))",
                "RemoveAction": "",
                "Type": "Aspect"
            },
            {
                "DisplayName": "색상",
                "Facets": [
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Color.흰색.)",
                        "Count": 3284,
                        "DisplayValue": "흰색",
                        "Expression": "Color.흰색.",
                        "IsSelected": false,
                        "Metadata": {
                            "Expression": [
                                "#ffffff;#ffffff"
                            ]
                        },
                        "Value": "흰색"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Color.검정색.)",
                        "Count": 2060,
                        "DisplayValue": "검정색",
                        "Expression": "Color.검정색.",
                        "IsSelected": false,
                        "Metadata": {
                            "Expression": [
                                "#000000;#000000"
                            ]
                        },
                        "Value": "검정색"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Color.쥐색.)",
                        "Count": 1516,
                        "DisplayValue": "쥐색",
                        "Expression": "Color.쥐색.",
                        "IsSelected": false,
                        "Metadata": {
                            "Expression": [
                                "#585A59;#585A59"
                            ]
                        },
                        "Value": "쥐색"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Color.청색.)",
                        "Count": 919,
                        "DisplayValue": "청색",
                        "Expression": "Color.청색.",
                        "IsSelected": false,
                        "Metadata": {
                            "Expression": [
                                "#124280;#124280"
                            ]
                        },
                        "Value": "청색"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Color.은색.)",
                        "Count": 677,
                        "DisplayValue": "은색",
                        "Expression": "Color.은색.",
                        "IsSelected": false,
                        "Metadata": {
                            "Expression": [
                                "#C0C0C0;#C0C0C0"
                            ]
                        },
                        "Value": "은색"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Color.은회색.)",
                        "Count": 215,
                        "DisplayValue": "은회색",
                        "Expression": "Color.은회색.",
                        "IsSelected": false,
                        "Metadata": {
                            "Expression": [
                                "#D3D3D3;#D3D3D3"
                            ]
                        },
                        "Value": "은회색"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Color.빨간색.)",
                        "Count": 122,
                        "DisplayValue": "빨간색",
                        "Expression": "Color.빨간색.",
                        "IsSelected": false,
                        "Metadata": {
                            "Expression": [
                                "#ff0000;#ff0000"
                            ]
                        },
                        "Value": "빨간색"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Color.주황색.)",
                        "Count": 49,
                        "DisplayValue": "주황색",
                        "Expression": "Color.주황색.",
                        "IsSelected": false,
                        "Metadata": {
                            "Expression": [
                                "#A94828;#A94828"
                            ]
                        },
                        "Value": "주황색"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Color.갈색.)",
                        "Count": 42,
                        "DisplayValue": "갈색",
                        "Expression": "Color.갈색.",
                        "IsSelected": false,
                        "Metadata": {
                            "Expression": [
                                "#3D3624;#3D3624"
                            ]
                        },
                        "Value": "갈색"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Color.하늘색.)",
                        "Count": 39,
                        "DisplayValue": "하늘색",
                        "Expression": "Color.하늘색.",
                        "IsSelected": false,
                        "Metadata": {
                            "Expression": [
                                "#75919C;#75919C"
                            ]
                        },
                        "Value": "하늘색"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Color.담녹색.)",
                        "Count": 32,
                        "DisplayValue": "담녹색",
                        "Expression": "Color.담녹색.",
                        "IsSelected": false,
                        "Metadata": {
                            "Expression": [
                                "#1D444B;#1D444B"
                            ]
                        },
                        "Value": "담녹색"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Color.은하색.)",
                        "Count": 31,
                        "DisplayValue": "은하색",
                        "Expression": "Color.은하색.",
                        "IsSelected": false,
                        "Metadata": {
                            "Expression": [
                                "#A6B2B0;#A6B2B0"
                            ]
                        },
                        "Value": "은하색"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Color.연금색.)",
                        "Count": 30,
                        "DisplayValue": "연금색",
                        "Expression": "Color.연금색.",
                        "IsSelected": false,
                        "Metadata": {
                            "Expression": [
                                "#8E8574;#8E8574"
                            ]
                        },
                        "Value": "연금색"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Color.검정투톤.)",
                        "Count": 28,
                        "DisplayValue": "검정투톤",
                        "Expression": "Color.검정투톤.",
                        "IsSelected": false,
                        "Metadata": {
                            "Expression": [
                                "#000000;#464741"
                            ]
                        },
                        "Value": "검정투톤"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Color.명은색.)",
                        "Count": 27,
                        "DisplayValue": "명은색",
                        "Expression": "Color.명은색.",
                        "IsSelected": false,
                        "Metadata": {
                            "Expression": [
                                "#CFD8E7;#CFD8E7"
                            ]
                        },
                        "Value": "명은색"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Color.갈대색.)",
                        "Count": 25,
                        "DisplayValue": "갈대색",
                        "Expression": "Color.갈대색.",
                        "IsSelected": false,
                        "Metadata": {
                            "Expression": [
                                "#808275;#808275"
                            ]
                        },
                        "Value": "갈대색"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Color.노란색.)",
                        "Count": 20,
                        "DisplayValue": "노란색",
                        "Expression": "Color.노란색.",
                        "IsSelected": false,
                        "Metadata": {
                            "Expression": [
                                "#ffff00;#ffff00"
                            ]
                        },
                        "Value": "노란색"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Color.금색.)",
                        "Count": 19,
                        "DisplayValue": "금색",
                        "Expression": "Color.금색.",
                        "IsSelected": false,
                        "Metadata": {
                            "Expression": [
                                "#837538;#837538"
                            ]
                        },
                        "Value": "금색"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Color.진주색.)",
                        "Count": 18,
                        "DisplayValue": "진주색",
                        "Expression": "Color.진주색.",
                        "IsSelected": false,
                        "Metadata": {
                            "Expression": [
                                "#FFFAFA;#FFFAFA"
                            ]
                        },
                        "Value": "진주색"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Color.보라색.)",
                        "Count": 12,
                        "DisplayValue": "보라색",
                        "Expression": "Color.보라색.",
                        "IsSelected": false,
                        "Metadata": {
                            "Expression": [
                                "#46293B;#46293B"
                            ]
                        },
                        "Value": "보라색"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Color.은색투톤.)",
                        "Count": 12,
                        "DisplayValue": "은색투톤",
                        "Expression": "Color.은색투톤.",
                        "IsSelected": false,
                        "Metadata": {
                            "Expression": [
                                "#c0c0c0;#464741"
                            ]
                        },
                        "Value": "은색투톤"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Color.녹색.)",
                        "Count": 11,
                        "DisplayValue": "녹색",
                        "Expression": "Color.녹색.",
                        "IsSelected": false,
                        "Metadata": {
                            "Expression": [
                                "#00cc00;#00cc00"
                            ]
                        },
                        "Value": "녹색"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Color.청옥색.)",
                        "Count": 11,
                        "DisplayValue": "청옥색",
                        "Expression": "Color.청옥색.",
                        "IsSelected": false,
                        "Metadata": {
                            "Expression": [
                                "#1F7D7C;#1F7D7C"
                            ]
                        },
                        "Value": "청옥색"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Color.자주색.)",
                        "Count": 9,
                        "DisplayValue": "자주색",
                        "Expression": "Color.자주색.",
                        "IsSelected": false,
                        "Metadata": {
                            "Expression": [
                                "#800080;#800080"
                            ]
                        },
                        "Value": "자주색"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Color.흰색투톤.)",
                        "Count": 7,
                        "DisplayValue": "흰색투톤",
                        "Expression": "Color.흰색투톤.",
                        "IsSelected": false,
                        "Metadata": {
                            "Expression": [
                                "#ffffff;#464741"
                            ]
                        },
                        "Value": "흰색투톤"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Color.연두색.)",
                        "Count": 5,
                        "DisplayValue": "연두색",
                        "Expression": "Color.연두색.",
                        "IsSelected": false,
                        "Metadata": {
                            "Expression": [
                                "#9AB95C;#9AB95C"
                            ]
                        },
                        "Value": "연두색"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Color.갈색투톤.)",
                        "Count": 1,
                        "DisplayValue": "갈색투톤",
                        "Expression": "Color.갈색투톤.",
                        "IsSelected": false,
                        "Metadata": {
                            "Expression": [
                                "#3D3624;#464741"
                            ]
                        },
                        "Value": "갈색투톤"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Color.금색투톤.)",
                        "Count": 1,
                        "DisplayValue": "금색투톤",
                        "Expression": "Color.금색투톤.",
                        "IsSelected": false,
                        "Metadata": {
                            "Expression": [
                                "#837538;#464741"
                            ]
                        },
                        "Value": "금색투톤"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Color.검은색.)",
                        "Count": 0,
                        "DisplayValue": "검은색",
                        "Expression": "Color.검은색.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "검은색"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Color.분홍색.)",
                        "Count": 0,
                        "DisplayValue": "분홍색",
                        "Expression": "Color.분홍색.",
                        "IsSelected": false,
                        "Metadata": {
                            "Expression": [
                                "#EECACE;#EECACE"
                            ]
                        },
                        "Value": "분홍색"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Color.진주투톤.)",
                        "Count": 0,
                        "DisplayValue": "진주투톤",
                        "Expression": "Color.진주투톤.",
                        "IsSelected": false,
                        "Metadata": {
                            "Expression": [
                                "#F7F7F5;#464741"
                            ]
                        },
                        "Value": "진주투톤"
                    }
                ],
                "IsSelected": false,
                "Metadata": {},
                "MultiSelectMode": "Or",
                "Name": "Color",
                "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.(<!>))",
                "RemoveAction": "",
                "Type": "Aspect"
            },
            {
                "DisplayName": "옵션",
                "Facets": [
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.선루프.)",
                        "Count": 8123,
                        "DisplayValue": "선루프",
                        "Expression": "Options.선루프.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "010"
                            ],
                            "Expression": [
                                "외관/내장"
                            ],
                            "Ordering": [
                                1
                            ],
                            "Type": [
                                "01"
                            ]
                        },
                        "Value": "선루프"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.헤드램프(HID_).)",
                        "Count": 2707,
                        "DisplayValue": "헤드램프(HID)",
                        "Expression": "Options.헤드램프(HID_).",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "029"
                            ],
                            "Expression": [
                                "외관/내장"
                            ],
                            "Ordering": [
                                2
                            ],
                            "Type": [
                                "01"
                            ]
                        },
                        "Value": "헤드램프(HID)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.헤드램프(LED_).)",
                        "Count": 5574,
                        "DisplayValue": "헤드램프(LED)",
                        "Expression": "Options.헤드램프(LED_).",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "075"
                            ],
                            "Expression": [
                                "외관/내장"
                            ],
                            "Ordering": [
                                3
                            ],
                            "Type": [
                                "01"
                            ]
                        },
                        "Value": "헤드램프(LED)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.파워 전동 트렁크.)",
                        "Count": 6116,
                        "DisplayValue": "파워 전동 트렁크",
                        "Expression": "Options.파워 전동 트렁크.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "059"
                            ],
                            "Expression": [
                                "외관/내장"
                            ],
                            "Ordering": [
                                4
                            ],
                            "Type": [
                                "01"
                            ]
                        },
                        "Value": "파워 전동 트렁크"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.고스트 도어 클로징.)",
                        "Count": 2488,
                        "DisplayValue": "고스트 도어 클로징",
                        "Expression": "Options.고스트 도어 클로징.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "080"
                            ],
                            "Expression": [
                                "외관/내장"
                            ],
                            "Ordering": [
                                5
                            ],
                            "Type": [
                                "01"
                            ]
                        },
                        "Value": "고스트 도어 클로징"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.전동접이 사이드 미러.)",
                        "Count": 9063,
                        "DisplayValue": "전동접이 사이드 미러",
                        "Expression": "Options.전동접이 사이드 미러.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "024"
                            ],
                            "Expression": [
                                "외관/내장"
                            ],
                            "Ordering": [
                                6
                            ],
                            "Type": [
                                "01"
                            ]
                        },
                        "Value": "전동접이 사이드 미러"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.알루미늄 휠.)",
                        "Count": 9088,
                        "DisplayValue": "알루미늄 휠",
                        "Expression": "Options.알루미늄 휠.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "017"
                            ],
                            "Expression": [
                                "외관/내장"
                            ],
                            "Ordering": [
                                7
                            ],
                            "Type": [
                                "01"
                            ]
                        },
                        "Value": "알루미늄 휠"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.루프랙.)",
                        "Count": 2159,
                        "DisplayValue": "루프랙",
                        "Expression": "Options.루프랙.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "062"
                            ],
                            "Expression": [
                                "외관/내장"
                            ],
                            "Ordering": [
                                8
                            ],
                            "Type": [
                                "01"
                            ]
                        },
                        "Value": "루프랙"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.열선 스티어링 휠.)",
                        "Count": 6718,
                        "DisplayValue": "열선 스티어링 휠",
                        "Expression": "Options.열선 스티어링 휠.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "082"
                            ],
                            "Expression": [
                                "외관/내장"
                            ],
                            "Ordering": [
                                9
                            ],
                            "Type": [
                                "01"
                            ]
                        },
                        "Value": "열선 스티어링 휠"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.전동 조절 스티어링 휠.)",
                        "Count": 4921,
                        "DisplayValue": "전동 조절 스티어링 휠",
                        "Expression": "Options.전동 조절 스티어링 휠.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "083"
                            ],
                            "Expression": [
                                "외관/내장"
                            ],
                            "Ordering": [
                                10
                            ],
                            "Type": [
                                "01"
                            ]
                        },
                        "Value": "전동 조절 스티어링 휠"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.패들 시프트.)",
                        "Count": 5709,
                        "DisplayValue": "패들 시프트",
                        "Expression": "Options.패들 시프트.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "084"
                            ],
                            "Expression": [
                                "외관/내장"
                            ],
                            "Ordering": [
                                11
                            ],
                            "Type": [
                                "01"
                            ]
                        },
                        "Value": "패들 시프트"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.스티어링 휠 리모컨.)",
                        "Count": 8990,
                        "DisplayValue": "스티어링 휠 리모컨",
                        "Expression": "Options.스티어링 휠 리모컨.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "031"
                            ],
                            "Expression": [
                                "외관/내장"
                            ],
                            "Ordering": [
                                12
                            ],
                            "Type": [
                                "01"
                            ]
                        },
                        "Value": "스티어링 휠 리모컨"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.ECM 룸미러.)",
                        "Count": 8965,
                        "DisplayValue": "ECM 룸미러",
                        "Expression": "Options.ECM 룸미러.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "030"
                            ],
                            "Expression": [
                                "외관/내장"
                            ],
                            "Ordering": [
                                13
                            ],
                            "Type": [
                                "01"
                            ]
                        },
                        "Value": "ECM 룸미러"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.하이패스.)",
                        "Count": 5101,
                        "DisplayValue": "하이패스",
                        "Expression": "Options.하이패스.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "074"
                            ],
                            "Expression": [
                                "외관/내장"
                            ],
                            "Ordering": [
                                14
                            ],
                            "Type": [
                                "01"
                            ]
                        },
                        "Value": "하이패스"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.파워 도어록.)",
                        "Count": 9042,
                        "DisplayValue": "파워 도어록",
                        "Expression": "Options.파워 도어록.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "006"
                            ],
                            "Expression": [
                                "외관/내장"
                            ],
                            "Ordering": [
                                15
                            ],
                            "Type": [
                                "01"
                            ]
                        },
                        "Value": "파워 도어록"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.파워 스티어링 휠.)",
                        "Count": 9077,
                        "DisplayValue": "파워 스티어링 휠",
                        "Expression": "Options.파워 스티어링 휠.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "008"
                            ],
                            "Expression": [
                                "외관/내장"
                            ],
                            "Ordering": [
                                16
                            ],
                            "Type": [
                                "01"
                            ]
                        },
                        "Value": "파워 스티어링 휠"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.파워 윈도우.)",
                        "Count": 9090,
                        "DisplayValue": "파워 윈도우",
                        "Expression": "Options.파워 윈도우.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "007"
                            ],
                            "Expression": [
                                "외관/내장"
                            ],
                            "Ordering": [
                                17
                            ],
                            "Type": [
                                "01"
                            ]
                        },
                        "Value": "파워 윈도우"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.에어백(운전석_).)",
                        "Count": 9087,
                        "DisplayValue": "에어백(운전석)",
                        "Expression": "Options.에어백(운전석_).",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "026"
                            ],
                            "Expression": [
                                "안전"
                            ],
                            "Ordering": [
                                1
                            ],
                            "Type": [
                                "02"
                            ]
                        },
                        "Value": "에어백(운전석)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.에어백(동승석_).)",
                        "Count": 9055,
                        "DisplayValue": "에어백(동승석)",
                        "Expression": "Options.에어백(동승석_).",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "027"
                            ],
                            "Expression": [
                                "안전"
                            ],
                            "Ordering": [
                                2
                            ],
                            "Type": [
                                "02"
                            ]
                        },
                        "Value": "에어백(동승석)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.에어백(사이드_).)",
                        "Count": 9029,
                        "DisplayValue": "에어백(사이드)",
                        "Expression": "Options.에어백(사이드_).",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "020"
                            ],
                            "Expression": [
                                "안전"
                            ],
                            "Ordering": [
                                3
                            ],
                            "Type": [
                                "02"
                            ]
                        },
                        "Value": "에어백(사이드)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.에어백(커튼_).)",
                        "Count": 8603,
                        "DisplayValue": "에어백(커튼)",
                        "Expression": "Options.에어백(커튼_).",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "056"
                            ],
                            "Expression": [
                                "안전"
                            ],
                            "Ordering": [
                                4
                            ],
                            "Type": [
                                "02"
                            ]
                        },
                        "Value": "에어백(커튼)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.브레이크 잠김 방지(ABS_).)",
                        "Count": 9083,
                        "DisplayValue": "브레이크 잠김 방지(ABS)",
                        "Expression": "Options.브레이크 잠김 방지(ABS_).",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "001"
                            ],
                            "Expression": [
                                "안전"
                            ],
                            "Ordering": [
                                5
                            ],
                            "Type": [
                                "02"
                            ]
                        },
                        "Value": "브레이크 잠김 방지(ABS)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.미끄럼 방지(TCS_).)",
                        "Count": 9034,
                        "DisplayValue": "미끄럼 방지(TCS)",
                        "Expression": "Options.미끄럼 방지(TCS_).",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "019"
                            ],
                            "Expression": [
                                "안전"
                            ],
                            "Ordering": [
                                6
                            ],
                            "Type": [
                                "02"
                            ]
                        },
                        "Value": "미끄럼 방지(TCS)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.차체자세 제어장치(ESC_).)",
                        "Count": 9022,
                        "DisplayValue": "차체자세 제어장치(ESC)",
                        "Expression": "Options.차체자세 제어장치(ESC_).",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "055"
                            ],
                            "Expression": [
                                "안전"
                            ],
                            "Ordering": [
                                7
                            ],
                            "Type": [
                                "02"
                            ]
                        },
                        "Value": "차체자세 제어장치(ESC)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.타이어 공기압센서(TPMS_).)",
                        "Count": 8974,
                        "DisplayValue": "타이어 공기압센서(TPMS)",
                        "Expression": "Options.타이어 공기압센서(TPMS_).",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "033"
                            ],
                            "Expression": [
                                "안전"
                            ],
                            "Ordering": [
                                8
                            ],
                            "Type": [
                                "02"
                            ]
                        },
                        "Value": "타이어 공기압센서(TPMS)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.차선이탈 경보 시스템(LDWS_).)",
                        "Count": 5614,
                        "DisplayValue": "차선이탈 경보 시스템(LDWS)",
                        "Expression": "Options.차선이탈 경보 시스템(LDWS_).",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "088"
                            ],
                            "Expression": [
                                "안전"
                            ],
                            "Ordering": [
                                9
                            ],
                            "Type": [
                                "02"
                            ]
                        },
                        "Value": "차선이탈 경보 시스템(LDWS)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.전자제어 서스펜션(ECS_).)",
                        "Count": 2037,
                        "DisplayValue": "전자제어 서스펜션(ECS)",
                        "Expression": "Options.전자제어 서스펜션(ECS_).",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "002"
                            ],
                            "Expression": [
                                "안전"
                            ],
                            "Ordering": [
                                10
                            ],
                            "Type": [
                                "02"
                            ]
                        },
                        "Value": "전자제어 서스펜션(ECS)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.주차감지센서(전방_).)",
                        "Count": 8733,
                        "DisplayValue": "주차감지센서(전방)",
                        "Expression": "Options.주차감지센서(전방_).",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "085"
                            ],
                            "Expression": [
                                "안전"
                            ],
                            "Ordering": [
                                11
                            ],
                            "Type": [
                                "02"
                            ]
                        },
                        "Value": "주차감지센서(전방)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.주차감지센서(후방_).)",
                        "Count": 9019,
                        "DisplayValue": "주차감지센서(후방)",
                        "Expression": "Options.주차감지센서(후방_).",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "032"
                            ],
                            "Expression": [
                                "안전"
                            ],
                            "Ordering": [
                                12
                            ],
                            "Type": [
                                "02"
                            ]
                        },
                        "Value": "주차감지센서(후방)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.후측방 경보 시스템.)",
                        "Count": 4528,
                        "DisplayValue": "후측방 경보 시스템",
                        "Expression": "Options.후측방 경보 시스템.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "086"
                            ],
                            "Expression": [
                                "안전"
                            ],
                            "Ordering": [
                                13
                            ],
                            "Type": [
                                "02"
                            ]
                        },
                        "Value": "후측방 경보 시스템"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.후방 카메라.)",
                        "Count": 8658,
                        "DisplayValue": "후방 카메라",
                        "Expression": "Options.후방 카메라.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "058"
                            ],
                            "Expression": [
                                "안전"
                            ],
                            "Ordering": [
                                14
                            ],
                            "Type": [
                                "02"
                            ]
                        },
                        "Value": "후방 카메라"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.360도 어라운드 뷰.)",
                        "Count": 4631,
                        "DisplayValue": "360도 어라운드 뷰",
                        "Expression": "Options.360도 어라운드 뷰.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "087"
                            ],
                            "Expression": [
                                "안전"
                            ],
                            "Ordering": [
                                15
                            ],
                            "Type": [
                                "02"
                            ]
                        },
                        "Value": "360도 어라운드 뷰"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.크루즈 컨트롤(일반_).)",
                        "Count": 4112,
                        "DisplayValue": "크루즈 컨트롤(일반)",
                        "Expression": "Options.크루즈 컨트롤(일반_).",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "068"
                            ],
                            "Expression": [
                                "편의/멀티미디어"
                            ],
                            "Ordering": [
                                1
                            ],
                            "Type": [
                                "03"
                            ]
                        },
                        "Value": "크루즈 컨트롤(일반)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.크루즈 컨트롤(어댑티브_).)",
                        "Count": 3995,
                        "DisplayValue": "크루즈 컨트롤(어댑티브)",
                        "Expression": "Options.크루즈 컨트롤(어댑티브_).",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "079"
                            ],
                            "Expression": [
                                "편의/멀티미디어"
                            ],
                            "Ordering": [
                                2
                            ],
                            "Type": [
                                "03"
                            ]
                        },
                        "Value": "크루즈 컨트롤(어댑티브)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.헤드업 디스플레이(HUD_).)",
                        "Count": 7279,
                        "DisplayValue": "헤드업 디스플레이(HUD)",
                        "Expression": "Options.헤드업 디스플레이(HUD_).",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "095"
                            ],
                            "Expression": [
                                "편의/멀티미디어"
                            ],
                            "Ordering": [
                                3
                            ],
                            "Type": [
                                "03"
                            ]
                        },
                        "Value": "헤드업 디스플레이(HUD)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.전자식 주차브레이크(EPB_).)",
                        "Count": 6307,
                        "DisplayValue": "전자식 주차브레이크(EPB)",
                        "Expression": "Options.전자식 주차브레이크(EPB_).",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "094"
                            ],
                            "Expression": [
                                "편의/멀티미디어"
                            ],
                            "Ordering": [
                                4
                            ],
                            "Type": [
                                "03"
                            ]
                        },
                        "Value": "전자식 주차브레이크(EPB)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.자동 에어컨.)",
                        "Count": 8899,
                        "DisplayValue": "자동 에어컨",
                        "Expression": "Options.자동 에어컨.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "023"
                            ],
                            "Expression": [
                                "편의/멀티미디어"
                            ],
                            "Ordering": [
                                5
                            ],
                            "Type": [
                                "03"
                            ]
                        },
                        "Value": "자동 에어컨"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.스마트키.)",
                        "Count": 8720,
                        "DisplayValue": "스마트키",
                        "Expression": "Options.스마트키.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "057"
                            ],
                            "Expression": [
                                "편의/멀티미디어"
                            ],
                            "Ordering": [
                                6
                            ],
                            "Type": [
                                "03"
                            ]
                        },
                        "Value": "스마트키"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.무선도어 잠금장치.)",
                        "Count": 9038,
                        "DisplayValue": "무선도어 잠금장치",
                        "Expression": "Options.무선도어 잠금장치.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "015"
                            ],
                            "Expression": [
                                "편의/멀티미디어"
                            ],
                            "Ordering": [
                                7
                            ],
                            "Type": [
                                "03"
                            ]
                        },
                        "Value": "무선도어 잠금장치"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.레인센서.)",
                        "Count": 8998,
                        "DisplayValue": "레인센서",
                        "Expression": "Options.레인센서.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "081"
                            ],
                            "Expression": [
                                "편의/멀티미디어"
                            ],
                            "Ordering": [
                                8
                            ],
                            "Type": [
                                "03"
                            ]
                        },
                        "Value": "레인센서"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.오토 라이트.)",
                        "Count": 8999,
                        "DisplayValue": "오토 라이트",
                        "Expression": "Options.오토 라이트.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "097"
                            ],
                            "Expression": [
                                "편의/멀티미디어"
                            ],
                            "Ordering": [
                                9
                            ],
                            "Type": [
                                "03"
                            ]
                        },
                        "Value": "오토 라이트"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.커튼/블라인드(뒷좌석_).)",
                        "Count": 2975,
                        "DisplayValue": "커튼/블라인드(뒷좌석)",
                        "Expression": "Options.커튼/블라인드(뒷좌석_).",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "092"
                            ],
                            "Expression": [
                                "편의/멀티미디어"
                            ],
                            "Ordering": [
                                10
                            ],
                            "Type": [
                                "03"
                            ]
                        },
                        "Value": "커튼/블라인드(뒷좌석)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.커튼/블라인드(후방_).)",
                        "Count": 1834,
                        "DisplayValue": "커튼/블라인드(후방)",
                        "Expression": "Options.커튼/블라인드(후방_).",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "093"
                            ],
                            "Expression": [
                                "편의/멀티미디어"
                            ],
                            "Ordering": [
                                11
                            ],
                            "Type": [
                                "03"
                            ]
                        },
                        "Value": "커튼/블라인드(후방)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.내비게이션.)",
                        "Count": 8586,
                        "DisplayValue": "내비게이션",
                        "Expression": "Options.내비게이션.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "005"
                            ],
                            "Expression": [
                                "편의/멀티미디어"
                            ],
                            "Ordering": [
                                12
                            ],
                            "Type": [
                                "03"
                            ]
                        },
                        "Value": "내비게이션"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.앞좌석 AV 모니터.)",
                        "Count": 7450,
                        "DisplayValue": "앞좌석 AV 모니터",
                        "Expression": "Options.앞좌석 AV 모니터.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "004"
                            ],
                            "Expression": [
                                "편의/멀티미디어"
                            ],
                            "Ordering": [
                                13
                            ],
                            "Type": [
                                "03"
                            ]
                        },
                        "Value": "앞좌석 AV 모니터"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.뒷좌석 AV 모니터.)",
                        "Count": 840,
                        "DisplayValue": "뒷좌석 AV 모니터",
                        "Expression": "Options.뒷좌석 AV 모니터.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "054"
                            ],
                            "Expression": [
                                "편의/멀티미디어"
                            ],
                            "Ordering": [
                                14
                            ],
                            "Type": [
                                "03"
                            ]
                        },
                        "Value": "뒷좌석 AV 모니터"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.블루투스.)",
                        "Count": 8712,
                        "DisplayValue": "블루투스",
                        "Expression": "Options.블루투스.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "096"
                            ],
                            "Expression": [
                                "편의/멀티미디어"
                            ],
                            "Ordering": [
                                15
                            ],
                            "Type": [
                                "03"
                            ]
                        },
                        "Value": "블루투스"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.CD 플레이어.)",
                        "Count": 5655,
                        "DisplayValue": "CD 플레이어",
                        "Expression": "Options.CD 플레이어.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "003"
                            ],
                            "Expression": [
                                "편의/멀티미디어"
                            ],
                            "Ordering": [
                                16
                            ],
                            "Type": [
                                "03"
                            ]
                        },
                        "Value": "CD 플레이어"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.USB 단자.)",
                        "Count": 8661,
                        "DisplayValue": "USB 단자",
                        "Expression": "Options.USB 단자.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "072"
                            ],
                            "Expression": [
                                "편의/멀티미디어"
                            ],
                            "Ordering": [
                                17
                            ],
                            "Type": [
                                "03"
                            ]
                        },
                        "Value": "USB 단자"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.AUX 단자.)",
                        "Count": 4010,
                        "DisplayValue": "AUX 단자",
                        "Expression": "Options.AUX 단자.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "071"
                            ],
                            "Expression": [
                                "편의/멀티미디어"
                            ],
                            "Ordering": [
                                18
                            ],
                            "Type": [
                                "03"
                            ]
                        },
                        "Value": "AUX 단자"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.가죽시트.)",
                        "Count": 8782,
                        "DisplayValue": "가죽시트",
                        "Expression": "Options.가죽시트.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "014"
                            ],
                            "Expression": [
                                "시트"
                            ],
                            "Ordering": [
                                1
                            ],
                            "Type": [
                                "04"
                            ]
                        },
                        "Value": "가죽시트"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.전동시트(운전석_).)",
                        "Count": 9012,
                        "DisplayValue": "전동시트(운전석)",
                        "Expression": "Options.전동시트(운전석_).",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "021"
                            ],
                            "Expression": [
                                "시트"
                            ],
                            "Ordering": [
                                2
                            ],
                            "Type": [
                                "04"
                            ]
                        },
                        "Value": "전동시트(운전석)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.전동시트(동승석_).)",
                        "Count": 8947,
                        "DisplayValue": "전동시트(동승석)",
                        "Expression": "Options.전동시트(동승석_).",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "035"
                            ],
                            "Expression": [
                                "시트"
                            ],
                            "Ordering": [
                                3
                            ],
                            "Type": [
                                "04"
                            ]
                        },
                        "Value": "전동시트(동승석)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.전동시트(뒷좌석_).)",
                        "Count": 1146,
                        "DisplayValue": "전동시트(뒷좌석)",
                        "Expression": "Options.전동시트(뒷좌석_).",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "089"
                            ],
                            "Expression": [
                                "시트"
                            ],
                            "Ordering": [
                                4
                            ],
                            "Type": [
                                "04"
                            ]
                        },
                        "Value": "전동시트(뒷좌석)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.열선시트(앞좌석_).)",
                        "Count": 9076,
                        "DisplayValue": "열선시트(앞좌석)",
                        "Expression": "Options.열선시트(앞좌석_).",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "022"
                            ],
                            "Expression": [
                                "시트"
                            ],
                            "Ordering": [
                                5
                            ],
                            "Type": [
                                "04"
                            ]
                        },
                        "Value": "열선시트(앞좌석)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.열선시트(뒷좌석_).)",
                        "Count": 6052,
                        "DisplayValue": "열선시트(뒷좌석)",
                        "Expression": "Options.열선시트(뒷좌석_).",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "063"
                            ],
                            "Expression": [
                                "시트"
                            ],
                            "Ordering": [
                                6
                            ],
                            "Type": [
                                "04"
                            ]
                        },
                        "Value": "열선시트(뒷좌석)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.메모리 시트(운전석_).)",
                        "Count": 8733,
                        "DisplayValue": "메모리 시트(운전석)",
                        "Expression": "Options.메모리 시트(운전석_).",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "051"
                            ],
                            "Expression": [
                                "시트"
                            ],
                            "Ordering": [
                                7
                            ],
                            "Type": [
                                "04"
                            ]
                        },
                        "Value": "메모리 시트(운전석)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.메모리 시트(동승석_).)",
                        "Count": 3504,
                        "DisplayValue": "메모리 시트(동승석)",
                        "Expression": "Options.메모리 시트(동승석_).",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "078"
                            ],
                            "Expression": [
                                "시트"
                            ],
                            "Ordering": [
                                8
                            ],
                            "Type": [
                                "04"
                            ]
                        },
                        "Value": "메모리 시트(동승석)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.통풍시트(운전석_).)",
                        "Count": 3778,
                        "DisplayValue": "통풍시트(운전석)",
                        "Expression": "Options.통풍시트(운전석_).",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "034"
                            ],
                            "Expression": [
                                "시트"
                            ],
                            "Ordering": [
                                9
                            ],
                            "Type": [
                                "04"
                            ]
                        },
                        "Value": "통풍시트(운전석)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.통풍시트(동승석_).)",
                        "Count": 3742,
                        "DisplayValue": "통풍시트(동승석)",
                        "Expression": "Options.통풍시트(동승석_).",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "077"
                            ],
                            "Expression": [
                                "시트"
                            ],
                            "Ordering": [
                                10
                            ],
                            "Type": [
                                "04"
                            ]
                        },
                        "Value": "통풍시트(동승석)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.통풍시트(뒷좌석_).)",
                        "Count": 683,
                        "DisplayValue": "통풍시트(뒷좌석)",
                        "Expression": "Options.통풍시트(뒷좌석_).",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "090"
                            ],
                            "Expression": [
                                "시트"
                            ],
                            "Ordering": [
                                11
                            ],
                            "Type": [
                                "04"
                            ]
                        },
                        "Value": "통풍시트(뒷좌석)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Options.마사지 시트.)",
                        "Count": 640,
                        "DisplayValue": "마사지 시트",
                        "Expression": "Options.마사지 시트.",
                        "IsSelected": false,
                        "Metadata": {
                            "Code": [
                                "091"
                            ],
                            "Expression": [
                                "시트"
                            ],
                            "Ordering": [
                                12
                            ],
                            "Type": [
                                "04"
                            ]
                        },
                        "Value": "마사지 시트"
                    }
                ],
                "IsSelected": false,
                "Metadata": {},
                "MultiSelectMode": "And",
                "Name": "Options",
                "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.(<!>))",
                "RemoveAction": "",
                "Type": "Aspect"
            },
            {
                "DisplayName": "광고구분",
                "Facets": [
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.AdType.E.)",
                        "Count": 957,
                        "DisplayValue": "모바일프리미엄",
                        "Expression": "AdType.E.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "E"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.AdType.D.)",
                        "Count": 1184,
                        "DisplayValue": "파워팩",
                        "Expression": "AdType.D.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "D"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.AdType.G.)",
                        "Count": 1122,
                        "DisplayValue": "자동업데이트",
                        "Expression": "AdType.G.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "G"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.AdType.F.)",
                        "Count": 8,
                        "DisplayValue": "모바일우대",
                        "Expression": "AdType.F.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "F"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.AdType.A.)",
                        "Count": 1192,
                        "DisplayValue": "사진우대",
                        "Expression": "AdType.A.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "A"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.AdType.C.)",
                        "Count": 1253,
                        "DisplayValue": "핫마크",
                        "Expression": "AdType.C.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "C"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.AdType.B.)",
                        "Count": 1439,
                        "DisplayValue": "우대등록",
                        "Expression": "AdType.B.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "B"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.AdType.H.)",
                        "Count": 405,
                        "DisplayValue": "오토체인지",
                        "Expression": "AdType.H.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "H"
                    }
                ],
                "IsSelected": false,
                "Metadata": {},
                "MultiSelectMode": "Or",
                "Name": "AdType",
                "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.(<!>))",
                "RemoveAction": "",
                "Type": "Aspect"
            },
            {
                "DisplayName": "사고구분",
                "Facets": [
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Accident.F.)",
                        "Count": 1626,
                        "DisplayValue": "F",
                        "Expression": "Accident.F.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "F"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Accident.N.)",
                        "Count": 5595,
                        "DisplayValue": "N",
                        "Expression": "Accident.N.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "N"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Accident.Y.)",
                        "Count": 413,
                        "DisplayValue": "Y",
                        "Expression": "Accident.Y.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "Y"
                    }
                ],
                "IsSelected": false,
                "Metadata": {},
                "MultiSelectMode": "Or",
                "Name": "Accident",
                "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.(<!>))",
                "RemoveAction": "",
                "Type": "Aspect"
            },
            {
                "DisplayName": "리스구분",
                "Facets": [
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Lease.1.)",
                        "Count": 734,
                        "DisplayValue": "1",
                        "Expression": "Lease.1.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "1"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Lease.2.)",
                        "Count": 595,
                        "DisplayValue": "2",
                        "Expression": "Lease.2.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "2"
                    }
                ],
                "IsSelected": false,
                "Metadata": {},
                "MultiSelectMode": "Or",
                "Name": "Lease",
                "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.(<!>))",
                "RemoveAction": "",
                "Type": "Aspect"
            },
            {
                "DisplayName": "전시장",
                "Facets": [
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Exhibition.가양(도이치_).)",
                        "Count": 50,
                        "DisplayValue": "가양(도이치)",
                        "Expression": "Exhibition.가양(도이치_).",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "가양(도이치)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Exhibition.고양(바바리안_).)",
                        "Count": 75,
                        "DisplayValue": "고양(바바리안)",
                        "Expression": "Exhibition.고양(바바리안_).",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "고양(바바리안)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Exhibition.광주(코오롱_).)",
                        "Count": 15,
                        "DisplayValue": "광주(코오롱)",
                        "Expression": "Exhibition.광주(코오롱_).",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "광주(코오롱)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Exhibition.김포(바바리안_).)",
                        "Count": 52,
                        "DisplayValue": "김포(바바리안)",
                        "Expression": "Exhibition.김포(바바리안_).",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "김포(바바리안)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Exhibition.대구(코오롱_).)",
                        "Count": 26,
                        "DisplayValue": "대구(코오롱)",
                        "Expression": "Exhibition.대구(코오롱_).",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "대구(코오롱)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Exhibition.대전(코오롱_).)",
                        "Count": 14,
                        "DisplayValue": "대전(코오롱)",
                        "Expression": "Exhibition.대전(코오롱_).",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "대전(코오롱)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Exhibition.부산(동성_).)",
                        "Count": 80,
                        "DisplayValue": "부산(동성)",
                        "Expression": "Exhibition.부산(동성_).",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "부산(동성)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Exhibition.부산(코오롱_).)",
                        "Count": 12,
                        "DisplayValue": "부산(코오롱)",
                        "Expression": "Exhibition.부산(코오롱_).",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "부산(코오롱)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Exhibition.부천(코오롱_).)",
                        "Count": 29,
                        "DisplayValue": "부천(코오롱)",
                        "Expression": "Exhibition.부천(코오롱_).",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "부천(코오롱)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Exhibition.분당(한독모터스_).)",
                        "Count": 54,
                        "DisplayValue": "분당(한독모터스)",
                        "Expression": "Exhibition.분당(한독모터스_).",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "분당(한독모터스)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Exhibition.서울(코오롱_).)",
                        "Count": 38,
                        "DisplayValue": "서울(코오롱)",
                        "Expression": "Exhibition.서울(코오롱_).",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "서울(코오롱)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Exhibition.수원(도이치_).)",
                        "Count": 82,
                        "DisplayValue": "수원(도이치)",
                        "Expression": "Exhibition.수원(도이치_).",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "수원(도이치)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Exhibition.수원(한독모터스_).)",
                        "Count": 67,
                        "DisplayValue": "수원(한독모터스)",
                        "Expression": "Exhibition.수원(한독모터스_).",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "수원(한독모터스)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Exhibition.안양(삼천리모터스_).)",
                        "Count": 59,
                        "DisplayValue": "안양(삼천리모터스)",
                        "Expression": "Exhibition.안양(삼천리모터스_).",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "안양(삼천리모터스)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Exhibition.양재(도이치_).)",
                        "Count": 74,
                        "DisplayValue": "양재(도이치)",
                        "Expression": "Exhibition.양재(도이치_).",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "양재(도이치)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Exhibition.인천(바바리안_).)",
                        "Count": 73,
                        "DisplayValue": "인천(바바리안)",
                        "Expression": "Exhibition.인천(바바리안_).",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "인천(바바리안)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Exhibition.전주(내쇼날_).)",
                        "Count": 45,
                        "DisplayValue": "전주(내쇼날)",
                        "Expression": "Exhibition.전주(내쇼날_).",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "전주(내쇼날)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Exhibition.창원(동성_).)",
                        "Count": 51,
                        "DisplayValue": "창원(동성)",
                        "Expression": "Exhibition.창원(동성_).",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "창원(동성)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Exhibition.천안(삼천리_).)",
                        "Count": 56,
                        "DisplayValue": "천안(삼천리)",
                        "Expression": "Exhibition.천안(삼천리_).",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "천안(삼천리)"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Exhibition.평택(내쇼날_).)",
                        "Count": 23,
                        "DisplayValue": "평택(내쇼날)",
                        "Expression": "Exhibition.평택(내쇼날_).",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "평택(내쇼날)"
                    }
                ],
                "IsSelected": false,
                "Metadata": {},
                "MultiSelectMode": "None",
                "Name": "Exhibition",
                "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.(<!>))",
                "RemoveAction": "",
                "Type": "Aspect"
            },
            {
                "DisplayName": "제휴단지",
                "Facets": [
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.DealerShipNm.경기 SAC.)",
                        "Count": 295,
                        "DisplayValue": "경기 SAC",
                        "Expression": "DealerShipNm.경기 SAC.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "경기 SAC"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.DealerShipNm.경기 SK V1모터스.)",
                        "Count": 712,
                        "DisplayValue": "경기 SK V1모터스",
                        "Expression": "DealerShipNm.경기 SK V1모터스.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "경기 SK V1모터스"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.DealerShipNm.경기 경기매매단지.)",
                        "Count": 126,
                        "DisplayValue": "경기 경기매매단지",
                        "Expression": "DealerShipNm.경기 경기매매단지.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "경기 경기매매단지"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.DealerShipNm.경기 김포 국민차매매단지.)",
                        "Count": 400,
                        "DisplayValue": "경기 김포 국민차매매단지",
                        "Expression": "DealerShipNm.경기 김포 국민차매매단지.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "경기 김포 국민차매매단지"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.DealerShipNm.경기 도이치오토월드.)",
                        "Count": 941,
                        "DisplayValue": "경기 도이치오토월드",
                        "Expression": "DealerShipNm.경기 도이치오토월드.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "경기 도이치오토월드"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.DealerShipNm.경기 라성단지.)",
                        "Count": 26,
                        "DisplayValue": "경기 라성단지",
                        "Expression": "DealerShipNm.경기 라성단지.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "경기 라성단지"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.DealerShipNm.경기 마트단지.)",
                        "Count": 73,
                        "DisplayValue": "경기 마트단지",
                        "Expression": "DealerShipNm.경기 마트단지.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "경기 마트단지"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.DealerShipNm.경기 오토돔.)",
                        "Count": 114,
                        "DisplayValue": "경기 오토돔",
                        "Expression": "DealerShipNm.경기 오토돔.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "경기 오토돔"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.DealerShipNm.경기 오토허브.)",
                        "Count": 244,
                        "DisplayValue": "경기 오토허브",
                        "Expression": "DealerShipNm.경기 오토허브.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "경기 오토허브"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.DealerShipNm.경기 일산풍동오토갤러리.)",
                        "Count": 13,
                        "DisplayValue": "경기 일산풍동오토갤러리",
                        "Expression": "DealerShipNm.경기 일산풍동오토갤러리.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "경기 일산풍동오토갤러리"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.DealerShipNm.경남 KC월드카프라자.)",
                        "Count": 32,
                        "DisplayValue": "경남 KC월드카프라자",
                        "Expression": "DealerShipNm.경남 KC월드카프라자.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "경남 KC월드카프라자"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.DealerShipNm.대구 오토월드.)",
                        "Count": 66,
                        "DisplayValue": "대구 오토월드",
                        "Expression": "DealerShipNm.대구 오토월드.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "대구 오토월드"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.DealerShipNm.부산 1001.)",
                        "Count": 3,
                        "DisplayValue": "부산 1001",
                        "Expression": "DealerShipNm.부산 1001.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "부산 1001"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.DealerShipNm.부산 KC오토월드.)",
                        "Count": 16,
                        "DisplayValue": "부산 KC오토월드",
                        "Expression": "DealerShipNm.부산 KC오토월드.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "부산 KC오토월드"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.DealerShipNm.부산 반여강변 매매단지.)",
                        "Count": 27,
                        "DisplayValue": "부산 반여강변 매매단지",
                        "Expression": "DealerShipNm.부산 반여강변 매매단지.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "부산 반여강변 매매단지"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.DealerShipNm.부산 부산감만단지.)",
                        "Count": 61,
                        "DisplayValue": "부산 부산감만단지",
                        "Expression": "DealerShipNm.부산 부산감만단지.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "부산 부산감만단지"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.DealerShipNm.부산 사직오토랜드.)",
                        "Count": 335,
                        "DisplayValue": "부산 사직오토랜드",
                        "Expression": "DealerShipNm.부산 사직오토랜드.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "부산 사직오토랜드"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.DealerShipNm.인천 엠파크타워.)",
                        "Count": 56,
                        "DisplayValue": "인천 엠파크타워",
                        "Expression": "DealerShipNm.인천 엠파크타워.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "인천 엠파크타워"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.DealerShipNm.인천 엠파크허브.)",
                        "Count": 114,
                        "DisplayValue": "인천 엠파크허브",
                        "Expression": "DealerShipNm.인천 엠파크허브.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "인천 엠파크허브"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.DealerShipNm.인천 오토드림.)",
                        "Count": 9,
                        "DisplayValue": "인천 오토드림",
                        "Expression": "DealerShipNm.인천 오토드림.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "인천 오토드림"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.DealerShipNm.인천 주안매매단지.)",
                        "Count": 9,
                        "DisplayValue": "인천 주안매매단지",
                        "Expression": "DealerShipNm.인천 주안매매단지.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "인천 주안매매단지"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.DealerShipNm.인천 청라 오토플러스.)",
                        "Count": 0,
                        "DisplayValue": "인천 청라 오토플러스",
                        "Expression": "DealerShipNm.인천 청라 오토플러스.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "인천 청라 오토플러스"
                    }
                ],
                "IsSelected": false,
                "Metadata": {},
                "MultiSelectMode": "Or",
                "Name": "DealerShipNm",
                "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.(<!>))",
                "RemoveAction": "",
                "Type": "Aspect"
            },
            {
                "DisplayName": "복제여부",
                "Facets": [
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.ServiceCopyCar.ORIGINAL.)",
                        "Count": 7938,
                        "DisplayValue": "ORIGINAL",
                        "Expression": "ServiceCopyCar.ORIGINAL.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "ORIGINAL"
                    },
                    {
                        "Action": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.ServiceCopyCar.DUPLICATION.)",
                        "Count": 1286,
                        "DisplayValue": "DUPLICATION",
                        "Expression": "ServiceCopyCar.DUPLICATION.",
                        "IsSelected": false,
                        "Metadata": {},
                        "Value": "DUPLICATION"
                    }
                ],
                "IsSelected": false,
                "Metadata": {},
                "MultiSelectMode": "None",
                "Name": "ServiceCopyCar",
                "PlaceholderExpression": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.(<!>))",
                "RemoveAction": "",
                "Type": "Aspect"
            },
            {
                "DisplayName": "연식",
                "IsSelected": false,
                "LowerPlaceholder": "<!lower>",
                "Name": "Year",
                "QueryWithPlaceholder": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Year.range(<!lower>..<!upper>).)",
                "Type": "RangeAction",
                "UpperPlaceholder": "<!upper>"
            },
            {
                "DisplayName": "가격",
                "IsSelected": false,
                "LowerPlaceholder": "<!lower>",
                "Name": "Price",
                "QueryWithPlaceholder": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Price.range(<!lower>..<!upper>).)",
                "Type": "RangeAction",
                "UpperPlaceholder": "<!upper>"
            },
            {
                "DisplayName": "주행거리",
                "IsSelected": false,
                "LowerPlaceholder": "<!lower>",
                "Name": "Mileage",
                "QueryWithPlaceholder": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Mileage.range(<!lower>..<!upper>).)",
                "Type": "RangeAction",
                "UpperPlaceholder": "<!upper>"
            },
            {
                "DisplayName": "인수비용",
                "IsSelected": false,
                "LowerPlaceholder": "<!lower>",
                "Name": "AcceptanceCharge",
                "QueryWithPlaceholder": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.AcceptanceCharge.range(<!lower>..<!upper>).)",
                "Type": "RangeAction",
                "UpperPlaceholder": "<!upper>"
            },
            {
                "DisplayName": "월리스료",
                "IsSelected": false,
                "LowerPlaceholder": "<!lower>",
                "Name": "MonthLeasePrice",
                "QueryWithPlaceholder": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.MonthLeasePrice.range(<!lower>..<!upper>).)",
                "Type": "RangeAction",
                "UpperPlaceholder": "<!upper>"
            },
            {
                "DisplayName": "잔여개월",
                "IsSelected": false,
                "LowerPlaceholder": "<!lower>",
                "Name": "MonthLeaseRest",
                "QueryWithPlaceholder": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.MonthLeaseRest.range(<!lower>..<!upper>).)",
                "Type": "RangeAction",
                "UpperPlaceholder": "<!upper>"
            },
            {
                "DisplayName": "등록일자",
                "IsSelected": false,
                "LowerPlaceholder": "<!lower>",
                "Name": "CreatedDate",
                "QueryWithPlaceholder": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.CreatedDate.range(<!lower>..<!upper>).)",
                "Type": "RangeAction",
                "UpperPlaceholder": "<!upper>"
            },
            {
                "DisplayName": "Simple",
                "IsSelected": false,
                "Name": "Simple",
                "Placeholder": "<!>",
                "QueryWithPlaceholder": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Simple.keyword(<!>).)",
                "Type": "KeywordAction"
            },
            {
                "DisplayName": "Location",
                "DistanceInKmsPlaceholder": "<!distInKms>",
                "IsSelected": false,
                "LatitudePlaceholder": "<!lat>",
                "LongitudePlaceholder": "<!lon>",
                "Name": "Location",
                "QueryWithPlaceholder": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Location.location(<!lat>,<!lon>x<!distInKms>km).)",
                "Type": "LocationAction"
            },
            {
                "DisplayName": "MetaData",
                "IsSelected": false,
                "Name": "MetaData",
                "Placeholder": "<!>",
                "QueryWithPlaceholder": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.MetaData.custom(<!>).)",
                "Type": "CustomIndexAction"
            },
            {
                "DisplayName": "Plate",
                "IsSelected": false,
                "Name": "Plate",
                "Placeholder": "<!>",
                "QueryWithPlaceholder": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.Plate.<!>.)",
                "Type": "RefinementAction"
            },
            {
                "DisplayName": "PlateRegistrationNumber",
                "IsSelected": false,
                "Name": "PlateRegistrationNumber",
                "Placeholder": "<!>",
                "QueryWithPlaceholder": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.PlateRegistrationNumber.<!>.)",
                "Type": "RefinementAction"
            },
            {
                "DisplayName": "DealerName",
                "IsSelected": false,
                "Name": "DealerName",
                "Placeholder": "<!>",
                "QueryWithPlaceholder": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.DealerName.<!>.)",
                "Type": "RefinementAction"
            },
            {
                "DisplayName": "UserId",
                "IsSelected": false,
                "Name": "UserId",
                "Placeholder": "<!>",
                "QueryWithPlaceholder": "(And.Hidden.N._.(C.CarType.N._.Manufacturer.BMW.)_.UserId.<!>.)",
                "Type": "RefinementAction"
            }
        ]
    }
}