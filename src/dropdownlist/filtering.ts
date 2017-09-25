/**
 * DropDownList Filtering Sample
 */
import { DropDownList, FilteringEventArgs } from '@syncfusion/ej2-dropdowns';
import { Query } from '@syncfusion/ej2-data';

this.default = () => {
    let countries: { [key: string]: Object; }[] = [
        { name: 'Australia', code: 'AU' },
        { name: 'Bermuda', code: 'BM' },
        { name: 'Canada', code: 'CA' },
        { name: 'Cameroon', code: 'CM' },
        { name: 'Denmark', code: 'DK' },
        { name: 'France', code: 'FR' },
        { name: 'Finland', code: 'FI' },
        { name: 'Germany', code: 'DE' },
        { name: 'Greenland', code: 'GL' },
        { name: 'Hong Kong', code: 'HK' },
        { name: 'India', code: 'IN' },
        { name: 'Italy', code: 'IT' },
        { name: 'Japan', code: 'JP' },
        { name: 'Mexico', code: 'MX' },
        { name: 'Norway', code: 'NO' },
        { name: 'Poland', code: 'PL' },
        { name: 'Switzerland', code: 'CH' },
        { name: 'United Kingdom', code: 'GB' },
        { name: 'United States', code: 'US' }
    ];
    let dropDownListObj: DropDownList = new DropDownList({
        placeholder: 'Select a country',
        filterBarPlaceholder: 'Search',
        dataSource: countries,
        fields: { text: 'name', value: 'code' },
        popupHeight: '250px',
        allowFiltering: true,
        filtering: (e: FilteringEventArgs) => {
            let query: Query = new Query();
            query = (e.text !== '') ? query.where('name', 'startswith', e.text, true) : query;
            e.updateData(countries, query);
        }
    });
    dropDownListObj.appendTo('#country');
};