import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-echart',
  templateUrl: './echart.component.html',
  styleUrls: ['./echart.component.css']
})
export class EChartComponent {
  
  chartOption: EChartsOption = {} as EChartsOption
  constructor(){
    this.chartOption={
      xAxis: {
        type: 'category',
        data: ['ديسمبر','نوفمبر','اكتوبر','سبتمبر','اغسطس','يوليو','يونيو', 'مايو', 'ابريل', 'مارس', 'فبراير', 'يناير']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [700, 982, 501, 800, 1200 ,900 ,970 , 1150, 1000, 750, 600, 1100],
        type: 'line',
        smooth: true
      }
    ]
  };
}
}
