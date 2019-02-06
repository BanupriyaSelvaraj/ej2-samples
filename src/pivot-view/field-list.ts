
import { PivotView, PivotFieldList, IDataSet, CalculatedField, FieldList } from '@syncfusion/ej2-pivotview';
import { Browser, setStyleAttribute, enableRipple } from '@syncfusion/ej2-base';
enableRipple(false);

PivotView.Inject(CalculatedField, FieldList);
/**
 * Pivot Field List default sample
 */
/* tslint:disable */
let Pivot_Data: IDataSet[] = require('./Pivot_Data.json');
this.default = (): void => {
    let pivotGridObj: PivotView = new PivotView({
        enginePopulated: () => {
            if (!Browser.isDevice && fieldlistObj && pivotGridObj) {
                fieldlistObj.update(pivotGridObj);
            }
        },
        width: '99%',
        height: 600,
        gridSettings: { columnWidth: 140 }
    });
    pivotGridObj.appendTo('#PivotView');
    let fieldlistObj: PivotFieldList = new PivotFieldList({
        dataSource: {
            data: Pivot_Data,
            expandAll: false,
            allowLabelFilter: true,
            allowValueFilter: true,
            columns: [{ name: 'Year' }, { name: 'Order_Source', caption: 'Order Source' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            values: [{ name: 'In_Stock', caption: 'In Stock' }, { name: 'Sold', caption: 'Units Sold' },
            { name: 'Amount', caption: 'Sold Amount' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: [{ name: 'Product_Categories', caption: 'Product Categories' }],
            enableSorting: true
        },
        allowCalculatedField: true,
        renderMode: 'Fixed',
        load: (): void => {
            if (Browser.isDevice) {
                fieldlistObj.renderMode = 'Popup';
                fieldlistObj.target = '.control-section';
                setStyleAttribute(document.getElementById('PivotFieldList'), {
                    width: '0',
                    height: '0',
                    float: 'left',
                    'display': 'none'
                });
            }
        },
        dataBound: (): void => {
            if (Browser.isDevice) {
                pivotGridObj.element.style.width = '100%';
                pivotGridObj.allowCalculatedField = true;
                pivotGridObj.showFieldList = true;
            }
            pivotGridObj.tooltip.destroy();
            pivotGridObj.refresh();
        },
        enginePopulated: (): void => {
            fieldlistObj.updateView(pivotGridObj);
        }
    });
    fieldlistObj.appendTo('#PivotFieldList');
};
