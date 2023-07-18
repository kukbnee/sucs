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
!!selectedItem.distance?.Mileage.range(${distance}):""
!!selectedItem.price?.Price.range(${price}):""
!selectedItem.manufact?!selectedItem.model
`mobile?count=true&q=(And.Mileage.range(${distance})._.Price.range(${price})._  .Hidden.N._ .(C.CarType.${국산여부}._.(C.Manufacturer.${manufact}.))`


// https://api.encar.com/search/car/list/mobile?count=true&q=(And.Mileage.range(50000..150000)._.Price.range(..3600)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.%ED%98%84%EB%8C%80._.(C.ModelGroup.%EC%8A%A4%ED%83%80%EB%A0%89%EC%8A%A4._.Model.%EB%8D%94+%EB%89%B4+%EA%B7%B8%EB%9E%9C%EB%93%9C+%EC%8A%A4%ED%83%80%EB%A0%89%EC%8A%A4.)))_.(Or.OfficeCityState.%EA%B2%BD%EA%B8%B0._.OfficeCityState.%EC%84%9C%EC%9A%B8.)_.Condition.Inspection._.Condition.Record.)&sr=%7CModifiedDate%7C0%7C200&inav=%7CMetadata%7CSort
// https://api.encar.com/search/car/list/mobile?count=true&q=(And.Mileage.range(50000..150000)._.Price.range(..3600)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.%ED%98%84%EB%8C%80._.(C.ModelGroup.%EC%8A%A4%ED%83%80%EB%A0%89%EC%8A%A4._.Model.%EB%8D%94+%EB%89%B4+%EA%B7%B8%EB%9E%9C%EB%93%9C+%EC%8A%A4%ED%83%80%EB%A0%89%EC%8A%A4.)))_.(Or.OfficeCityState.%EC%84%9C%EC%9A%B8._.OfficeCityState.%EA%B2%BD%EA%B8%B0.)_.Condition.Inspection._.Condition.Record.)&sr=%7CModifiedDate%7C0%7C200&inav=%7CMetadata%7CSort
// https://api.encar.com/search/car/list/mobile?count=true&q=(And.Mileage.range(50000..150000)._.Price.range(..3600)._.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.%ED%98%84%EB%8C%80._.(C.ModelGroup.%EC%8A%A4%ED%83%80%EB%A0%89%EC%8A%A4._.Model.%EB%8D%94+%EB%89%B4+%EA%B7%B8%EB%9E%9C%EB%93%9C+%EC%8A%A4%ED%83%80%EB%A0%89%EC%8A%A4.)))_.(Or.OfficeCityState.%EA%B2%BD%EA%B8%B0._.OfficeCityState.%EC%84%9C%EC%9A%B8.)_.Condition.Inspection._.Condition.Record.)&sr=%7CModifiedDate%7C0%7C200&inav=%7CMetadata%7CSort