import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { NgxEchartsDirective } from 'ngx-echarts';

@Component({
  selector: 'nz-formly-echarts',
  template: `
    <div
      echarts
      #echarts="echarts"
      [style.height]="props.height"
      [style.width]="props.width"
      [loading]="props.loading"
      [theme]="props.theme"
      [autoResize]="props.autoResize"
      [loadingType]="props.loadingType"
      [initOpts]="props.initOpts"
      [loadingOpts]="props.loadingOpts"
      [merge]="props.merge"
      [options]="props.options | toAsync: $any(props) | async"
      (chartInit)="props.chartInit?.($event, field, instance)"
      (chartClick)="props.chartClick?.($event, field, instance)"
      (chartDblClick)="props.chartDblClick?.($event, field, instance)"
      (chartMouseDown)="props.chartMouseDown?.($event, field, instance)"
      (chartMouseMove)="props.chartMouseMove?.($event, field, instance)"
      (chartMouseUp)="props.chartMouseUp?.($event, field, instance)"
      (chartMouseOver)="props.chartMouseOver?.($event, field, instance)"
      (chartMouseOut)="props.chartMouseOut?.($event, field, instance)"
      (chartGlobalOut)="props.chartGlobalOut?.($event, field, instance)"
      (chartContextMenu)="props.chartContextMenu?.($event, field, instance)"
      (chartLegendSelectChanged)="props.chartLegendSelectChanged?.($event, field, instance)"
      (chartLegendSelected)="props.chartLegendSelected?.($event, field, instance)"
      (chartLegendUnselected)="props.chartLegendUnselected?.($event, field, instance)"
      (chartLegendScroll)="props.chartLegendScroll?.($event, field, instance)"
      (chartDataZoom)="props.chartDataZoom?.($event, field, instance)"
      (chartDataRangeSelected)="props.chartDataRangeSelected?.($event, field, instance)"
      (chartTimelineChanged)="props.chartTimelineChanged?.($event, field, instance)"
      (chartTimelinePlayChanged)="props.chartTimelinePlayChanged?.($event, field, instance)"
      (chartRestore)="props.chartRestore?.($event, field, instance)"
      (chartDataViewChanged)="props.chartDataViewChanged?.($event, field, instance)"
      (chartMagicTypeChanged)="props.chartMagicTypeChanged?.($event, field, instance)"
      (chartPieSelectChanged)="props.chartPieSelectChanged?.($event, field, instance)"
      (chartPieSelected)="props.chartPieSelected?.($event, field, instance)"
      (chartPieUnselected)="props.chartPieUnselected?.($event, field, instance)"
      (chartMapSelectChanged)="props.chartMapSelectChanged?.($event, field, instance)"
      (chartMapSelected)="props.chartMapSelected?.($event, field, instance)"
      (chartMapUnselected)="props.chartMapUnselected?.($event, field, instance)"
      (chartAxisAreaSelected)="props.chartAxisAreaSelected?.($event, field, instance)"
      (chartFocusNodeAdjacency)="props.chartFocusNodeAdjacency?.($event, field, instance)"
      (chartUnfocusNodeAdjacency)="props.chartUnfocusNodeAdjacency?.($event, field, instance)"
      (chartBrush)="props.chartBrush?.($event, field, instance)"
      (chartBrushEnd)="props.chartBrushEnd?.($event, field, instance)"
      (chartBrushSelected)="props.chartBrushSelected?.($event, field, instance)"
      (chartRendered)="props.chartRendered?.($event, field, instance)"
      (chartFinished)="props.chartFinished?.($event, field, instance)"
      [formlyAttributes]="field"
    ></div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldEchartsComponent extends FieldType implements OnInit {
  @ViewChild('echarts', { read: NgxEchartsDirective, static: true }) instance!: NgxEchartsDirective;
  override defaultOptions = {
    props: { autoResize: true, loadingType: 'default', height: '400px' }
  };

  ngOnInit(): void {
    this.props.instance = this.instance;
    this.props.init?.(this.instance, this);
  }
}
