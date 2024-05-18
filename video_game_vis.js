$(function () { 

    // For tab 1 visualisations (History and General stuff)
    // Tab 1 datasets
    // Number of people who play video games worldwide in billions from 2019 to 2029.
    var player_count = [
        {name: 'Player Count', data: [1.84, 2.16, 2.31, 2.23, 2.42, 2.58, 2.68, 2.78, 2.86, 2.94, 3.02]}
    ];
    
    // Number of video games released in Steam from 2004 to 2023
    var steam_games_number = [
        {name: 'Steam Games Released', data: [72, 87, 150, 153, 202, 286, 312, 350, 444, 573, 1355, 2505, 4319, 6165, 7934, 7711, 9394, 9924, 10341, 12068]}
    ];

    // For tab 2 visualisations (Finances)
    // Tab 2 datasets

    // Market revenue of media in billion USD from 2017 to 2025
    var all_media_market_revenue = [
        {name: 'Books', data: [84.67, 86.53, 89.25, 83.12, 88.03, 83.93, 88.26, 91.98, 94.94]},
        {name: 'Cinema', data: [62.35, 68.62, 74.33, 20.21, 37.78, 57.91, 74.00, 85.16, 91.69]},
        {name: 'Games', data: [129.63, 242.52, 265.21, 321.63, 369.93, 361.76, 406.20, 455.28, 502.04]},
        {name: 'Music, Radio, Podcasts', data: [82.08, 86.79, 92.22, 73.01, 79.83, 103.40, 114.90, 120.30, 124.80]},
        {name: 'Newspaper', data: [209.80, 204.70, 200.30, 175.70, 176.80, 167.00, 165.80, 163.70, 160.50]},
        {name: 'TV & Video', data: [488.80, 517.40, 549.90, 575.70, 638.30, 640.70, 672.10, 701.10, 725.80]}
    ];

    // Change in market revenue of media in % from 2018 to 2025
    var all_media_market_revenue_change = [
        {name: 'Books', data: [2.2, 3.1, -6.9, 5.9, -4.7, 5.2, 4.2, 3.2]},
        {name: 'Cinema', data: [10.1, 8.3, -72.8, 86.9, 53.3, 27.8, 15.1, 7.7]},
        {name: 'Games', data: [87.1, 9.4, 21.3, 15.0, -2.2, 12.3, 12.1, 10.3]},
        {name: 'Music, Radio, Podcasts', data: [5.7, 6.3, -20.8, 9.3, 29.6, 11.1, 4.7, 3.8]},
        {name: 'Newspaper', data: [-2.4, -2.2, -12.3, 0.6, -5.5, -0.7, -1.2, -2.0]},
        {name: 'TV & Video', data: [5.9, 6.3, 4.7, 10.9, 0.4, 4.9, 4.3, 3.5]}
    ];

    // Market revenue of game segment types in billion USD from 2017 to 2025
    var game_segment_market_revenue = [
        {name: 'Cloud Gaming', data: [0.48, 0.58, 0.76, 1.09, 1.67, 2.67, 4.34, 6.91, 10.46]},
        {name: 'Download Games', data:[13.47, 14.10, 14.97, 17.00, 18.46, 18.17, 19.98, 21.47, 22.77]},
        {name: 'Gaming Hardware', data: [0, 95.86, 97.75, 114.20, 129.30, 127.20, 145.30, 161.70, 178.40]},
        {name: 'Gaming Live Streaming', data: [4.75, 5.17, 5.80, 6.74, 8.05, 9.74, 11.69, 13.65, 15.32]},
        {name: 'Gaming Networks', data: [1.62, 1.86, 2.18, 2.78, 3.19, 3.23, 3.65, 3.96, 4.21]},
        {name: 'In-game Advertising', data: [24.49, 31.31, 37.82, 51.53, 72.94, 83.18, 94.53, 109.60, 124.40]},
        {name: 'Mobile Games', data: [54.98, 63.13, 74.35, 92.45, 99.19, 82.40, 89.25, 98.74, 105.70]},
        {name: 'Online Games', data: [13.85, 15.45, 17.49, 21.33, 23.83, 23.81, 26.14, 27.97, 29.48]},
        {name: 'Physically Sold Video Games', data: [15.99, 15.06, 14.09, 14.51, 13.30, 11.36, 11.32, 11.28, 11.30]}
    ];

    // Change in market revenue of game segment types in billion USD from 2018 to 2025
    var game_segment_market_revenue_change = [
        {name: 'Cloud Gaming', data: [20.9, 31.2, 42.8, 53.2, 60.2, 62.5, 59.4, 51.4]},
        {name: 'Download Games', data:[4.6, 6.2, 13.6, 8.6, -1.6, 10.0, 7.4, 6.1]},
        {name: 'Gaming Hardware', data: [0, 2.0, 16.8, 13.3, -1.7, 14.2, 11.3, 10.4]},
        {name: 'Gaming Live Streaming', data: [8.8, 12.3, 16.1, 19.5, 21.1, 20.1, 16.7, 12.3]},
        {name: 'Gaming Networks', data: [14.8, 17.2, 27.4, 15.1, 1.1, 13.0, 8.5, 6.4]},
        {name: 'In-game Advertising', data: [27.9, 20.8, 36.3, 41.5, 14.0, 13.6, 16.0, 13.5]},
        {name: 'Mobile Games', data: [14.8, 17.8, 24.4, 7.3, -16.9, 8.3, 10.6, 7.0]},
        {name: 'Online Games', data: [11.5, 13.2, 21.9, 11.7, -0.1, 9.8, 7.0, 5.4]},
        {name: 'Physically Sold Video Games', data: [-5.8, -6.4, 2.9, -8.3, -14.6, -0.4, -0.3, 0.1]}
    ];

    // Video games revenue in selected countries 2023
    // "China", "United States", "Japan", "South Korea", "United Kingdom"
    var country_game_revenue = [
        {name: "Revenue", data: [82.06, 68.27, 25.84, 8.71, 7.94]}
    ];

    // Revenue from video games worldwide in 2022 by device in billion USD
    var device_game_revenue = [
        {name: 'Revenue', data: [103.50, 53, 40.40]}
    ];

    var game_industry_gva = [
        {name: 'Million GBP', data: [397, 683, 521, 431, 389, 385, 926, 2161, 2454, 1769, 3204, 3475, 2220]}
    ];

    var game_industry_employment = [
        {name: 'Number of Employees', data: [13, 15, 19, 24, 20, 23, 30, 22, 27, 33, 43, 47]}
    ]

    // Popular gaming business models among developers worldwide 2024
    var business_models = [
        {name: 'Developers (%)', data: [51, 32, 24, 21, 21, 19, 10, 6, 6, 5, 4, 3]}
    ];

    // F2P games revenue worldwide in billion USD (2018-2024)
    var f2p_game_revenue = [
        {name: 'Mobile', data: [58.80, 67, 73.80, 75.60, 78.63, 83.21, 88.96]},
        {name: 'Console', data: [2.10, 1.60, 1.80, 2.80, 3.55, 3.77, 3.55]},
        {name: 'PC', data: [21.60, 21.50, 22.70, 23.10, 23.66, 24.39, 25.22]}
    ];

    // F2P games revenue growth worldwide in % (2019-2024)
    var f2p_game_revenue_change = [
        {name: 'Mobile', data: [13.95, 10.15, 2.44, 4.01, 5.82, 6.91]},
        {name: 'Console', data: [-23.81, 12.50, 55.56, 26.79, 6.20, -5.84]},
        {name: 'PC', data: [-0.46, 5.58, 1.76, 2.42, 3.09, 3.40]}
    ];

    // Fastest mobile games to reach 100 million usd in player spending as of June 2021 (Days needed)
    var fastest_100_mil_usd_mobile_games = [
        {name: 'Honor of Kings', data: 11},
        {name: 'Ni No Kuni: Cross Worlds', data: 11},
        {name: 'Pokemon GO', data: 12},
        {name: 'Genshin Impact', data: 13},
        {name: 'Lineage 2: Revolution', data: 13}
    ];

    // Fastest mobile games to reach 100 million usd in player spending as of March 2021 (Months needed)
    var fastest_1_bil_usd_mobile_games = [
        {name: 'Genshin Impact', data: 6},
        {name: 'Pokemon GO', data: 9},
        {name: 'Lineage', data: 10},
        {name: 'Clash Royale', data: 11},
        {name: 'Lineage 2: Revolution', data: 12}
    ];

    var datasets = [
        {   // Market revenue of media in billion USD from 2017 to 2025
            // Chart Options : Line, Area, Bar, Column, Stacked Column
            seriesName: "media_market_revenue",
            seriesTitle: {
                text: "Market Revenue of Media (2017-2025)"
            },
            plotOptionsLine: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                }
            },
            // plotOptionsArea: {
            //     area: {
            //         marker: {
            //             enabled: true,
            //             symbol: 'circle',
            //             radius: 2,
            //             states: {
            //                 hover: {
            //                     enabled: true
            //                 }
            //             }
            //         }
            //     }
            // },
            plotOptionsBar: {
                bar: {
                    groupPadding: 0.1
                }
            },
            plotOptionsColumn: {
                column: {
                    borderRadius: '0%'
                }
            },
            plotOptionsStack: {
                column: {
                    stacking: 'normal'
                }
            },
            xAxis: {
                title: {text: "Year"},
                categories: [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
                accessibility: {
                    rangeDescription: "Range: 2017 to 2025"
                }
            },
            yAxis: {
                title: {text: "Market Revenue in Billion USD"},
                // min: 0,
                // max: 750,
                // tickInterval: 100
            },
            yAxisStack: {
                title: {text: "Market Revenue in Billion USD"},
                // min: 0,
                // max: 750,
                // tickInterval: 100,
                stackLabels: {
                    enabled: true
                }
            },
            legend: {
                enabled: true,
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
            dataset: all_media_market_revenue
        },
        {   // Change in market revenue of media in % from 2017 to 2025
            // Chart Options : Line, Area, Bar, Column
            seriesName: "media_market_revenue_change",
            seriesTitle: {
                text: "Growth in Media Market Revenue (2018-2025)"
            },
            plotOptionsLine: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                }
            },
            // plotOptionsArea: {
            //     area: {
            //         marker: {
            //             enabled: true,
            //             symbol: 'circle',
            //             radius: 2,
            //             states: {
            //                 hover: {
            //                     enabled: true
            //                 }
            //             }
            //         }
            //     }
            // },
            plotOptionsBar: {
                bar: {
                    groupPadding: 0.1
                }
            },
            plotOptionsColumn: {
                column: {
                    borderRadius: '0%'
                }
            },
            xAxis: {
                title: {text: "Year"},
                categories: [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
                accessibility: {
                    rangeDescription: "Range: to 2025"
                }
            },
            yAxis: {
                title: {text: "Market Revenue Growth in %"},
                // min: -90,
                // max: 90,
                // tickInterval: 20
            },
            legend: {
                enabled: true,
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
            dataset: all_media_market_revenue_change
        },
        {   // Chart Options : Line
            seriesName: "player_count",
            seriesTitle: {
                text: "Number of People who play Video Games worldwide (2019-2029)"
            },
            plotOptionsLine: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            xAxis: {
                title: {text: "Year"},
                categories: [2019, 2020, 2021, 2022, 2023, 2024, "2025*", "2026*", "2027*", "2028*", "2029*"],
                accessibility: {
                    rangeDescription: 'Range: 2019 to 2029'
                }
            },
            yAxis: {
                title: {text: "Player Count in Billion"},
                min: 0,
                max: 4,
                tickInterval: 1
            },
            legend: {enabled: false},
            dataset: player_count
        },
        {   // Chart Options : Line, Column
            seriesName: "steam_games_number",
            seriesTitle: {
                text: "Number of Video Games Released on Steam (2004-2023)"
            },
            plotOptionsLine: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            plotOptionsColumn: {
                column: {
                    dataLabels: {
                        enabled: true
                    },
                }
            },
            xAxis: {
                title: {text: "Year"},
                categories: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
                accessibility: {
                    rangeDescription: 'Range: 2004 to 2023'
                }
            },
            yAxis: {
                title: {text: "Video Games Released"},
                // min: 0,
                // max: 13000,
                // tickInterval: 2000
            },
            legend: {enabled: false},
            dataset: steam_games_number
        },
        {   // Digital Game Revenue in Selected Countries 2023
            // Chart Options : Bar
            seriesName: "country_game_revenue",
            seriesTitle: {
                text: "Top 5 Countries with Highest Digital Game Revenue (2023)"
            },
            plotOptionsBar: {
                bar: {
                    groupPadding: 0.1
                }
            },
            xAxis: {
                title: {text: "Country"},
                categories: ["China", "United States", "Japan", "South Korea", "United Kingdom"],
                accessibility: {
                    rangeDescription: "Range: China, US, Japan, South Korea, UK"
                }
            },
            yAxis: {
                title: {text: "Video Game Revenue in billion USD"},
                // min: -90,
                // max: 90,
                // tickInterval: 20
            },
            legend: {
                enabled: true,
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
            legend: {enabled: false},
            dataset: country_game_revenue
        },
        {   // Game revenue from devices 2022
            // Chart Options : Pie, Bar
            seriesName: "device_game_revenue",
            seriesTitle: {
                text: "Revenue from Video Games based on Device in billion USD (2022)"
            },
            plotOptionsPie: {
                series: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: [{
                        enabled: true,
                        distance: 20
                    }, {
                        enabled: true,
                        distance: -60,
                        format: '{point.percentage:.1f}%',
                        style: {
                            fontSize: '1.5em',
                            textOutline: 'none',
                            opacity: 0.8
                        },
                        filter: {
                            operator: '>',
                            property: 'percentage',
                            value: 10
                        }
                    }]
                }
            },
            plotOptionsBar: {
                bar: {
                    groupPadding: 0.1,
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            plotOptionsColumn: {
                column: {
                    borderRadius: '0%',
                    dataLabels: {
                        enabled: true
                    }
                },
            },
            xAxis: {
                title: {text: "Device"},
                categories: ["Mobile", "Console", "PC"], 
                accessibility: {
                    rangeDescription: 'Range: Mobile, Console, and PC'
                }
            },
            yAxis: {
                title: {text: "Revenue in billion USD"}
            },
            suffix: 'B',
            legend: {enabled: false},
            dataset: device_game_revenue,
            datasetPie: {
                name: "USD",
                colorByPoint: true,
                data: [
                    {name: 'Mobile', y: 103.50},
                    {name: 'Console', y: 53},
                    {name: 'PC', y: 40.40}
                ]
            }
        },
        {
            seriesName: "game_industry_gva",
            seriesTitle: {text: "Video Game Industry's Gross Value Added (GVA) in the UK (2010-2022)"},
            plotOptionsLine: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            plotOptionsColumn: {
                column: {
                    borderRadius: '0%',
                    dataLabels: {
                        enabled: true
                    }
                },
            },
            xAxis: {
                title: {text: "Year"},
                categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
                accessibility: {
                    rangeDescription: "Range: From 2010 to 2022"
                }
            },
            yAxis: {
                title: {text: "GVA (Million GBP)"}
            },
            legend: {enabled: false},
            dataset: game_industry_gva
        },
        {   // Number of employees in the gaming industry in 1000s (2011-2022)
            // Chart options: Line
            seriesName: "game_industry_employment",
            seriesTitle: {text: "Number of Employees in the Video Game Industry in the UK (2011-2022)"},
            plotOptionsLine: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            xAxis: {
                title: {text: "Year"},
                categories: [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
                accessibility: {
                    rangeDescription: "Range: From 2011 to 2022"
                }
            },
            yAxis: {
                title: {text: "Number of employees (in 1000s)"},
            },
            legend: {enabled: false},
            dataset: game_industry_employment
        },
        {   // Popular business models among developers (2024)
            // Chart options: Bar
            seriesName: "business_models",
            seriesTitle: {text: "Popularity of Gaming Business Models Among Developers (2024)"},
            plotOptionsBar: {
                bar: {
                    groupPadding: 0.1,
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            xAxis: {
                title: {text: "Business Models"},
                categories: [
                    "Digital Premium Game", "Free To Download", "DLC/Updates", "Physical Premium Game", "Paid In-Game Items", 
                    "Paid In-Game Currency", "Paid Subscription Library", "Gacha", "Community-Funded", "In-Game Product Placement", 
                    "Premium Tier Subscriptions", "Blockchain-driven Monetization"
                ],
                accessibility: {
                    rangeDescription: 'Range: Digital Premium Game, Free To Download, DLC/Updates, Physical Premium Game, Paid In-Game Items, Paid In-Game Currency, ' + 
                    'Paid Subscription Library, Gacha, Community-Funded, In-Game Product Placement, Premium Tier Subscriptions, and Blockchain-driven Monetization'
                }
            },
            yAxis: {
                title: {text: "Share of Respondents (%)"}
            },
            legend: {enabled: false},
            dataset: business_models
        },
        {   // F2P games revenue worldwide in billion USD (2018-2024)
            // Chart Options: Bar, Column, Stacked Column
            seriesName: "f2p_game_revenue",
            seriesTitle: {text: "F2P Games' Revenue Worldwide based on Device in billion USD (2018-2024)"},
            plotOptionsLine: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                }
            },
            plotOptionsBar: {
                bar: {
                    groupPadding: 0.1
                }
            },
            plotOptionsColumn: {
                column: {
                    borderRadius: '0%'
                }
            },
            plotOptionsStack: {
                column: {
                    stacking: 'normal'
                }
            },
            xAxis: {
                title: {text: "Year"},
                categories: [2018, 2019, 2020, 2021, 2022, 2023, 2024], 
                accessibility: {
                    rangeDescription: 'Range: 2018 to 2024'
                }
            },
            yAxis: {
                title: {text: "Revenue in Billion USD"},
            },
            yAxisStack: {
                title: {text: "Revenue in Billion USD"},
                stackLabels: {
                    enabled: true
                }
            },
            legend: {
                enabled: true,
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
            dataset: f2p_game_revenue
        },
        {
            seriesName: "f2p_game_revenue_change",
            seriesTitle: {text: "Growth in revenue of Free-To-Play Games worldwide (2019-2024)"},
            plotOptionsLine: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                }
            },
            plotOptionsBar: {
                bar: {
                    groupPadding: 0.1
                }
            },
            plotOptionsColumn: {
                column: {
                    borderRadius: '0%'
                }
            },
            xAxis: {
                title: {text: "Year"},
                categories: [2019, 2020, 2021, 2022, 2023, 2024], 
                accessibility: {
                    rangeDescription: 'Range: 2018 to 2024'
                }
            },
            yAxis: {
                title: {text: "Revenue in Billion USD"},
            },
            legend: {
                enabled: true,
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
            dataset: f2p_game_revenue_change
        }
    ];

    function getDataset(datasetName){        
        for (var i=0; i<datasets.length; i++){ 
			if(datasets[i].seriesName === datasetName){
				return (datasets[i]);
			};
		};
		alert('Error: no dataset matching '+datasetName);
		console.log ('no dataset matching ', datasetName);
		return ;
    };

    function makeLineChart(renderTo, dataSeries, lineType){
        plotType = {};
        chartType = {};
        if (lineType === "line"){
            chartType = {
                spacingRight: 30
            };
            plotType = dataSeries.plotOptionsLine;
        } else if (lineType === "area"){
            chartType = {
                type: "area",
                spacingRight: 30
            }
            plotType = dataSeries.plotOptionsArea;
        } else if (lineType === "spline") {
            chartType = {
                type: "spline",
                spacingRight: 30
            }
            plotType = dataSeries.plotOptionsLine;
        } else {
            alert('Error: No line chart matching ' + lineType);
		    console.log ('No line chart matching ', lineType);
        };

        lineChartSpec = {
            chart: chartType,
            legend: dataSeries.legend,
            title: dataSeries.seriesTitle,
            xAxis: dataSeries.xAxis,
            yAxis: dataSeries.yAxis,
            plotOptions: plotType,
            series: dataSeries.dataset
        };

        console.log(lineChartSpec);
        $(renderTo).highcharts(lineChartSpec);
    };


    function makeBarChart(renderTo, dataSeries){
        barChartSpec = {
            chart: {
                type: "bar",
                spacingRight: 30
            },
            legend: dataSeries.legend,
            title: dataSeries.seriesTitle,
            xAxis: dataSeries.xAxis,
            yAxis: dataSeries.yAxis,
            plotOptions: dataSeries.plotOptionsBar,
            series: dataSeries.dataset
        };

        console.log(barChartSpec);
        $(renderTo).highcharts(barChartSpec);
    };

    function makeColumnChart(renderTo, dataSeries, columnType){
        plotOption = {};
        yAxisOption = {};
        if (columnType === "stack") {
            plotOption = dataSeries.plotOptionsStack;
            yAxisOption = dataSeries.yAxisStack;
        } else if (columnType === "column") {
            plotOption = dataSeries.plotOptionsColumn;
            yAxisOption = dataSeries.yAxis;
        } else {
            alert('Error: No column chart matching '+ columnType);
		    console.log ('No column chart matching ', columnType);
        }
        columnChartSpec = {
            chart: {
                type: "column",
                spacingRight: 30
            },
            legend: dataSeries.legend,
            title: dataSeries.seriesTitle,
            xAxis: dataSeries.xAxis,
            yAxis: yAxisOption,
            plotOptions: plotOption,
            series: dataSeries.dataset
        };

        console.log(columnChartSpec)
        $(renderTo).highcharts(columnChartSpec);
    };

    function makePieChart(renderTo, dataSeries){
        pieChartSpec = {
            chart: {
                type: "pie",
                spacingRight: 30 
            },
            tooltip: {
                valueSuffix: dataSeries.suffix
            },
            title: dataSeries.seriesTitle,
            plotOptions: dataSeries.plotOptionsPie,
            series: [dataSeries.datasetPie]
        }
        console.log(pieChartSpec);
        $(renderTo).highcharts(pieChartSpec);
    };

    function build_vis_1(){
        mediaMarketRevenueSeries = getDataset("media_market_revenue");
        playerCountSeries = getDataset("player_count");
        steamGamesSeries = getDataset("steam_games_number");
        deviceGameRevenueSeries = getDataset("device_game_revenue");

        makeColumnChart("#media-market-revenue-chart", mediaMarketRevenueSeries, "column");
        makeLineChart("#player-count-chart", playerCountSeries, "line");
        makeLineChart("#steam-games-chart", steamGamesSeries, "line");
        makePieChart("#device-game-revenue-chart", deviceGameRevenueSeries);
    };

    function prep_vis_1_listeners(){
        $('#steam-games-chart-choice').on('change', function() {
            seriesType = $('#steam-games-chart-choice option:selected').val();
            dataSeries	= getDataset("steam_games_number");
            $('#steam-games-chart').empty();
            if (seriesType === "line"){
                makeLineChart("#steam-games-chart", dataSeries, seriesType);
            }
            else if (seriesType === "column") {
                makeColumnChart("#steam-games-chart", dataSeries, seriesType);
            } 
            else {
                alert("No series type matching " + seriesType);
                console.log("No series type matching " + seriesType);
            };
        });

        $('#media-market-choice').on('change', function() {
            seriesName = $('#media-market-choice option:selected').val();
            seriesType = $('#media-market-chart-choice option:selected').val();
            dataSeries	= getDataset(seriesName);
            $('#media-market-chart').empty();
            if (seriesName === "media_market_revenue_change") {
                $("#media-market-chart-choice option[value='stack']").remove(); 
            } 
            else if (seriesName === "media_market_revenue")
            {
                $('#media-market-chart-choice').append('<option value="stack" class="media-stack-option">Stacked Column</option>'); 
            }

            if (seriesType === "line"){
                makeLineChart("#media-market-revenue-chart", dataSeries, seriesType);
            }
            else if (seriesType === "bar") {
                makeBarChart("#media-market-revenue-chart", dataSeries);
            }
            else if (seriesType === "column" || seriesType === "stack") {
                makeColumnChart("#media-market-revenue-chart", dataSeries, "column");
            } 
            else {
                alert("No series type matching " + seriesType);
                console.log("No series type matching " + seriesType);
            };
        });

        $('#media-market-chart-choice').on('change', function() {
            seriesName = $('#media-market-choice option:selected').val();
            seriesType = $('#media-market-chart-choice option:selected').val();
            dataSeries	= getDataset(seriesName);
            $('#media-market-chart').empty();
            if (seriesType === "line"){
                makeLineChart("#media-market-revenue-chart", dataSeries, seriesType);
            }
            else if (seriesType === "bar") {
                makeBarChart("#media-market-revenue-chart", dataSeries);
            }
            else if (seriesType === "column" || seriesType === "stack") {
                makeColumnChart("#media-market-revenue-chart", dataSeries, seriesType);
            } 
            else {
                alert("No series type matching " + seriesType);
                console.log("No series type matching " + seriesType);
            };
        }); 

        $('#device-game-revenue-chart-choice').on('change', function() {
            seriesType = $('#device-game-revenue-chart-choice option:selected').val();
            dataSeries	= getDataset("device_game_revenue");
            $('#device-game-revenue-chart').empty();
            if (seriesType === "pie"){
                makePieChart("#device-game-revenue-chart", dataSeries);
            }
            else if (seriesType === "bar") {
                makeBarChart("#device-game-revenue-chart", dataSeries);
            } 
            else if (seriesType === "column") {
                makeColumnChart("#device-game-revenue-chart", dataSeries, "column");
            } 
            else {
                alert("No series type matching " + seriesType);
                console.log("No series type matching " + seriesType);
            };
        });
    };

    function build_vis_2(){
        countryGameRevenueSeries = getDataset("country_game_revenue");
        gameIndustryGVA = getDataset("game_industry_gva");
        gameIndustryEmploymentSeries = getDataset("game_industry_employment");

        makeBarChart("#game-revenue-country-chart", countryGameRevenueSeries);
        makeLineChart("#game-industry-gva-chart", gameIndustryGVA, "line");
        makeLineChart("#game-industry-employment-chart", gameIndustryEmploymentSeries, "line");
    };

    function prep_vis_2_listeners(){
        $('#game-industry-gva-chart-choice').on('change', function() {
            seriesType = $('#game-industry-gva-chart-choice option:selected').val();
            dataSeries	= getDataset("game_industry_gva");
            $('#game-industry-gva-chart').empty();
            if (seriesType === "line"){
                makeLineChart("#game-industry-gva-chart", dataSeries, seriesType);
            }
            else if (seriesType === "column") {
                makeColumnChart("#game-industry-gva-chart", dataSeries, seriesType);
            } 
            else {
                alert("No series type matching " + seriesType);
                console.log("No series type matching " + seriesType);
            };
        });
        
    };

    function build_vis_3(){
        businessModelSeries = getDataset("business_models");
        f2pGameRevenueSeries = getDataset("f2p_game_revenue");
        
        makeBarChart("#business-models-chart", businessModelSeries);
        makeLineChart("#f2p-game-revenue-chart", f2pGameRevenueSeries, "line");
    };

    function prep_vis_3_listeners(){
        $('#f2p-game-revenue-choice').on('change', function() {
            seriesName = $('#f2p-game-revenue-choice option:selected').val();
            seriesType = $('#f2p-game-revenue-chart-choice option:selected').val();
            dataSeries	= getDataset(seriesName);
            $('#f2p-game-revenue-chart').empty();
            if (seriesName === "f2p_game_revenue_change") {
                $("#f2p-game-revenue-chart-choice option[value='stack']").remove(); 
            } 
            else if (seriesName === "f2p_game_revenue")
            {
                $('#f2p-game-revenue-chart-choice').append('<option value="stack">Stacked Column</option>'); 
            }

            if (seriesType === "line"){
                makeLineChart("#f2p-game-revenue-chart", dataSeries, seriesType);
            }
            else if (seriesType === "bar") {
                makeBarChart("#f2p-game-revenue-chart", dataSeries);
            }
            else if (seriesType === "column" || seriesType === "stack") {
                makeColumnChart("#f2p-game-revenue-chart", dataSeries, "column");
            } 
            else {
                alert("No series type matching " + seriesType);
                console.log("No series type matching " + seriesType);
            };
        });

        $('#f2p-game-revenue-chart-choice').on('change', function() {
            seriesName = $('#f2p-game-revenue-choice option:selected').val();
            seriesType = $('#f2p-game-revenue-chart-choice option:selected').val();
            dataSeries	= getDataset(seriesName);
            $('#f2p-game-revenue-chart').empty();
            if (seriesType === "line"){
                makeLineChart("#f2p-game-revenue-chart", dataSeries, seriesType);
            }
            else if (seriesType === "bar") {
                makeBarChart("#f2p-game-revenue-chart", dataSeries);
            }
            else if (seriesType === "column" || seriesType === "stack") {
                makeColumnChart("#f2p-game-revenue-chart", dataSeries, "column");
            } 
            else {
                alert("No series type matching " + seriesType);
                console.log("No series type matching " + seriesType);
            };
        }); 
    };

    function build_vis_4(){

    };

    function prep_vis_4_listeners(){
        
    };

    build_vis_1();
    prep_vis_1_listeners();

    build_vis_2();
    prep_vis_2_listeners();

    build_vis_3();
    prep_vis_3_listeners();

    build_vis_4();
    prep_vis_4_listeners();
});