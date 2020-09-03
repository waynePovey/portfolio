import { Injectable } from '@angular/core';
import { Scene, AbstractMesh, SceneLoader, MeshBuilder, StandardMaterial, CubeTexture, Texture, Mesh, TransformNode, Vector3 } from '@babylonjs/core';
import Utils from '../common/utils';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor() { }

  public loadModel(scene: Scene, url: string, model: string): Promise<AbstractMesh[]> {
    return new Promise<AbstractMesh[]>(resolve => {
      SceneLoader. ImportMesh('', url, model, scene, (meshes) => {
        resolve(meshes);
      });
    });
  }

  public createSkybox(scene: Scene, url: string): void {
      const sbMesh = MeshBuilder.CreateBox('skyBox', { size: 1000000 }, scene);
      const sbMat = new StandardMaterial('skyBox', scene);
      sbMat.backFaceCulling = false;
      sbMesh.material = sbMat;
      sbMesh.infiniteDistance = true;
      sbMat.reflectionTexture = new CubeTexture(url, scene);
      sbMat.reflectionTexture.coordinatesMode = Texture.SKYBOX_MODE;
      sbMat.disableLighting = true;
  }

  public createTransformNode(scene: Scene, mesh: string, parent?: string): TransformNode {
    const m = scene.getMeshByID(mesh);
    const co = new TransformNode(`co${Utils.capitaliseString(mesh)}`, scene);
    co.setParent(scene.getMeshByID(parent) || null);
    co.position = new Vector3(0, 0, 0);
    m.setParent(co);

    return co;
  }
}