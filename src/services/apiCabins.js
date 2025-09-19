import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabins couldn't be downloaded");
  }
  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  //https://kyjbqzjmefdniwgaygzl.supabase.co/v1/object/public/cabin-images/cabin-001.jpg
  // 1.Create/Edit cabin
  let query = supabase.from("cabins");
  // A. Create cabin
  if (!id) {
    query = query.insert([{ ...newCabin, image: imagePath }]);
    console.log("creating");
  }
  if (id) {
    query = query.update({ ...newCabin, image: imagePath }).eq("id", id);
    console.log("editing");
  }
  const { data, error } = await query.select().single();
  if (error) {
    console.error(error);
    throw new Error(`Cabins couldn't be created ${id ? "edited" : "created"}`);
  }
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Cabin's image couldn't be uploaded and cabin wasn't created"
    );
  }

  return data;
}

export async function deleteCabin({ id, image }) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabins couldn't be deleted");
  }
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .remove([image.split("/").at(-1)]);
  if (storageError) {
    console.error(storageError);
    throw new Error("image couldn't be deleted");
  }
  return;
}
