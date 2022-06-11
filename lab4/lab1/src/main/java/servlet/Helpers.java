package servlet;

import java.io.IOException;
import java.util.Iterator;
import java.util.List;

import com.google.gson.JsonElement;
import com.google.gson.JsonIOException;
import com.google.gson.JsonParser;
import com.google.gson.JsonSyntaxException;

import jakarta.servlet.http.HttpServletRequest;
import footballers.Footballers;

public class Helpers {

	public static JsonElement bodyParse(HttpServletRequest request) {
		JsonElement jsonElement=null;	
		
		try {
			jsonElement = JsonParser.parseReader(request.getReader());
		} catch (JsonIOException | JsonSyntaxException | IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return jsonElement;
	}
	
	public static Footballers footballersParse(HttpServletRequest request) {
		Footballers footballers = new Footballers();
		JsonElement jsonElement = bodyParse(request);
		footballers.setId(jsonElement.getAsJsonObject().get("id").getAsInt());
		footballers.setTitle(jsonElement.getAsJsonObject().get("title").getAsString());
		footballers.setAge(jsonElement.getAsJsonObject().get("age").getAsInt());
		footballers.setInfo(jsonElement.getAsJsonObject().get("info").getAsString());
		
		return footballers;
	}
	
	
	public static int getNextId(List<Footballers> list) {
		int maxId = 0;
		Iterator<Footballers> iterator = list.iterator();
		while(iterator.hasNext()) {
			int currentId = iterator.next().getId();
			if(currentId>maxId) maxId=currentId;
		}
		return maxId+1;
	}
	
	public static int getIndexByfootballersId(int Id,List<Footballers> list) {
		int listId = Id;
		
		Iterator<Footballers> iterator = list.iterator();
		while(iterator.hasNext()) {
			Footballers temp =iterator.next();
			if(temp.getId()==listId) { 
				listId=list.indexOf(temp);
				break;
			}
		}
		return listId;
	}
	
}