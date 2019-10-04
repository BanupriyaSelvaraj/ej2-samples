import { loadCultureFiles } from '../common/culture-loader';
import { FileManager, Toolbar, NavigationPane, DetailsView, ContextMenu } from '@syncfusion/ej2-filemanager';

FileManager.Inject(Toolbar, NavigationPane, DetailsView, ContextMenu);

/**
 * File Manager sample with Amazon S3 service
 */
(window as any).default = (): void => {
    loadCultureFiles();
    let hostUrl: string = 'https://amazons3.azurewebsites.net/api/AmazonS3Provider/';
    let fileObject: FileManager = new FileManager({
        ajaxSettings: {
            url: hostUrl + 'AmazonS3FileOperations',
            getImageUrl: hostUrl + 'AmazonS3GetImage',
            uploadUrl: hostUrl + 'AmazonS3Upload',
            downloadUrl: hostUrl + 'AmazonS3Download'
        },
        searchSettings: {allowSearchOnTyping: false}
    });
    fileObject.appendTo('#filemanager');
};