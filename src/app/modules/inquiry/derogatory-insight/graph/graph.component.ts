import { Component, OnInit } from '@angular/core';
import { Edge, Node } from '@swimlane/ngx-graph';
import { Subject } from 'rxjs';

interface IHierarchical {
  nodes: Node[];
  links: Edge[];
}

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  userAvatar: string = `assets/graph-icons/Icons/Person (Shaded Shirt).png`;
  accountIcon: string = `assets/graph-icons/Icons/Person (Shaded Shirt).png`;
  organIcon: string = `assets/graph-icons/Icons/Organ.png`;
  // Data to display
  hierarchical!: IHierarchical;
  // UI config
  draggingEnabled = true;
  panningEnabled = true;
  zoomEnabled = true;
  zoomSpeed = 0.1;
  minZoomLevel = 0.4;
  maxZoomLevel = 4.0;
  panOnZoom = true;
  autoZoom = false;
  autoCenter = true;
  layout = 'colaForceDirected';
  center$: Subject<boolean> = new Subject();
  zoomToFit$: Subject<boolean> = new Subject();
  // checkboxElement = "<input type='checkbox'>";
  constructor() { }

  ngOnInit(): void {
    const NODES = [
      
      {
        id: 'node6',
        label: '9399980727',
        name:'Lucilia Prescott',
        meta: {
          link: this.accountIcon,
          url: 'url(#node2)',
        },
      },
      {
        id: 'node7',
        label: '1864999811',
        name:'BakersDel Yummy ltd.',
        meta: {
          link: this.organIcon,
          url: 'url(#node3)',
        },
      },
      //
      {
        id: 'node8',
        label: '1284778633',
        name:'Edward Lazzarini',
        meta: {
          link: this.accountIcon,
          url: 'url(#node4)',
        },
      },
      {
        id: 'node9',
        label: '0012328322',
        name:'Kayla Blamey',
        meta: {
          link: this.accountIcon,
          url: 'url(#node5)',
        },
      },
      {
        id: 'node10',
        label: '3323484332',
        name: 'Alyssa Edmond',
        meta: {
          link: this.accountIcon,
          url: 'url(#node5)',
        },
        
      }
    ];

    const LINKS = [
      
      
      {
        id: 'social-link-2',
        source: 'node6',
        target: 'node7',
        label: '$1,259,996.98',
      },
      {
        id: 'social-link-3',
        source: 'node8',
        target: 'node6',
        label: '$2,299,086.98',
      },
      {
        id: 'social-link-4',
        source: 'node9',
        target: 'node8',
        label: '$3,345,656.98',
      },
      {
        id: 'social-link-5',
        source: 'node10',
        target: 'node9',
        label: '$7,224,234.98',
      },
      {
        id: 'social-link-6',
        source: 'node7',
        target: 'node10',
        label: '$9,058,086.98'
      }
    ];

    this.hierarchical = {
      nodes: NODES,
      links: LINKS,
    };
  }

}

