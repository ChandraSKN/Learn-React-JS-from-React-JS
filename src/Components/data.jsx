import { useState, useCallback } from 'react';
import ReactFlow, { addEdge,Controls, Background,applyNodeChanges,MiniMap, applyEdgeChanges } from 'reactflow';
import 'reactflow/dist/style.css';

const firstElements = [
    {
      id: '1',
      type: 'input',
      data: {label:'ReactJS'},
      position: { x:0, y:0 },
    },
  ];

  const onLoad = (ReactFlowInstance) => {
    ReactFlowInstance.fitView();
  }
  
  function MindMap() {
    const [nodes, setNodes] = useState(firstElements);
    const [name, setName] = useState("");
    const [edges, setEdges] = useState(firstElements);

    const addElement = () =>{
        setNodes(e => e.concat({
            id: (e.length+1).toString(),
            data: {label:  `${name}`},
            position: {x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight}
        }))
    }
    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        []
      );

      const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        []
      );

      const onConnect = useCallback((params) => setNodes(e=> addEdge(params,e)),[]);
    return (

        
      <div style={{ width:'100%', height: '90vh' }}>
        <div>
            <input type ="text"
            onChange={e=> setName(e.target.value)}
            name="title"/>
            <button
            type="button"
            onClick={addElement}
            >
             Enter your value   
            </button>
        </div>
        <ReactFlow nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onLoad ={onLoad}
        onConnect ={onConnect}
        connectionLineStyle = {{stroke: "#ddd", strokeWidth: 2}}
        connectionLineType ="bezier"
        // snapToGrid={true}
        // snapGrid ={[16,16]}
        >
            <MiniMap
           nodeColor={n=>{
            if(n.type == 'input') return 'blue';
            return '#FFCC00'
           }} ></MiniMap>
          <Background color='red'/>
          
        </ReactFlow>

        
      </div>
    );
  }
  
  export default MindMap;