/*******************************************************************************
 *Copyright (C) 2017 Create-Net / FBK.
 *All rights reserved. This program and the accompanying materials
 *are made available under the terms of the Eclipse Public License 2.0
 *which accompanies this distribution, and is available at
 *https://www.eclipse.org/legal/epl-2.0/
 *
 *Contributors:
 *    Create-Net / FBK - initial API and implementation
 ******************************************************************************/

module.exports = function(RED){
  function RecommenderNode(config) {
    RED.nodes.createNode(this,config);
    // node-specific code goes here

}

RED.nodes.registerType("recommender",RecommenderNode);
}
