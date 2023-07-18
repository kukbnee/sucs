`https://api.encar.com/search/car/list/mobile?count=true&q=(And.Hidden.N._.(Or.CarType.Y._.CarType.N.))&inav=%7CMetadata%7CSort`
`https://api.encar.com/search/car/list/mobile?count=true&q=(And.Hidden.N._.(Or.CarType.Y._.CarType.N.))&inav=%7CMetadata%7CSort`
'http://api.encar.com/search/car/list/general?count=true&q=(And.Hidden.N._.(Or.CarType.Y._.CarType.N.))&inav=%7CMetadata%7CSort'
'http: //api.encar.com/search/car/list/general?count=true&q=(And.Hidden.N._.CarType.N.)&inav=%7CMetadata%7CSort'

`https://api.encar.com/search/car/list
/mobile?count=true
&q=(And
  .Mileage.range(50000..130000)._
  .Price.range(800..1600)._
  .Hidden.N._
  .(
    C.CarType.Y._
    .(
      C.Manufacturer.현대._
      .(
        C.ModelGroup.쏘나타._
        .Model.LF+쏘나타.
      )
    )
  )_
  .(
    Or
    .OfficeCityState.서울._
    .OfficeCityState.경기._
    .OfficeCityState.인천.
  )_
  .Condition.Inspection._
  .Condition.Record.
)
&sr=|ModifiedDate|0|200&inav=|Metadata|Sort`

`https://api.encar.com/search/car/list
/mobile?count=true
&q=(
  And.Mileage.range(50000..130000)
    ._.Price.range(800..1600)
    ._.Hidden.N
    ._.(C.CarType.Y
      ._.(C.Manufacturer.현대._.(C.ModelGroup.쏘나타._.Model.LF+쏘나타.)))
    _.(Or.OfficeCityState.서울._.OfficeCityState.경기._.OfficeCityState.인천.)
    _.Condition.Inspection._.Condition.Record.
)
&sr=|ModifiedDate|0|200&inav=|Metadata|Sort`

`mobile?count=true&q=(And.Mileage.range(${distance})._.Price.range(${price})._  .Hidden.N._ .(C.CarType.${국산여부}._.(C.Manufacturer.${manufact}.))`