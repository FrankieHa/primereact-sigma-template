//import { type } from 'os';
import TreeNode from 'primereact/components/treenode/TreeNode';

export interface Node extends TreeNode {
    key?: NodeKey
    data?: NodeData
}

export type NodeKey = string

interface NodeData {
    name?: string
    size?: string
    type?: string
}

export class NodeService {

    getFiles(_this: any) {
        return fetch('assets/demo/data/files.json')
            .then(res => res.json()).then(data=>data.data)
            .then(data => {
                _this.setState({ files: data })
                return data
            })
    }

    getFilesystem(_this: any) {
        return fetch('assets/demo/data/filesystem.json')
            .then(res => res.json())
            .then(data => {
                _this.setState({ files: data.data })
                return data.data
            })

    }

    getTreeNodes() {
        return fetch('assets/demo/data/treenodes.json')
            .then(res => res.json()).then(data=>data.root)
    }

    getTreeTableNodes(): Promise<Array<Node>> {
        return fetch('assets/demo/data/treetablenodes.json')
                .then(res => res.json()).then(data=>data.root)
    }

}
