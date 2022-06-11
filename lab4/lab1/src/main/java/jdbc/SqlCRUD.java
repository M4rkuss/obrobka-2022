package jdbc;


import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import footballers.Footballers;
import servlet.LabCRUDInterface;

public class SqlCRUD implements LabCRUDInterface<Footballers> {
	
	Connection connection;
	
public SqlCRUD() {
		
		this.connection = new Connect().getCon();
		System.out.println(connection);
		
	}

	public Connection getConnection() {
		return connection;
	}

	public void setConnection(Connection connection) {
		this.connection = connection;
	}

	@Override
	public void create(Footballers t) {
		// TODO Auto-generated method stub
		try (PreparedStatement st = connection.prepareStatement("INSERT INTO Footballers (title,age,info) " + "VALUES (?,?,?)")) {
			st.setString(1, t.getTitle());
			st.setInt(2, t.getAge());
			st.setString(3, t.getInfo());
			st.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

	@Override
	public List<Footballers> read() {
		// TODO Auto-generated method stub
		List<Footballers> list = new ArrayList<>();

		try (Statement st = connection.createStatement(); ResultSet rs = st.executeQuery("SELECT * FROM Footballers;");) {
			while (rs.next()) {
				list.add(new Footballers(rs.getInt(1),rs.getString(2),rs.getInt(3), rs.getString(4)));
			}

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return list;
	}
		

	@Override
	public void update(int id, Footballers t) {
		// TODO Auto-generated method stub
		try(PreparedStatement st = connection.prepareStatement("UPDATE Footballers " + "SET \"title\"=?,\"age\"=?, \"info\"=? WHERE id=?;")){
			st.setString(1, t.getTitle());
			st.setInt(2, t.getAge());
			st.setString(3, t.getInfo());
			st.setInt(4, id);
			st.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub
		try(PreparedStatement st =
				connection.prepareStatement("DELETE FROM Footballers WHERE id=?;")){
			st.setInt(1, id);
			st.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

}
