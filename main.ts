function 右偏移 () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    0,
    robotbit.Motors.M2A,
    -80
    )
}
function _5路白線 () {
    if (pins.digitalReadPin(DigitalPin.P14) == 1 && pins.digitalReadPin(DigitalPin.P13) == 0 && pins.digitalReadPin(DigitalPin.P12) == 1) {
        巡跡狀態 = 0
    } else if (pins.digitalReadPin(DigitalPin.P14) == 0 && pins.digitalReadPin(DigitalPin.P13) == 1 && pins.digitalReadPin(DigitalPin.P12) == 1) {
        巡跡狀態 = 1
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1 && pins.digitalReadPin(DigitalPin.P13) == 1 && pins.digitalReadPin(DigitalPin.P12) == 0) {
        巡跡狀態 = 2
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1 && pins.digitalReadPin(DigitalPin.P13) == 1 && pins.digitalReadPin(DigitalPin.P12) == 1) {
        巡跡狀態 = 3
    } else if (pins.digitalReadPin(DigitalPin.P14) == 0 && pins.digitalReadPin(DigitalPin.P13) == 0 && pins.digitalReadPin(DigitalPin.P12) == 0) {
        巡跡狀態 = 0
    }
}
input.onButtonPressed(Button.A, function () {
    if (啟動 == 0) {
        啟動 = 1
    } else {
        啟動 = 0
    }
})
function 巡跡B1 () {
    if (取得巡跡狀態() == 0) {
        basic.showNumber(0)
        前進()
    } else if (取得巡跡狀態() == 1) {
        basic.showNumber(1)
        robotbit.MotorRun(robotbit.Motors.M2A, 0)
    } else if (取得巡跡狀態() == 2) {
        basic.showNumber(2)
        robotbit.MotorRun(robotbit.Motors.M1B, 0)
    } else if (取得巡跡狀態() == 3) {
        basic.showNumber(3)
        停止()
    }
}
function 白線狀態 () {
    if (pins.digitalReadPin(DigitalPin.P15) == 0 && pins.digitalReadPin(DigitalPin.P14) == 0) {
        巡跡狀態 = 0
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1 && pins.digitalReadPin(DigitalPin.P14) == 0) {
        巡跡狀態 = 1
    } else if (pins.digitalReadPin(DigitalPin.P15) == 0 && pins.digitalReadPin(DigitalPin.P14) == 1) {
        巡跡狀態 = 2
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1 && pins.digitalReadPin(DigitalPin.P14) == 1) {
        巡跡狀態 = 3
    }
}
function 左偏移 () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    80,
    robotbit.Motors.M2A,
    0
    )
}
function 巡跡B2 () {
    if (巡跡狀態 == 0) {
        if (pins.digitalReadPin(DigitalPin.P15) == 0 && pins.digitalReadPin(DigitalPin.P8) == 1) {
            左旋轉()
        } else if (pins.digitalReadPin(DigitalPin.P15) == 1 && pins.digitalReadPin(DigitalPin.P8) == 0) {
            右旋轉()
        } else if (pins.digitalReadPin(DigitalPin.P15) == 0 && pins.digitalReadPin(DigitalPin.P8) == 0) {
            前進()
        } else {
            前進()
        }
    } else if (巡跡狀態 == 1) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        150,
        robotbit.Motors.M2A,
        -60
        )
    } else if (巡跡狀態 == 2) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        60,
        robotbit.Motors.M2A,
        -150
        )
    } else if (巡跡狀態 == 3) {
        if (pins.digitalReadPin(DigitalPin.P15) == 0 && pins.digitalReadPin(DigitalPin.P8) == 1) {
            左旋轉()
        } else if (pins.digitalReadPin(DigitalPin.P15) == 1 && pins.digitalReadPin(DigitalPin.P8) == 0) {
            右旋轉()
        } else if (pins.digitalReadPin(DigitalPin.P15) == 0 && pins.digitalReadPin(DigitalPin.P8) == 0) {
            退後()
        } else {
            退後()
        }
    }
}
function 前進 () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    120,
    robotbit.Motors.M2A,
    -130
    )
}
function 取得巡跡狀態 () {
    if (路線顏色 == 1) {
        _5路白線()
        return 巡跡狀態
    } else {
        黑線狀態()
        return 巡跡狀態
    }
}
function 黑線狀態3 () {
    if (pins.digitalReadPin(DigitalPin.P15) == 1 && pins.digitalReadPin(DigitalPin.P14) == 1) {
        return 0
    } else if (pins.digitalReadPin(DigitalPin.P15) == 0 && pins.digitalReadPin(DigitalPin.P14) == 1) {
        return 1
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1 && pins.digitalReadPin(DigitalPin.P14) == 0) {
        return 2
    } else if (pins.digitalReadPin(DigitalPin.P15) == 0 && pins.digitalReadPin(DigitalPin.P14) == 0) {
        return 3
    }
    return 3
}
input.onButtonPressed(Button.AB, function () {
    檢測模式 += 1
    if (檢測模式 == 3) {
        檢測模式 = 0
    }
    basic.showNumber(0)
    basic.pause(2000)
})
function 右旋轉 () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    -120,
    robotbit.Motors.M2A,
    -120
    )
}
function 繞道 () {
    右旋轉()
    basic.pause(400)
    while (!(pins.digitalReadPin(DigitalPin.P15) == 0 || pins.digitalReadPin(DigitalPin.P14) == 0)) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        110,
        robotbit.Motors.M2A,
        -90
        )
    }
}
function 黑線狀態 () {
    if (pins.digitalReadPin(DigitalPin.P15) == 1 && pins.digitalReadPin(DigitalPin.P14) == 1) {
        巡跡狀態 = 0
    } else if (pins.digitalReadPin(DigitalPin.P15) == 0 && pins.digitalReadPin(DigitalPin.P14) == 1) {
        巡跡狀態 = 1
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1 && pins.digitalReadPin(DigitalPin.P14) == 0) {
        巡跡狀態 = 2
    } else if (pins.digitalReadPin(DigitalPin.P15) == 0 && pins.digitalReadPin(DigitalPin.P14) == 0) {
        巡跡狀態 = 3
    }
}
function 偵測障礙 () {
    障礙物距離 = Math.floor(sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    ))
    return 障礙物距離
}
function 停止 () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    0,
    robotbit.Motors.M2A,
    0
    )
}
function 左旋轉 () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    120,
    robotbit.Motors.M2A,
    120
    )
}
function 退後 () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    -100,
    robotbit.Motors.M2A,
    100
    )
}
function 測試 () {
    if (啟動 == 1) {
        左偏移()
        basic.pause(2000)
        右偏移()
        basic.pause(2000)
    } else {
        robotbit.MotorStopAll()
    }
}
function 偵測障礙2 () {
    障礙物距離 = Math.floor(sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    ))
    basic.showNumber(障礙物距離)
}
let 障礙物距離 = 0
let 巡跡狀態 = 0
let 路線顏色 = 0
let 啟動 = 0
let 檢測模式 = 0
let 繞道起點距離 = 7
檢測模式 = 0
啟動 = 0
路線顏色 = 1
let 終點線 = 0
basic.forever(function () {
    if (啟動 == 1) {
        取得巡跡狀態()
        巡跡B2()
    }
})
