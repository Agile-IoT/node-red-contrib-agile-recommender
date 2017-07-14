module.exports = function(RED){
  function RecommenderNode(config) {
    RED.nodes.createNode(this,config);
    // node-specific code goes here

}

RED.nodes.registerType("recommender",RecommenderNode);
}
