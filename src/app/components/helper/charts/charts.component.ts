import { Component,  OnInit, OnDestroy } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css'
})
export class ChartsComponent {
  private chart: am4charts.XYChart | undefined;

  ngOnInit() {
        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end
    
        // Create chart instance
        let chart = am4core.create("chartdiv", am4charts.XYChart);
        this.chart = chart;
    
        // Add data
        chart.data = [{
          "country": "USA",
          "visits": 100
        }, {
          "country": "China",
          "visits": 150
        }, {
          "country": "Japan",
          "visits": 120
        }, {
          "country": "Germany",
          "visits": 110
        }, {
          "country": "UK",
          "visits": 90
        }, {
          "country": "France",
          "visits": 30
        }, {
          "country": "India",
          "visits": 20
        }, {
          "country": "Spain",
          "visits": 50
        }, {
          "country": "Netherlands",
          "visits": 10
        }, {
          "country": "Russia",
          "visits": 250
        }, {
          "country": "South Korea",
          "visits": 45
        }, {
          "country": "Canada",
          "visits": 48
        }];
    
        chart.padding(40, 40, 40, 40);
    
        // Create axes
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.dataFields.category = "country";
        categoryAxis.renderer.minGridDistance = 60;
        categoryAxis.renderer.inversed = true;
        categoryAxis.renderer.grid.template.disabled = true;
    
        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.min = 0;
        valueAxis.extraMax = 0.1;
    
        // Create series
        let series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.categoryX = "country";
        series.dataFields.valueY = "visits";
        series.tooltipText = "{valueY.value}"
        series.columns.template.strokeOpacity = 0;
        series.columns.template.column.cornerRadiusTopRight = 10;
        series.columns.template.column.cornerRadiusTopLeft = 10;
    
        let labelBullet = series.bullets.push(new am4charts.LabelBullet());
        labelBullet.label.verticalCenter = "bottom";
        labelBullet.label.dy = -10;
        labelBullet.label.text = "{values.valueY.workingValue.formatNumber('#.')}";
    
        chart.zoomOutButton.disabled = true;
    
        // Set up fill adapter
        series.columns.template.adapter.add("fill", (fill, target) => {
          if (target.dataItem) {
            return chart.colors.getIndex(target.dataItem.index);
          }
          return fill;
        });
    
        // Add interval
        setInterval(() => {
          am4core.array.each(chart.data, (item: any) => {
            item.visits += Math.round(Math.random() * 200 - 100);
            item.visits = Math.abs(item.visits);
          });
          chart.invalidateRawData();
        }, 2000);
    
        categoryAxis.sortBySeries = series;
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.dispose();
    }
  }
}
