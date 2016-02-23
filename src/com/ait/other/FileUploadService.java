package com.ait.other;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MultivaluedMap;
import javax.ws.rs.core.Response;

import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResource;
import org.jboss.resteasy.plugins.providers.multipart.InputPart;
import org.jboss.resteasy.plugins.providers.multipart.MultipartFormDataInput;

@Path("/files")
	public class FileUploadService {	//http://localhost:8080/individual_project/rest/players

	private static final String SERVER_UPLOAD_LOCATION_FOLDER = "C:/Users/Neil/workspace/individual_project/WebContent/images/";
@POST
@Path("/upload")
@Consumes("multipart/form-data")
public Response uploadFile(MultipartFormDataInput input) {

	 String fileName = "";
	 Map<String, List<InputPart>> formParts = input.getFormDataMap();
	 List<InputPart> inPart = formParts.get("file");
	 	for (InputPart inputPart : inPart) {
	 		try {
	 			// Retrieve headers, read the Content-Disposition header to obtain the original name of the file
	 			MultivaluedMap<String, String> headers = inputPart.getHeaders();
	 			fileName = parseFileName(headers);
	 			Scanner in;
	 			try {
	 				in = new Scanner(new FileReader("http://localhost:8080/individual_project/"));
	 				while (in.hasNextLine()) {
	 					   final String lineFromFile = in.nextLine();
	 					   if(lineFromFile.contains("transfers")) { 
	 						   System.out.println("I found uploadButton in file " + lineFromFile);
	 					       break;
	 					   }
	 					   
	 					}
	 			} catch (FileNotFoundException e) {
	 				// TODO Auto-generated catch block
	 				e.printStackTrace();
	 			}
	 			// Handle the body of that part with an InputStream
	 			InputStream istream = inputPart.getBody(InputStream.class,null);
	            fileName = SERVER_UPLOAD_LOCATION_FOLDER + fileName;
	            saveFile(istream,fileName);
	              } catch (IOException e) {
	                e.printStackTrace();
	              }
	            }
	                String output = "File saved to server location : " + fileName;
	        return null;
	    }
	    // Parse Content-Disposition header to get the original file name
	    private String parseFileName(MultivaluedMap<String, String> headers) {
	        String[] contentDispositionHeader = headers.getFirst("Content-Disposition").split(";");
	        for (String name : contentDispositionHeader) {
	            if ((name.trim().startsWith("filename"))) {
	                String[] tmp = name.split("=");
	                String fileName = tmp[1].trim().replaceAll("\"","");
	                return fileName;
	            }
	        }
	        return "randomName";
	    }

	    // save uploaded file to a defined location on the server
	    private void saveFile(InputStream uploadedInputStream, String serverLocation) {
	        try {
	            OutputStream outpuStream = new FileOutputStream(new File(serverLocation), false);
	            int read = 0;
	            byte[] bytes = new byte[1024];
	            
	            outpuStream = new FileOutputStream(new File(serverLocation));
	            while ((read = uploadedInputStream.read(bytes)) != -1) {
	                outpuStream.write(bytes, 0, read);
	            }
	            outpuStream.flush();
	            outpuStream.close();
	            System.out.println("file upload successful");
	        } catch (IOException e) {
	        }
	    }
}