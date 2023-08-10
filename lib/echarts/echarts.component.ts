import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { NgxEchartsDirective } from 'ngx-echarts';

@Component({
  selector: 'nz-formly-echarts',
  template: `
    <div
      echarts
      #echarts="echarts"
      [style.height]="to.height"
      [style.width]="to.width"
      [loading]="to.loading"
      [theme]="to.theme"
      [autoResize]="to.autoResize"
      [loadingType]="to.loadingType"
      [initOpts]="to.initOpts"
      [loadingOpts]="to.loadingOpts"
      [merge]="to.merge"
      [options]="to.options | toAsync: $any(to) | async"
      (chartInit)="to.chartInit && to.chartInit($event, field, instance)"
      (chartClick)="to.chartClick && to.chartClick($event, field, instance)"
      (chartDblClick)="to.chartDblClick && to.chartDblClick($event, field, instance)"
      (chartMouseDown)="to.chartMouseDown && to.chartMouseDown($event, field, instance)"
      (chartMouseMove)="to.chartMouseMove && to.chartMouseMove($event, field, instance)"
      (chartMouseUp)="to.chartMouseUp && to.chartMouseUp($event, field, instance)"
      (chartMouseOver)="to.chartMouseOver && to.chartMouseOver($event, field, instance)"
      (chartMouseOut)="to.chartMouseOut && to.chartMouseOut($event, field, instance)"
      (chartGlobalOut)="to.chartGlobalOut && to.chartGlobalOut($event, field, instance)"
      (chartContextMenu)="to.chartContextMenu && to.chartContextMenu($event, field, instance)"
      (chartLegendSelectChanged)="to.chartLegendSelectChanged && to.chartLegendSelectChanged($event, field, instance)"
      (chartLegendSelected)="to.chartLegendSelected && to.chartLegendSelected($event, field, instance)"
      (chartLegendUnselected)="to.chartLegendUnselected && to.chartLegendUnselected($event, field, instance)"
      (chartLegendScroll)="to.chartLegendScroll && to.chartLegendScroll($event, field, instance)"
      (chartDataZoom)="to.chartDataZoom && to.chartDataZoom($event, field, instance)"
      (chartDataRangeSelected)="to.chartDataRangeSelected && to.chartDataRangeSelected($event, field, instance)"
      (chartTimelineChanged)="to.chartTimelineChanged && to.chartTimelineChanged($event, field, instance)"
      (chartTimelinePlayChanged)="to.chartTimelinePlayChanged && to.chartTimelinePlayChanged($event, field, instance)"
      (chartRestore)="to.chartRestore && to.chartRestore($event, field, instance)"
      (chartDataViewChanged)="to.chartDataViewChanged && to.chartDataViewChanged($event, field, instance)"
      (chartMagicTypeChanged)="to.chartMagicTypeChanged && to.chartMagicTypeChanged($event, field, instance)"
      (chartPieSelectChanged)="to.chartPieSelectChanged && to.chartPieSelectChanged($event, field, instance)"
      (chartPieSelected)="to.chartPieSelected && to.chartPieSelected($event, field, instance)"
      (chartPieUnselected)="to.chartPieUnselected && to.chartPieUnselected($event, field, instance)"
      (chartMapSelectChanged)="to.chartMapSelectChanged && to.chartMapSelectChanged($event, field, instance)"
      (chartMapSelected)="to.chartMapSelected && to.chartMapSelected($event, field, instance)"
      (chartMapUnselected)="to.chartMapUnselected && to.chartMapUnselected($event, field, instance)"
      (chartAxisAreaSelected)="to.chartAxisAreaSelected && to.chartAxisAreaSelected($event, field, instance)"
      (chartFocusNodeAdjacency)="to.chartFocusNodeAdjacency && to.chartFocusNodeAdjacency($event, field, instance)"
      (chartUnfocusNodeAdjacency)="to.chartUnfocusNodeAdjacency && to.chartUnfocusNodeAdjacency($event, field, instance)"
      (chartBrush)="to.chartBrush && to.chartBrush($event, field, instance)"
      (chartBrushEnd)="to.chartBrushEnd && to.chartBrushEnd($event, field, instance)"
      (chartBrushSelected)="to.chartBrushSelected && to.chartBrushSelected($event, field, instance)"
      (chartRendered)="to.chartRendered && to.chartRendered($event, field, instance)"
      (chartFinished)="to.chartFinished && to.chartFinished($event, field, instance)"
      [formlyAttributes]="field"
    ></div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldEchartsComponent extends FieldType implements OnInit {
  @ViewChild('echarts', { read: NgxEchartsDirective, static: true }) instance!: NgxEchartsDirective;
  defaultOptions = {
    templateOptions: { autoResize: true, loadingType: 'default', height: '400px' }
  };

  ngOnInit(): void {
    this.to.instance = this.instance;
    this.to.init?.(this.instance, this);
  }
}
