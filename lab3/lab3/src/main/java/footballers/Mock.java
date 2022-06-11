package footballers;

import java.util.ArrayList;
import java.util.List;

public class Mock {

	private List<Footballers> footballersList = new ArrayList<>();

	public Mock() {
		this.footballersList.add(new Footballers(0, "Messi", 40, "oldest footballer"));
		this.footballersList.add(new Footballers(1, "Ronaldo", 40, "best footballer"));
		this.footballersList.add(new Footballers(2, "Mbappe", 2, "yungest footballer"));
	
	}
	
	public List<Footballers> getFootballersList() {
		return footballersList;
	}

	public void setFootballersList(List<Footballers> footballersList) {
		this.footballersList = footballersList;
	}


	
	
}

