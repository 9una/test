//https://events.fifaonline4.nexon.com/Content/220908/diy/playerpack.js?t=202209211755

var selectClass = 0, 
    selectPlayer = 0, 
    selectGrade = 0;

$(function () {
    optionInits();
    $("#combination .step_01").find("button").on("click", function (e) {
        if (!$("#combination .step_04").hasClass("animated")) {

            var clazz = $(this).data("class");
            optionReset();
            selectClass = clazz;

            $("#combination .step_01").find("button").each(function () {
                $(this).parents("dd").attr("class", "");

                if ($(this).parents("dd").hasClass("active")) {
                    $(this).parents("dd").removeClass("active");
                }

                if ($(this).data("class") == clazz) {
                    $(this).parents("dd").addClass("active");
                } else {
                    $(this).parents("dd").addClass("disabled");
                }
            });


            //BOE21
            if (clazz === 1) {
                $("#combination .step_02").find("button").each(function () {
                    var player = $(this).data("player");
                    if (player > 15) {
                        $(this).parents("dd").addClass("disabled");
                    }
                });

                $("#combination .step_03").find("button").each(function () {
                    var grade = $(this).data("grade");
                    if (grade < 23 || grade > 25) {
                        $(this).parents("dd").addClass("disabled");
                    }
                });
            }

            //UP
            if (clazz === 2) {
                $("#combination .step_02").find("button").each(function () {
                    var player = $(this).data("player");
                    if (player > 15) {
                        $(this).parents("dd").addClass("disabled");
                    }
                });

                $("#combination .step_03").find("button").each(function () {
                    var grade = $(this).data("grade");
                    if (grade < 24 || grade > 27) {
                        $(this).parents("dd").addClass("disabled");
                    }
                });
            }

            //mc
            if (clazz === 3) {
                $("#combination .step_02").find("button").each(function () {
                    var player = $(this).data("player");
                    if (player > 15) {
                        $(this).parents("dd").addClass("disabled");
                    }
                });

                $("#combination .step_03").find("button").each(function () {
                    var grade = $(this).data("grade");
                    if (grade < 23 || grade > 26) {
                        $(this).parents("dd").addClass("disabled");
                    }
                });
            }

            //lh
            if (clazz === 4) {                
                $("#combination .step_03").find("button").each(function () {
                    var grade = $(this).data("grade");
                    if (grade < 24 || grade > 27) {
                        $(this).parents("dd").addClass("disabled");
                    }
                });
            }

            //tkl
            if (clazz === 5) {                
                $("#combination .step_03").find("button").each(function () {
                    var grade = $(this).data("grade");
                    if (grade < 25 || grade > 28) {
                        $(this).parents("dd").addClass("disabled");
                    }
                });
            }

            //hot
            if (clazz === 6) {                
                $("#combination .step_03").find("button").each(function () {
                    var grade = $(this).data("grade");
                    if (grade < 25 || grade > 28) {
                        $(this).parents("dd").addClass("disabled");
                    }
                });
            }

            //tc
            if (clazz === 7) {

                $("#combination .step_02").find("button").each(function () {
                    var player = $(this).data("player");
                    if (player > 15) {
                        $(this).parents("dd").addClass("disabled");
                    }
                });

                $("#combination .step_03").find("button").each(function () {
                    var grade = $(this).data("grade");
                    if (grade < 26 || grade > 28) {
                        $(this).parents("dd").addClass("disabled");
                    }
                });
            }

            //tb
            if (clazz === 8) {                
                $("#combination .step_03").find("button").each(function () {
                    var grade = $(this).data("grade");
                    if (grade < 27 || grade > 29) {
                        $(this).parents("dd").addClass("disabled");
                    }
                });
            }

            //gr
            if (clazz === 9) {
                $("#combination .step_03").find("button").each(function () {
                    var grade = $(this).data("grade");
                    if (grade < 26 || grade > 28) {
                        $(this).parents("dd").addClass("disabled");
                    }
                });
            }

            //TT
            if (clazz === 10) {
                $("#combination .step_03").find("button").each(function () {
                    var grade = $(this).data("grade");
                    if (grade < 26 || grade > 29) {
                        $(this).parents("dd").addClass("disabled");
                    }
                });
            }

            //NHD
            if (clazz === 11) {
                $("#combination .step_02").find("button").each(function () {
                    var player = $(this).data("player");
                    if (player > 15) {
                        $(this).parents("dd").addClass("disabled");
                    }
                });

                $("#combination .step_03").find("button").each(function () {
                    var grade = $(this).data("grade");
                    if (grade < 27 || grade > 29) {
                        $(this).parents("dd").addClass("disabled");
                    }
                });
            }

            //live
            if (clazz === 12) {                
                $("#combination .step_03").find("button").each(function () {
                    var grade = $(this).data("grade");
                    if (grade < 25 || grade > 28) {
                        $(this).parents("dd").addClass("disabled");
                    }
                });
            }

            PlayerPack.ResetChangeInfo();
            combinationFn(1, selectClass);
        }
    });

    $("#combination .step_02").find("button").on("click", function (e) {
        if (!$("#combination .step_04").hasClass("animated")) {
            if ($(this).parent("dd").hasClass("disabled") == false) {

                selectPlayer = $(this).data("player");

                $("#combination .step_02").find("dd").each(function () {
                    if ($(this).hasClass("active")) {
                        $(this).removeClass("active");
                    }
                });

                if ($(this).data("player") == selectPlayer) {
                    $(this).parents("dd").addClass("active");
                    PlayerPack.ResetChangeInfo();
                    combinationFn(2, selectPlayer);
                }

                //boe21
                if (selectClass === 1) {
                    $("#combination .step_03").find("dd").each(function () {
                        if ($(this).hasClass("disabled")) {
                            $(this).removeClass("disabled");
                        }
                    });


                    //50
                    if (selectPlayer === 13) {

                        $("#combination .step_03").find("button").each(function () {

                            if ($(this).parents("dd").hasClass("active")) {
                                $(this).parents("dd").removeClass("active");
                            }

                            var grade = $(this).data("grade");
                            if (grade < 23 || grade > 25) {
                                $(this).parents("dd").addClass("disabled");
                            }
                        });
                    }

                    //100
                    if (selectPlayer === 14) {

                        $("#combination .step_03").find("button").each(function () {

                            if ($(this).parents("dd").hasClass("active")) {
                                $(this).parents("dd").removeClass("active");
                            }

                            var grade = $(this).data("grade");
                            if (grade < 23 || grade > 25) {
                                $(this).parents("dd").addClass("disabled");
                            }
                        });
                    }

                    //150
                    if (selectPlayer === 15) {

                        $("#combination .step_03").find("button").each(function () {

                            if ($(this).parents("dd").hasClass("active")) {
                                $(this).parents("dd").removeClass("active");
                            }

                            var grade = $(this).data("grade");
                            if (grade < 24 || grade > 25) {
                                $(this).parents("dd").addClass("disabled");
                            }
                        });
                    }
                }

                //up
                if (selectClass === 2) {
                    $("#combination .step_03").find("dd").each(function () {
                        if ($(this).hasClass("disabled")) {
                            $(this).removeClass("disabled");
                        }
                    });


                    //50
                    if (selectPlayer === 13) {

                        $("#combination .step_03").find("button").each(function () {

                            if ($(this).parents("dd").hasClass("active")) {
                                $(this).parents("dd").removeClass("active");
                            }

                            var grade = $(this).data("grade");
                            if (grade < 24 || grade > 26) {
                                $(this).parents("dd").addClass("disabled");
                            }
                        });
                    }

                    //100
                    if (selectPlayer === 14) {

                        $("#combination .step_03").find("button").each(function () {

                            if ($(this).parents("dd").hasClass("active")) {
                                $(this).parents("dd").removeClass("active");
                            }

                            var grade = $(this).data("grade");
                            if (grade < 24 || grade > 27) {
                                $(this).parents("dd").addClass("disabled");
                            }
                        });
                    }

                    //150
                    if (selectPlayer === 15) {

                        $("#combination .step_03").find("button").each(function () {

                            if ($(this).parents("dd").hasClass("active")) {
                                $(this).parents("dd").removeClass("active");
                            }

                            var grade = $(this).data("grade");
                            if (grade < 25 || grade > 27) {
                                $(this).parents("dd").addClass("disabled");
                            }
                        });
                    }
                }

                //mc
                if (selectClass === 3) {
                    $("#combination .step_03").find("dd").each(function () {
                        if ($(this).hasClass("disabled")) {
                            $(this).removeClass("disabled");
                        }
                    });

                    //50
                    if (selectPlayer === 13) {
                        $("#combination .step_03").find("button").each(function () {

                            if ($(this).parents("dd").hasClass("active")) {
                                $(this).parents("dd").removeClass("active");
                            }

                            var grade = $(this).data("grade");
                            if (grade < 23 || grade > 25) {
                                $(this).parents("dd").addClass("disabled");
                            }
                        });
                    }

                    //100
                    if (selectPlayer === 14) {
                        $("#combination .step_03").find("button").each(function () {

                            if ($(this).parents("dd").hasClass("active")) {
                                $(this).parents("dd").removeClass("active");
                            }

                            var grade = $(this).data("grade");
                            if (grade < 23 || grade > 26) {
                                $(this).parents("dd").addClass("disabled");
                            }
                        });
                    }

                    //150
                    if (selectPlayer === 15) {
                        $("#combination .step_03").find("button").each(function () {

                            if ($(this).parents("dd").hasClass("active")) {
                                $(this).parents("dd").removeClass("active");
                            }

                            var grade = $(this).data("grade");
                            if (grade < 24 || grade > 26) {
                                $(this).parents("dd").addClass("disabled");
                            }
                        });
                    }
                }

                //lh
                if (selectClass === 4) {
                    $("#combination .step_03").find("dd").each(function () {
                        if ($(this).hasClass("disabled")) {
                            $(this).removeClass("disabled");
                        }
                    });

                    //50
                    if (selectPlayer === 13) {
                        $("#combination .step_03").find("button").each(function () {

                            if ($(this).parents("dd").hasClass("active")) {
                                $(this).parents("dd").removeClass("active");
                            }

                            var grade = $(this).data("grade");
                            if (grade < 24 || grade > 26) {
                                $(this).parents("dd").addClass("disabled");
                            }
                        });
                    }

                    //100      
                    if (selectPlayer === 14) {
                        $("#combination .step_03").find("button").each(function () {

                            if ($(this).parents("dd").hasClass("active")) {
                                $(this).parents("dd").removeClass("active");
                            }

                            var grade = $(this).data("grade");
                            if (grade < 25 || grade > 27) {
                                $(this).parents("dd").addClass("disabled");
                            }
                        });
                    }

                    //150      
                    if (selectPlayer === 15) {
                        $("#combination .step_03").find("button").each(function () {

                            if ($(this).parents("dd").hasClass("active")) {
                                $(this).parents("dd").removeClass("active");
                            }

                            var grade = $(this).data("grade");
                            if (grade < 25 || grade > 27) {
                                $(this).parents("dd").addClass("disabled");
                            }
                        });
                    }

                    //200      
                    if (selectPlayer === 16) {
                        $("#combination .step_03").find("button").each(function () {

                            if ($(this).parents("dd").hasClass("active")) {
                                $(this).parents("dd").removeClass("active");
                            }

                            var grade = $(this).data("grade");
                            if (grade < 26 || grade > 27) {
                                $(this).parents("dd").addClass("disabled");
                            }
                        });
                    }
                }

                //tkl
                if (selectClass === 5) {
                    $("#combination .step_03").find("dd").each(function () {
                        if ($(this).hasClass("disabled")) {
                            $(this).removeClass("disabled");
                        }
                    });

                    //50
                    if (selectPlayer === 13) {
                        $("#combination .step_03").find("button").each(function () {

                            if ($(this).parents("dd").hasClass("active")) {
                                $(this).parents("dd").removeClass("active");
                            }

                            var grade = $(this).data("grade");
                            if (grade < 25 || grade > 27) {
                                $(this).parents("dd").addClass("disabled");
                            }
                        });
                    }

                    //100
                    if (selectPlayer === 14) {
                        $("#combination .step_03").find("button").each(function () {

                            if ($(this).parents("dd").hasClass("active")) {
                                $(this).parents("dd").removeClass("active");
                            }

                            var grade = $(this).data("grade");
                            if (grade < 26 || grade > 27) {
                                $(this).parents("dd").addClass("disabled");
                            }
                        });
                    }

                    //150
                    if (selectPlayer === 15) {
                        $("#combination .step_03").find("button").each(function () {

                            if ($(this).parents("dd").hasClass("active")) {
                                $(this).parents("dd").removeClass("active");
                            }

                            var grade = $(this).data("grade");
                            if (grade < 26 || grade > 28) {
                                $(this).parents("dd").addClass("disabled");
                            }
                        });
                    }

                    //200
                    if (selectPlayer === 16) {
                        $("#combination .step_03").find("button").each(function () {

                            if ($(this).parents("dd").hasClass("active")) {
                                $(this).parents("dd").removeClass("active");
                            }

                            var grade = $(this).data("grade");
                            if (grade < 26 || grade > 28) {
                                $(this).parents("dd").addClass("disabled");
                            }
                        });
                    }
                }

                //hot
                if (selectClass === 6) {
                    $("#combination .step_03").find("dd").each(function () {
                        if ($(this).hasClass("disabled")) {
                            $(this).removeClass("disabled");
                        }
                    });

                    //50
                    if (selectPlayer === 13) {
                        $("#combination .step_03").find("button").each(function () {

                            if ($(this).parents("dd").hasClass("active")) {
                                $(this).parents("dd").removeClass("active");
                            }

                            var grade = $(this).data("grade");
                            if (grade < 25 || grade > 27) {
                                $(this).parents("dd").addClass("disabled");
                            }
                        });
                    }

                    //100
                    if (selectPlayer === 14) {
                        $("#combination .step_03").find("button").each(function () {

                            if ($(this).parents("dd").hasClass("active")) {
                                $(this).parents("dd").removeClass("active");
                            }

                            var grade = $(this).data("grade");
                            if (grade < 26 || grade > 27) {
                                $(this).parents("dd").addClass("disabled");
                            }
                        });
                    }

                    //150
                    if (selectPlayer === 15) {
                        $("#combination .step_03").find("button").each(function () {

                            if ($(this).parents("dd").hasClass("active")) {
                                $(this).parents("dd").removeClass("active");
                            }

                            var grade = $(this).data("grade");
                            if (grade < 26 || grade > 27) {
                                $(this).parents("dd").addClass("disabled");
                            }
                        });
                    }

                    //200
                    if (selectPlayer === 16) {
                        $("#combination .step_03").find("button").each(function () {

                            if ($(this).parents("dd").hasClass("active")) {
                                $(this).parents("dd").removeClass("active");
                            }

                            var grade = $(this).data("grade");
                            if (grade < 26 || grade > 28) {
                                $(this).parents("dd").addClass("disabled");
                            }
                        });
                    }
                }

                //tc
                if (selectClass === 7) {
                    $("#combination .step_03").find("dd").each(function () {
                        if ($(this).hasClass("disabled")) {
                            $(this).removeClass("disabled");
                        }
                    });

                    //50
                    if (selectPlayer === 13) {
                        $("#combination .step_03").find("button").each(function () {

                            if ($(this).parents("dd").hasClass("active")) {
                                $(this).parents("dd").removeClass("active");
                            }

                            var grade = $(this).data("grade");
                            if (grade < 26 || grade > 27) {
                                $(this).parents("dd").addClass("disabled");
                            }
                        });
                    }

                    //100,150
                    if (selectPlayer === 14 || selectPlayer === 15) {
                        $("#combination .step_03").find("button").each(function () {

                            if ($(this).parents("dd").hasClass("active")) {
                                $(this).parents("dd").removeClass("active");
                            }

                            var grade = $(this).data("grade");
                            if (grade < 26 || grade > 28) {
                                $(this).parents("dd").addClass("disabled");
                            }
                        });
                    }
                }

                //tb
                if (selectClass === 8) {
                    $("#combination .step_03").find("dd").each(function () {
                        if ($(this).hasClass("disabled")) {
                            $(this).removeClass("disabled");
                        }
                    });


                    //50 ~ 150
                    if (selectPlayer === 13 || selectPlayer === 14 || selectPlayer === 15) {
                        $("#combination .step_03").find("button").each(function () {

                            if ($(this).parents("dd").hasClass("active")) {
                                $(this).parents("dd").removeClass("active");
                            }

                            var grade = $(this).data("grade");
                            if (grade < 27 || grade > 28) {
                                $(this).parents("dd").addClass("disabled");
                            }
                        });
                    }

                    //200
                    if (selectPlayer === 16) {
                        $("#combination .step_03").find("button").each(function () {

                            if ($(this).parents("dd").hasClass("active")) {
                                $(this).parents("dd").removeClass("active");
                            }

                            var grade = $(this).data("grade");
                            if (grade < 27 || grade > 29) {
                                $(this).parents("dd").addClass("disabled");
                            }
                        });
                    }

                }

                //gr
                if (selectClass === 9) {
                    $("#combination .step_03").find("dd").each(function () {
                        if ($(this).hasClass("disabled")) {
                            $(this).removeClass("disabled");
                        }
                    });

                    //50 ~ 200
                    if (selectPlayer === 13 || selectPlayer === 14 || selectPlayer === 15 || selectPlayer === 16) {
                        $("#combination .step_03").find("button").each(function () {

                            if ($(this).parents("dd").hasClass("active")) {
                                $(this).parents("dd").removeClass("active");
                            }

                            var grade = $(this).data("grade");
                            if (grade < 26 || grade > 28) {
                                $(this).parents("dd").addClass("disabled");
                            }
                        });
                    }

                }

                //tt
                if (selectClass === 10) {
                    $("#combination .step_03").find("dd").each(function () {
                        if ($(this).hasClass("disabled")) {
                            $(this).removeClass("disabled");
                        }
                    });

                    //50, 100
                    if (selectPlayer === 13 || selectPlayer === 14) {
                        $("#combination .step_03").find("button").each(function () {

                            if ($(this).parents("dd").hasClass("active")) {
                                $(this).parents("dd").removeClass("active");
                            }

                            var grade = $(this).data("grade");
                            if (grade < 26 || grade > 28) {
                                $(this).parents("dd").addClass("disabled");
                            }
                        });
                    }

                    //150
                    if (selectPlayer === 15) {
                        $("#combination .step_03").find("button").each(function () {

                            if ($(this).parents("dd").hasClass("active")) {
                                $(this).parents("dd").removeClass("active");
                            }

                            var grade = $(this).data("grade");
                            if (grade < 27 || grade > 28) {
                                $(this).parents("dd").addClass("disabled");
                            }
                        });
                    }

                    //200
                    if (selectPlayer === 16) {
                        $("#combination .step_03").find("button").each(function () {

                            if ($(this).parents("dd").hasClass("active")) {
                                $(this).parents("dd").removeClass("active");
                            }

                            var grade = $(this).data("grade");
                            if (grade < 27 || grade > 29) {
                                $(this).parents("dd").addClass("disabled");
                            }
                        });
                    }
                }

                //nhd
                if (selectClass === 11) {                    
                    $("#combination .step_03").find("dd").each(function () {
                        if ($(this).hasClass("disabled")) {
                            $(this).removeClass("disabled");
                        }
                    });

                    //50,100
                    if (selectPlayer === 13 || selectPlayer === 14) {
                        $("#combination .step_03").find("button").each(function () {

                            if ($(this).parents("dd").hasClass("active")) {
                                $(this).parents("dd").removeClass("active");
                            }

                            var grade = $(this).data("grade");
                            if (grade < 27 || grade > 28) {
                                $(this).parents("dd").addClass("disabled");
                            }
                        });
                    }

                    //150
                    if (selectPlayer === 15) {
                        $("#combination .step_03").find("button").each(function () {

                            if ($(this).parents("dd").hasClass("active")) {
                                $(this).parents("dd").removeClass("active");
                            }

                            var grade = $(this).data("grade");
                            if (grade < 27 || grade > 29) {
                                $(this).parents("dd").addClass("disabled");
                            }
                        });
                    }
                }

                //live
                if (selectClass === 12) {
                    $("#combination .step_03").find("dd").each(function () {
                        if ($(this).hasClass("disabled")) {
                            $(this).removeClass("disabled");
                        }
                    });

                    //50
                    if (selectPlayer === 13) {
                        $("#combination .step_03").find("button").each(function () {

                            if ($(this).parents("dd").hasClass("active")) {
                                $(this).parents("dd").removeClass("active");
                            }

                            var grade = $(this).data("grade");
                            if (grade < 25 || grade > 28) {
                                $(this).parents("dd").addClass("disabled");
                            }
                        });
                    }


                    //100,150,200
                    if (selectPlayer === 14 || selectPlayer === 15 || selectPlayer === 16) {
                        $("#combination .step_03").find("button").each(function () {

                            if ($(this).parents("dd").hasClass("active")) {
                                $(this).parents("dd").removeClass("active");
                            }

                            var grade = $(this).data("grade");
                            if (grade < 26 || grade > 28) {
                                $(this).parents("dd").addClass("disabled");
                            }
                        });
                    }
                }
            }
        }
    });

    $("#combination .step_03").find("button").on("click", function (e) {
        if (!$("#combination .step_04").hasClass("animated")) {
            if ($(this).parent("dd").hasClass("disabled") == false) {

                selectGrade = $(this).data("grade");

                $("#combination .step_03").find("dd").each(function () {
                    if ($(this).hasClass("active")) {
                        $(this).removeClass("active");
                    }
                });

                if ($(this).data("grade") == selectGrade) {
                    $(this).parents("dd").addClass("active");
                    PlayerPack.ResetChangeInfo();
                    combinationFn(3, selectGrade);
                }
            }
        }
    });
});

function pageMove(n4PageNo) {
    PlayerPack.GetRewardList(n4PageNo);
}

function ResetSelectValue() {
    selectClass = 0, selectGrade = 0, selectPlayer = 0;
}

function optionReset() {
    ResetSelectValue();
    $("#combination .step_02").find("button").each(function () {
        $(this).parents("dd").attr("class", "");
    });
    $("#combination .step_03").find("button").each(function () {
        $(this).parents("dd").attr("class", "");
    });
}

function optionInits() {
    $("#combination .step_02").find("button").each(function () {
        $(this).parents("dd").attr("class", "").addClass("disabled");
    });
    $("#combination .step_03").find("button").each(function () {
        $(this).parents("dd").attr("class", "").addClass("disabled");
    });
}

var PlayerPack = new function () {
    this.Alram = function (type, message) {

        CommonPopupAdapater.ShowLayerMessage(message);

    }
    this._URL = "/220908/PlayerPack_proc",
        this.ReloadGNB = function (retData) {
        $("#header-event-info2").html(retData.weekCoin - retData.weekuseCoin);
        $("#header-event-info3").html(retData.todaypoint);
        },      
        this.ResetDIYInfo = function () {
            layerPopupClose();
            combinationResetFn();
            optionInits();
            ResetSelectValue();
            $("#ChangePoint").text("-").data("packid", "").removeClass("active");
        },
        this.ResetDIYInfoNonLayer = function () {
            combinationResetFn();
            optionInits();
            ResetSelectValue();
            $("#ChangePoint").text("-").data("packid", "").removeClass("active");
        },
        this.ResetChangeInfo = function () {
            $("#ChangePoint").text("-").data("packid", "").removeClass("active");
        },
        this.PackingReset = function (obj) {
            CommonPopupAdapater.ShowLayerConfirmMessage("�좏깮�섏떊 議곌굔�� 珥덇린�붾맗�덈떎.<br />�ㅼ떆 �낅젰�섏떆寃좎뒿�덇퉴?", '', '', "PlayerPack.ResetDIYInfo(); return false;");
            return false;
        },
        this.SendPack = function (obj, fixpackid) {
            if (DefaultCheck()) {
                var _evt = $(obj).attr("onclick");
                $(obj).attr("onclick", "return false;");
                setTimeout(function () {
                    $.ajax({
                        cache: false,
                        method: "POST",
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        url: PlayerPack._URL,
                        dataType: "json",
                        data: { __RequestVerificationToken: $("input[name=__RequestVerificationToken]").val(), strMethod: "ChangePack", encPackId: fixpackid },
                        success: function (retData) {
                            if (retData.retCode == 1) {
                                layerPopupClose();
                                CommonPopupAdapater.ShowLayerStep2(retData.extraData, true);
                                PlayerPack.ResetDIYInfoNonLayer();
                            }
                            else {
                                layerPopupClose();
                                if (retData.retCode == -41) {
                                    CommonPopupAdapater.ShowLayerMessage("�먰븯�쒕뒗 �좎닔�⑹쓣 癒쇱� 議고빀�댁＜�몄슂!");
                                }
                                else if (retData.retCode == -46) {
                                    CommonPopupAdapater.ShowLayerMessage("�좎닔�⑹� �대깽�� 湲곌컙 �숈븞 2�뚮쭔 援먰솚 媛��ν빀�덈떎.");
                                }
                                else if (retData.retCode == -44) {
                                    CommonPopupAdapater.ShowLayerMessage("�좎닔�� 援먰솚�� �꾩슂�� �ъ씤�멸� 遺�議깊빀�덈떎.<br/>�ъ씤�몃� �� �볤굅�� �ㅻⅨ �좎닔�⑹쑝濡� 議고빀�대낫�몄슂.");
                                }
                                else {
                                    CommonPopupAdapater.ShowLayerMessageCommon(retData, CommonPopupAdapater.Config.Title);
                                }
                            }
                            //checkEnd();
                            $(obj).attr("onclick", _evt);
                            return false;
                        },
                        error: function (xhr, status, exception) {
                            //checkEnd();
                            ShowMessage("二꾩넚�⑸땲��. �좎떆�� �ㅼ떆 �쒕룄�댁＜�몄슂.");
                            $(obj).attr("onclick", _evt);
                        }
                    });
                }, 1000);
            }
        },
        this.ChangePack = function (obj) {
            if (DefaultCheck()) {
                if (selectClass == 0 || selectPlayer == 0 || selectGrade == 0) {
                    CommonPopupAdapater.ShowLayerMessage("�먰븯�쒕뒗 �좎닔�⑹쓣 癒쇱� 議고빀�댁＜�몄슂!");
                    return false;
                }

                if ($(obj).data("exchange") == 0) {
                    CommonPopupAdapater.ShowLayerMessage("�좎닔�� 援먰솚�� �꾩슂�� �ъ씤�멸� 遺�議깊빀�덈떎.<br/>�ъ씤�몃� �� �볤굅�� �ㅻⅨ �좎닔�⑹쑝濡� 議고빀�대낫�몄슂.");
                    return false;
                }

                var _evt = $(obj).attr("onclick");
                $(obj).attr("onclick", "return false;");
                setTimeout(function () {
                    $.ajax({
                        cache: false,
                        method: "POST",
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        url: PlayerPack._URL,
                        dataType: "json",
                        data: { __RequestVerificationToken: $("input[name=__RequestVerificationToken]").val(), strMethod: "ChangePackPre1", sClass: selectClass, sPlayer: selectPlayer, sGrade: selectGrade, encPackId: $("#ChangePoint").data("packid") },
                        success: function (retData) {
                            if (retData.retCode == 1) {
                                CommonPopupAdapater.ShowLayerStep1(retData.extraData);
                            }
                            else {
                                layerPopupClose();
                                CommonPopupAdapater.ShowLayerMessage("�먰븯�쒕뒗 �좎닔�⑹쓣 癒쇱� 議고빀�댁＜�몄슂!");
                            }
                            $(obj).attr("onclick", _evt);
                            return false;
                        },
                        error: function (xhr, status, exception) {
                            ShowMessage("二꾩넚�⑸땲��. �좎떆�� �ㅼ떆 �쒕룄�댁＜�몄슂.");
                            $(obj).attr("onclick", _evt);
                        }
                    });
                }, 1000);
            }
        },
        this.Packing = function (obj) {
            if (DefaultCheck()) {
                if (selectClass == 0 || selectPlayer == 0 || selectGrade == 0) {
                    CommonPopupAdapater.ShowLayerMessage("�먰븯�쒕뒗 �좎닔�⑹쓣 癒쇱� 議고빀�댁＜�몄슂!");
                    return false;
                }
                
                $loaderStart($("#combination .step_04 .card .loader"));
                var _evt = $(obj).attr("onclick");
                $(obj).attr("onclick", "return false;");
                setTimeout(function () {
                    $.ajax({
                        cache: false,
                        method: "POST",
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        url: PlayerPack._URL,
                        dataType: "json",
                        data: { __RequestVerificationToken: $("input[name=__RequestVerificationToken]").val(), strMethod: "PackingValid", sClass: selectClass, sPlayer: selectPlayer, sGrade: selectGrade },
                        success: function (retData) {
                            if (retData.retCode == 1) {
                                $("#ChangePoint").text(retData.extraData.ChangePoint + "P").data("packid", retData.extraData.PlayPackId).addClass("active");
                                $("#btnExchage").data("exchange", retData.extraData.PointExchage);
                            }
                            else {
                                CommonPopupAdapater.ShowLayerMessage("�먰븯�쒕뒗 �좎닔�⑹쓣 癒쇱� 議고빀�댁＜�몄슂!");
                                PlayerPack.ResetDIYInfoNonLayer();
                            }
                            $loaderEnd($("#combination .step_04 .card .loader"));
                            $(obj).attr("onclick", _evt);
                            return false;
                        },
                        error: function (xhr, status, exception) {
                            $loaderEnd($("#combination .step_04 .card .loader"));
                            ShowMessage("二꾩넚�⑸땲��. �좎떆�� �ㅼ떆 �쒕룄�댁＜�몄슂.");
                            $(obj).attr("onclick", _evt);
                        }
                    });
                }, 1000);
            }
        },
        this.GetPointInfoRefresh = function (retData) {            
            $("#_nowPoint").text(retData.todaypoint);
            $("#_my_RemainPoint").text(retData.remainpoint + "P");
            $("#_my_totalPoint").text(retData.totalpoint + "P");
        },
        this.GetTodayPoint = function (obj) {
            if (DefaultCheck()) {
                checkStart();
                var _evt = $(obj).attr("onclick");
                $(obj).attr("onclick", "return false;");
                setTimeout(function () {
                    $.ajax({
                        cache: false,
                        method: "POST",
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        url: '/220908/MissionAjax',
                        dataType: 'json',
                        data: { "__RequestVerificationToken": $("input[name=__RequestVerificationToken]").val(), "strMethod": "getPlayInfo", "n4RewardType": "2", rd: Math.random() },
                        success: function (retData) {
                            if (retData.retCode == 1) {                                
                                PlayerPack.GetPointInfoRefresh(retData);                                
                            }
                            else if (retData.retCode == -90) {
                                location.reload();
                            }
                            else {
                                CommonPopupAdapater.ShowLayerMessageCommon(retData, CommonPopupAdapater.Config.Title, retData.IsReload);
                            }

                            PlayerPack.ReloadGNB(retData);
                            $(obj).attr("onclick", _evt);
                            checkEnd();
                            return false;
                        },
                        error: function (xhr, status, exception) {
                            ShowMessage("二꾩넚�⑸땲��. �좎떆�� �ㅼ떆 �쒕룄�댁＜�몄슂.");
                            $(obj).attr("onclick", _evt);
                            checkEnd();
                        }
                    });
                }, 1000);
            }
        },
        this.GetRewardList = function (n4PageNo) {
            if (DefaultCheck()) {
                $.ajax({
                    type: "POST",
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    url: '/220908/PlayerPackReward?n4PageNo=' + n4PageNo + "&_" + Math.random(),
                    dataType: 'json',
                    success: function (retData) {
                        CommonPopupAdapater.GetRewardList(retData.extraData);
                        return false;
                    },
                    error: function (xhr, status, exception) {
                        ShowMessage("二꾩넚�⑸땲��.<br>�ㅼ떆 �댁슜�댁＜�몄슂.", false);
                    }
                });
            }
        },
        this.SetIconRewardPre = function (obj, seq) {
            var currentSeq = $(obj).data("seq");
            if (seq !== undefined) {
                currentSeq = seq;
            }

            if (DefaultCheck()) {
                //checkStart();
                var _evt = $(obj).attr("onclick");
                $(obj).attr("onclick", "return false;");
                setTimeout(function () {
                    $.ajax({
                        cache: false,
                        method: "POST",
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        url: "/220908/PlayerPack_proc",
                        dataType: "json",
                        data: { __RequestVerificationToken: $("input[name=__RequestVerificationToken]").val(), strMethod: "IconReward", n2Seq: currentSeq },
                        success: function (retData) {
                            if (retData.retCode == 1) {
                                PlayerPack.GetPlayerPackIcon();
                                CommonPopupAdapater.ShowLayerLuckeyStep2(retData.extraData);
                            }
                            else {
                                CommonPopupAdapater.ShowLayerMessageLuckeyPointMessage(retData.extraData, retData.retMsg);
                            }
                            $(obj).attr("onclick", _evt);
                            //checkEnd();
                            return false;
                        },
                        error: function (xhr, status, exception) {
                            ShowMessage("二꾩넚�⑸땲��. �좎떆�� �ㅼ떆 �쒕룄�댁＜�몄슂.");
                            $(obj).attr("onclick", _evt);
                            //checkEnd();
                        }
                    });
                }, 1000);
            }
        }        
}

var CommonPopupAdapater = new function () {
    this.Config = {
        Exchange: new Object(),
        Rewards: new Object(),
        Message: new Object(),
        RewardListInfo: new Object(),
        ConfirmMessage: new Object(),
        AccumulateRewards: new Object(),
        LuckeyRewards: new Object(),
        BonusRewardAlert: new Object(),
    },
        this.Inits = function () {
            CommonPopupAdapater.Config.Title = "�좎닔�� DIY",
                CommonPopupAdapater.Config.Exchange = {
                    title: CommonPopupAdapater.Config.Title,
                    msg: "�좎닔�⑹쓣 援먰솚 �섏떆寃좎뒿�덇퉴?",
                    priceType: "�ъ씤��(P)",
                    btnText: "援먰솚"
                };
            CommonPopupAdapater.Config.Rewards = {
                title: CommonPopupAdapater.Config.Title,
                msg: "援먰솚�� �꾨즺�섏뿀�듬땲��.",
                isReload: false,
                footermsg: "蹂댁긽�� 寃뚯엫 �� [�꾩씠�� > 蹂닿���] �쇰줈 吏�湲됰릺硫�<br />理쒕� 30遺꾧퉴吏� 吏�湲됱씠 吏��곕맆 �� �덉뒿�덈떎.",
                sNext: false,
                items: []
            };
            CommonPopupAdapater.Config.Message = {
                title: CommonPopupAdapater.Config.Title,
            };
            CommonPopupAdapater.Config.RewardListInfo = {
                title: "蹂댁긽 �섎졊 �댁뿭",
                footermsg: "<span class='advice_list'>�꾩씠�쒖� 寃뚯엫 �� <strong> [�꾩씠�� > 蹂닿���] </strong> �쇰줈 吏�湲됰릺硫� �곹솴�� �곕씪 理쒕� 30遺� 源뚯� 吏�湲됱씠 吏��곕맆 �� �덉뒿�덈떎.<br>�좎닔�� 援먰솚�� 2022.11.9(��) 23: 59 源뚯� 媛��ν빀�덈떎.",
                noData: "李몄뿬 �댁뿭�� �놁뒿�덈떎.",
            };
            CommonPopupAdapater.Config.ConfirmMessage = {
                title: CommonPopupAdapater.Config.Title,
                advice: "",
                content: "",
                isReload: false,
                IsOkFunction: "",
            };
            CommonPopupAdapater.Config.LuckeyRewards = {
                title: CommonPopupAdapater.Config.Title,
                isReload: false,
                footermsg: "蹂댁긽�� 寃뚯엫 �� [�꾩씠�� > 蹂닿���] �쇰줈 吏�湲됰릺硫�<br />理쒕� 30遺꾧퉴吏� 吏�湲됱씠 吏��곕맆 �� �덉뒿�덈떎.",
                nextFunction: "layerPopupClose(); PlayerPack.SetIconRewardPre(this); return false;",
                isNext: true,
                items: []
            };
            CommonPopupAdapater.Config.BonusRewards = {
                title: CommonPopupAdapater.Config.Title,
                msg: "吏�湲됱씠 �꾨즺�섏뿀�듬땲��.",
                isReload: false,
                footermsg: "蹂댁긽�� 寃뚯엫 �� [�꾩씠�� > 蹂닿���] �쇰줈 吏�湲됰릺硫�<br />理쒕� 30遺꾧퉴吏� 吏�湲됱씠 吏��곕맆 �� �덉뒿�덈떎.",
                nextFunction: "layerPopupClose(); PlayerPack.SetBonusRewardPre(this); return false;",
                isNext: true,
                items: []
            };
            CommonPopupAdapater.Config.BonusRewardAlert = {
                title: CommonPopupAdapater.Config.Title,
                IsOkFunction: "alert('�대룞'); return false;",
            };

            var TempArray = new Array();
            TempArray.push("128px");
            TempArray.push("auto");  //媛��붽릿嫄�
            TempArray.push("128px");
            TempArray.push("256px");
            CommonPopupAdapater.Config.RewardListInfo.col = TempArray;

            //th �앹꽦 
            TempArray = new Array();
            TempArray.push("援щ텇");
            TempArray.push("�꾩씠��");
            TempArray.push("�ъ슜 �ъ씤��");
            TempArray.push("吏�湲됱씪");
            CommonPopupAdapater.Config.RewardListInfo.th = TempArray;
        },
        this.ShowLayerConfirmMessage = function (msg, advice, isReload, IsOkFunction) {
            CommonPopupAdapater.Config.ConfirmMessage.content = msg;
            if ($.trim(advice) != '') {
                CommonPopupAdapater.Config.ConfirmMessage.advice = advice;
            }
            if ($.trim(isReload) != '') {
                CommonPopupAdapater.Config.ConfirmMessage.isReload = isReload;
            }
            if ($.trim(IsOkFunction) != '') {
                CommonPopupAdapater.Config.ConfirmMessage.IsOkFunction = IsOkFunction;
            }
            EventsPopupFunction.ShowConfirm(CommonPopupAdapater.Config.ConfirmMessage);
        },
        this.ShowLayerMessage = function (msg) {
            CommonPopupAdapater.Config.Message.content = msg;

            EventsPopupFunction.ShowMessage(CommonPopupAdapater.Config.Message);
        },
        this.ShowLayerStep1 = function () {
            var extraData = arguments[0];

            CommonPopupAdapater.Config.Exchange.myCash = extraData.TotalPoint;
            CommonPopupAdapater.Config.Exchange.pCash = extraData.UsedPoint;
            CommonPopupAdapater.Config.Exchange.remainCash = extraData.RemainPoint;
            CommonPopupAdapater.Config.Exchange.clickFunction = "PlayerPack.SendPack(this, '" + extraData.PlayPackId + "');";
            CommonPopupAdapater.Config.Exchange.rewardItemImg = extraData.ItemImage;
            CommonPopupAdapater.Config.Exchange.rewardItemText = extraData.ItemName;
            CommonPopupAdapater.Config.Exchange.advice = "[援먰솚�섍린] 踰꾪듉�� �꾨Ⅴ硫� �ъ씤�멸� 李④컧�섎ŉ 援먰솚�� �꾨즺�⑸땲��.<br/>援먰솚�� �ъ슜�� �ъ씤�몃뒗 痍⑥냼�� �� �놁뒿�덈떎.";

            EventsPopupFunction.ShowExchange(CommonPopupAdapater.Config.Exchange);  //�앹뾽 �ㅽ뵂 

        },
        this.ShowLayerStep2 = function () {
            var extraData = arguments[0];
            var isReload = arguments[1];

            var items = {
                name: extraData.ItemName,
                img: extraData.ItemImage
            };

            if ($.trim(isReload) != '') {
                CommonPopupAdapater.Config.Rewards.isReload = isReload;
            }

            CommonPopupAdapater.Config.Rewards.items = [];
            CommonPopupAdapater.Config.Rewards.items.push(items);
            EventsPopupFunction.ResultReward(CommonPopupAdapater.Config.Rewards);
        },

        this.ShowLayerMessageCommon = function () {
            var extraData = arguments[0];
            var title = arguments[1];
            var isReload = arguments[2];

            if (isReload == null) isReload = false;

            CommonPopupAdapater.Config.Message.title = title;
            CommonPopupAdapater.Config.Message.content = extraData.retMsg;
            CommonPopupAdapater.Config.Message.reload = isReload;

            EventsPopupFunction.ShowMessage(CommonPopupAdapater.Config.Message);
        },
        this.GetRewardList = function () {
            var extraData = arguments[0];

            CommonPopupAdapater.Config.RewardListInfo.totalCount = extraData.totalCount;
            CommonPopupAdapater.Config.RewardListInfo.pageSize = extraData.pageSize;
            CommonPopupAdapater.Config.RewardListInfo.page = extraData.page;
            CommonPopupAdapater.Config.RewardListInfo.blockSize = extraData.blockSize;

            CommonPopupAdapater.Config.RewardListInfo.items = [];

            for (var cnt = 0; cnt < extraData.RewardList.length; cnt++) {
                var item = extraData.RewardList[cnt];

                temp = new Object();

                if (item.n1RewardType == 1) {
                    temp.td0 = "援먰솚";
                }

                temp.td1 = item.strItemName;

                if (item.n1RewardType == 1) {
                    temp.td2 = item.n4UsePoint + " P";
                }
                else {
                    temp.td2 = "-"
                }
                temp.td3 = item.dtCreateDate;

                CommonPopupAdapater.Config.RewardListInfo.items.push(temp);
            }

            EventsPopupFunction.RewardList(CommonPopupAdapater.Config.RewardListInfo);
        },
        this.ShowLayerMessageLuckeyPointMessage = function () {
            var extraData = arguments[0];
            var retMsg = arguments[1];

            CommonPopupAdapater.Config.Message.content = retMsg;

            EventsPopupFunction.ShowMessage(CommonPopupAdapater.Config.Message);
        },
        
        this.ShowLayerMessageBonusMessage = function () {
            var extraData = arguments[0];
            var retMsg = arguments[1];

            CommonPopupAdapater.Config.Message.content = retMsg;

            EventsPopupFunction.ShowMessage(CommonPopupAdapater.Config.Message);
        }        
};

CommonPopupAdapater.Inits();

function ShowMessage(msg) {
    var extraData = {};
    extraData.retMsg = msg;
    CommonPopupAdapater.ShowLayerMessageCommon(extraData, CommonPopupAdapater.Config.Title);
}